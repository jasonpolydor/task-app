<?php

namespace AppBundle\Controller;

use AppBundle\Service\Helpers;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{
  public function newAction(Request $request)
   {
      $query = $request->get("q");

      // if($request->getAcceptableContentTypes()[0] === 'application/json')
      // {
        return new JsonResponse('success');
      // }
      // else {
      //   return $this->render("AdminBundle:Task:new.html.twig", []);
      // }

  }
}
