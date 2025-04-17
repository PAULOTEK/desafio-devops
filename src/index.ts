import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Carregar o arquivo Swagger
const swaggerDocument = YAML.load('./src/swagger.yaml');

// Usar Swagger UI para documentação da API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

// Rotas da API
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
