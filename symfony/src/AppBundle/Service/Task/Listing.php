<?php

namespace AppBundle\Service\Task;

use CoreBundle\Entity\Task;
use CoreBundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Config\Definition\Exception\Exception;

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

        $user = $this->em->getRepository(User::class)->findOneBy([
            'id' => $data['user']
        ]);

        if (empty($task) || empty($data))
            return false;

        $task->setTitle($data['title']);
        $task->setUser($user);
        $task->setDescription($data['description']);
        $task->setStatus($data['status']);
        $this->em->persist($task);
        $this->em->flush();
        return true;
    }

    public function addTask($data){

        $user = $this->em->getRepository(User::class)->findOneBy([
            'id' => $data['user']
        ]);

        if (empty($data))
            return false;

        $task = new Task();
        $task->setTitle($data['title']);
        $task->setUser($user);
        $task->setDescription($data['description']);
        $task->setStatus($data['status']);
        $this->em->persist($task);
        $this->em->flush();
        return true;
    }

    public function deleteTask($id){
        $task = $this->em->getRepository(Task::class)->findOneBy([
            'id' => $id
        ]);

        if (!$task) {
            throw new Exception('No task found for id '.$id);
        }

        $this->em->remove($task);
        $this->em->flush();
        return true;
    }

    /**
     * @param array $tasks
     * @return array
     */
    public function prepare(array $tasks) {

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