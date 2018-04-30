<?php
/**
 * Created by PhpStorm.
 * User: digital14
 * Date: 4/30/18
 * Time: 8:08 PM
 */

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Tests\Controller;

class TaskController extends Controller
{
    public function newAction(Request $request, $id=null){
    }

    public function tasksAction(Request $request){
    }

    public function taskAction(Request $request, $id = null){
    }

    public function searchAction(Request $request, $search = null){
    }

    public function removeAction(Request $request, $id = null){
    }
}