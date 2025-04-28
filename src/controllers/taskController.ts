import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const validStatuses = ['pendente', 'em progresso', 'concluída'];

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await prisma.task.findMany();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao recuperar tarefas.' });
    }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await prisma.task.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!task) {
            res.status(404).json({ error: 'Tarefa não encontrada.' });
            return;
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao recuperar tarefa.' });
    }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
    const { title, description } = req.body;
    if (!title) {
        res.status(400).json({ error: 'O campo "title" é obrigatório.' });
        return;
    }

    try {
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                status: 'pendente',
            },
        });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tarefa.' });
    }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    const { title, description, status } = req.body;

    if (status && !validStatuses.includes(status)) {
        res.status(400).json({ error: `Status inválido. Use: ${validStatuses.join(', ')}` });
        return;
    }

    try {
        const task = await prisma.task.update({
            where: { id: parseInt(req.params.id) },
            data: {
                title: title ?? undefined,
                description: description ?? undefined,
                status: status ?? undefined,
            },
        });

        res.json(task);
    } catch (error) {
        res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        await prisma.task.delete({
            where: { id: parseInt(req.params.id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
};
