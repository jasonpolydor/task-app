<?php

namespace AppBundle\Service\Translation;

use CoreBundle\Entity\Translation;
use Doctrine\ORM\EntityManagerInterface;

class Listing
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
    }

    /**
     * @return array
     */
    public function findTranslations()
    {
        $translations = $this->em->getRepository(Translation::class)->findAll();
        return [
            'translations' => $this->prepare($translations)
        ];
    }


    /**
     * @param array $translations
     * @return array
     */
    public function prepare(array $translations) {

        return array_map(function(Translation $translation) {

            return $this->transform($translation);

        },$translations);
    }

    /**
     * @param Translation $translation
     * @return array
     */
    private function transform(Translation $translation)
    {
        return [
            'id' => $translation->getId(),
            'en' => $translation->getEn(),
            'kr' => $translation->getKr()
        ];
    }
}