<?php

namespace AppBundle\Controller;

use AppBundle\Service\Tasks\Listing;
use AppBundle\Service\Helpers;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TasksController extends Controller
{
    public function indexAction(Request $request)
    {
        $tasks = $this->get(Listing::class)->findTasks();

        return $this->get(Helpers::class)->json($tasks);
    }
}
