import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import { setupSwagger } from './swagger';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

setupSwagger(app); // Swagger

app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Documentação Swagger: http://localhost:${port}/api-docs`);
});
