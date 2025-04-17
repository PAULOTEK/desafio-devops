import { Request, Response } from 'express';
import { tasks } from '../data/tasks';
import { Task } from '../models/task';

// Atualiza o nextId baseado nas tasks existentes
let nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

const validStatuses = ['pendente', 'em progresso', 'concluída'];

export const getAllTasks = (req: Request, res: Response) => {
    res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
    res.json(task);
};

export const createTask = (req: Request, res: Response) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'O campo "title" é obrigatório.' });

    const newTask: Task = {
        id: nextId++,
        title,
        description,
        status: 'pendente'
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });

    const { title, description, status } = req.body;

    if (status && !validStatuses.includes(status)) {
        return res.status(400).json({ error: `Status inválido. Use: ${validStatuses.join(', ')}` });
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;

    res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Tarefa não encontrada.' });

    tasks.splice(index, 1);
    res.status(204).send();
};
