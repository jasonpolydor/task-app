<?php
namespace AppBundle\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class Helpers{

    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
    }

	public function json($data){
		$normalizers = [new GetSetMethodNormalizer()];
		$encoders = ['json' => new JsonEncoder()];

		$serializer = new Serializer($normalizers, $encoders);
		$json = $serializer->serialize($data, 'json');

		$response = new Response();
		$response->setContent($json);
		$response->headers->set('Content-Type','application/json');
        // Allow all websites
        $response->headers->set('Access-Control-Allow-Origin', '*');

		return $response;

	}

}

