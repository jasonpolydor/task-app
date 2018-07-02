<?php

namespace AppBundle\Service\Task;

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

    public function updateTask($id, $data){
        $task = $this->em->getRepository(Task::class)->findOneBy([
            'id' => $id
        ]);

        if (empty($task) || empty($data)) {
            return false;
        }
        else {
            $task->setTitle($data['title']);
            $task->setDescription($data['description']);
            $task->setStatus($data['status']);
            $this->em->persist($task);
            $this->em->flush();
            return true;
        }
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
            'user' => $task->getUser()->getId(),
            'title' => $task->getTitle(),
            'description' => $task->getDescription(),
            'status' => $task->getStatus()
        ];
    }
}