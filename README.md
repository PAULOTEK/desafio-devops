# 📌 API de Tarefas

API RESTful desenvolvida com **Node.js + TypeScript** para gerenciar tarefas. Inclui documentação Swagger, CI/CD com GitHub Actions e suporte a Docker.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express.js
- Swagger (OpenAPI)
- Docker
- GitHub Actions

---

## 📂 Estrutura de Diretórios

```bash
src/
├── controllers/
├── data/
├── models/
├── routes/
├── swagger.yaml
├── index.ts

```

Versão: 1.0.0  
OAS: 3.0  
Descrição: API para gerenciar tarefas.

## Endpoints

### 1. `GET /api/tasks`
Retorna uma lista de tarefas.

#### Parâmetros
- Nenhum parâmetro é necessário para essa rota.

#### Respostas
| Código | Descrição         | Links |
|--------|-------------------|-------|
| 200    | Lista de tarefas  | N/A   |

#### Tipo de mídia
- `application/json`

#### Exemplo de resposta

```json
[
  {
    "id": 1,
    "name": "Tarefa 1",
    "completed": false
  },
  {
    "id": 2,
    "name": "Tarefa 2",
    "completed": true
  }
]
```
![Diagrama da API](https://github.com/PAULOTEK/desafio-devops/blob/main/%20docs/diagrama-api.png?raw=true)
