<?php

namespace AppBundle\Controller;

use AppBundle\Services\Helpers;
use AppBundle\Services\JwtAuth;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{
    public function tasksAction(Request $request){
        $helpers = $this->get(Helpers::class);
        $jwt_auth = $this->get(JwtAuth::class);

        $token = $request->get("authorization",null);
        $authCheck = $jwt_auth->checkToken($token);

        if($authCheck){
            $identity = $jwt_auth->checkToken($token, true);

            $em = $this->getDoctrine()->getManager();

            $dql = "SELECT t FROM CoreBundle:Task t WHERE t.users = {$identity->sub} ORDER BY t.id DESC";
            $query = $em->createQuery($dql);

            $page = $request->query->getInt('page',1);
            $paginator = $this->get('knp_paginator');
            $items_per_page = 2;

            $pagination = $paginator->paginate($query, $page, $items_per_page);
            $total_items_count = $pagination->getTotalItemCount();

            $data = array(
                'status'=>'success',
                'code'	=>200,
                'total_items_count'	=> $total_items_count,
                'items_per_page' => $items_per_page,
                'total_pages' => ceil($total_items_count / $items_per_page),
                'data'=>$pagination
            );

        }else{
            $data = array(
                'status'=>'error',
                'code'	=>400,
                'msg'	=>'Authorization not valid'
            );
        }

        return $helpers->json($data);
    }
}
