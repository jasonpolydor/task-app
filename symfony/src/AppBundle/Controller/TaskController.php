<?php

namespace AppBundle\Controller;

use AppBundle\Service\Task\Listing;
use AppBundle\Service\Helpers;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{
    /**
     * @return mixed
     */
    public function indexAction()
    {
        $tasks = $this->get(Listing::class)->findTasks();

        return $this->get(Helpers::class)->json($tasks);
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function editAction($id, Request $request)
    {
        $params = json_decode($request->getContent(),true);

        $task = $this->get(Listing::class)->updateTask($id, $params);

        if(empty($task))
           return $this->get(Helpers::class)->json("Task not found");

        return $this->get(Helpers::class)->json("Success update task ". $id);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function newAction(Request $request)
    {
        $params = json_decode($request->getContent(),true);

        if(!$this->get(Listing::class)->addTask($params))
            return $this->get(Helpers::class)->json("Task not added");

        return $this->get(Helpers::class)->json("Success add new task");
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function deleteAction(Request $request)
    {
        $data = json_decode($request->getContent(),true);

        if(!$this->get(Listing::class)->deleteTask($data['id']))
            return $this->get(Helpers::class)->json("Task not deleted");

        return $this->get(Helpers::class)->json("Successfully delete of task ". $data['id']);
    }
}
