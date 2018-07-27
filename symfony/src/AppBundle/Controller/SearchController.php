<?php
/**
 * Created by PhpStorm.
 * User: digital14
 * Date: 7/19/18
 * Time: 4:07 PM
 */

namespace AppBundle\Controller;


use AppBundle\Service\Helpers;
use AppBundle\Service\Task\Search;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class SearchController extends Controller
{
    public function indexAction(Request $request){
        $content = $request->get("q");

        return $this->get(Helpers::class)->json($this->get(Search::class)->getSearch($content));
    }
}