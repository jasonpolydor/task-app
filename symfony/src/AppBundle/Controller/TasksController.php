<?php

namespace AppBundle\Controller;

use AppBundle\Service\Tasks\Listing;
use AppBundle\Service\Helpers;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TasksController extends Controller
{
    public function indexAction()
    {
        $tasks = $this->get(Listing::class)->findTasks();

        return $this->get(Helpers::class)->json($tasks);
    }
}
