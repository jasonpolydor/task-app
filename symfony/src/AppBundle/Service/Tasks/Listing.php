<?php

namespace AppBundle\Service\Tasks;

use CoreBundle\Entity\Task;
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
    public function findTasks()
    {
        $tasks = $this->em->getRepository(Task::class)->findAll();
        return [
            'tasks' => $this->prepare($tasks)
        ];
    }

    /**
     * @param array $tasks
     * @return array
     */
    private function prepare(array $tasks) {

        return array_map(function(Task $task) {

            return $this->transform($task);

        },$tasks);
    }

    /**
     * @param Task $task
     * @return array
     */
    private function transform(Task $task)
    {
        return [
            'id' => $task->getId(),
            'user' => $task->getUser()->getUsername(),
            'title' => $task->getTitle(),
            'description' => $task->getDescription(),
            'status' => $task->getStatus(),
            'datetime' => [
                'createdAt' => $task->getCreatedAt()->getTimestamp(),
                'deadlineAt' => $task->getUpdatedAt()->getTimestamp()
            ],
        ];
    }
}