import { Router } from 'express';
import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/taskController';

const router = Router();
/**
 * @openapi
 * /api/tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   status:
 *                     type: string
 */

router.get('/tasks', getAllTasks);
// @ts-ignore
router.get('/tasks/:id', getTaskById);
// @ts-ignore
router.post('/tasks', createTask);
// @ts-ignore
router.put('/tasks/:id', updateTask);
// @ts-ignore
router.delete('/tasks/:id', deleteTask);

export default router;
