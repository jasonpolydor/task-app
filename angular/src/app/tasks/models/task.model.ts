export class TaskModel {
    id: number;
    user: string;
    title: string;
    description: string;
    status: string;
    isEditable: boolean = false;
}
