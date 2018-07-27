<?php

namespace AppBundle\Controller;

use AppBundle\Service\Helpers;
use AppBundle\Service\Translation\Listing;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TranslationController extends Controller
{
    /**
     * @return mixed
     */
    public function indexAction(){
        $translations = $this->get(Listing::class)->findTranslations();

        return $this->get(Helpers::class)->json($translations);
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function editAction($id, Request $request){}

    /**
     * @param Request $request
     * @return mixed
     */
    public function newAction(Request $request){}

    /**
     * @param Request $request
     * @return mixed
     */
    public function deleteAction(Request $request){}

}
