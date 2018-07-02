<?php

namespace AppBundle\Controller;

use AppBundle\Service\Task\Listing;
use AppBundle\Service\Helpers;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{
    public function indexAction()
    {
        $tasks = $this->get(Listing::class)->findTasks();

        return $this->get(Helpers::class)->json($tasks);
    }

    public function editAction($id, Request $request)
    {
        //$params = json_decode($request->getContent(),true);
        //$data = $params['q'];

        $data = $request->get('q');

        $task = $this->get(Listing::class)->updateTask($id, $data);

        if(empty($task))
           return $this->get(Helpers::class)->json("Task not found");

        return $this->get(Helpers::class)->json("Success");
    }
}
