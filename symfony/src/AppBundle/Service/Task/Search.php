<?php
/**
 * Created by PhpStorm.
 * User: digital14
 * Date: 3/15/18
 * Time: 5:18 PM
 */

namespace AppBundle\Service\Task;

use AppBundle\Service\Task\Listing;
use CoreBundle\Entity\Task;

use Doctrine\ORM\EntityManagerInterface;

/**
 * Class Search
 * @package AdminBundle\Service\Task
 */
class Search
{
    /**
     * @var EntityManagerInterface
     */
    protected $em;

    /**
     * @var Listing
     */
    protected $list;

    /**
     * Search constructor.
     * @param EntityManagerInterface $em
     * @param Listing $list
     */
    public function __construct(EntityManagerInterface $em, Listing $list)
    {
        $this->em = $em;
        $this->list = $list;
    }

    /**
     * @param $query
     * @return array
     */
    public function getSearch($query)
    {
        $search = $this->em->getRepository(Task::class)->searchTaskByKeyword($query);
        return $this->list->prepare($search);
    }
}