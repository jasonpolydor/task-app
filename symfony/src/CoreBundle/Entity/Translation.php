<?php

namespace CoreBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Translation
 *
 * @ORM\Table(name="translation")
 * @ORM\Entity(repositoryClass="CoreBundle\Repository\TranslationRepository")
 */
class Translation
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="en", type="string", length=255,nullable=true)
     */
    private $en;

    /**
     * @var string
     *
     * @ORM\Column(name="kr", type="string", length=255,nullable=true)
     */
    private $kr;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set en
     *
     * @param string $en
     *
     * @return Translation
     */
    public function setEn($en)
    {
        $this->en = $en;

        return $this;
    }

    /**
     * Get en
     *
     * @return string
     */
    public function getEn()
    {
        return $this->en;
    }

    /**
     * Set kr
     *
     * @param string $kr
     *
     * @return Translation
     */
    public function setKr($kr)
    {
        $this->kr = $kr;

        return $this;
    }

    /**
     * Get kr
     *
     * @return string
     */
    public function getKr()
    {
        return $this->kr;
    }
}

