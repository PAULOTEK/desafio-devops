
# 📌 API de Tarefas

API RESTful desenvolvida com **Node.js + TypeScript** para gerenciar tarefas. Inclui documentação Swagger, CI/CD com GitHub Actions e suporte a Docker.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express.js
- Swagger (OpenAPI)
- Docker
- Docker-compose
- PostgreSQL
- Prisma
- GitHub Actions

---

## 📂 Estrutura de Diretórios

```bash
prisma/
├── schema.prisma
src/
├── controllers/
├── config/
├── data/
├── models/
├── routes/
└── server.ts
```

---

## Versão: 1.0.0  
**OAS**: 3.0  
**Descrição**: API para gerenciar tarefas.

---

## Endpoints

### 1. `GET /api/tasks`
Retorna uma lista de tarefas.

#### Respostas
- **200 OK**: Lista de tarefas retornada com sucesso.

#### Exemplo de resposta:
```json
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Descrição da Tarefa 1",
    "status": "pendente",
    "createdAt": "2025-04-29T12:00:00Z",
    "updatedAt": "2025-04-29T12:00:00Z"
  },
  {
    "id": 2,
    "title": "Tarefa 2",
    "description": "Descrição da Tarefa 2",
    "status": "concluída",
    "createdAt": "2025-04-29T12:00:00Z",
    "updatedAt": "2025-04-29T12:00:00Z"
  }
]
```

---

### 2. `POST /api/tasks`
Cria uma nova tarefa.

#### Parâmetros
- **title** (obrigatório): Título da tarefa.
- **description** (opcional): Descrição da tarefa.

#### Resposta
- **201 Created**: Tarefa criada com sucesso.

#### Exemplo de requisição:
```json
{
  "title": "Nova Tarefa",
  "description": "Descrição detalhada da tarefa"
}
```

#### Exemplo de resposta:
```json
{
  "id": 3,
  "title": "Nova Tarefa",
  "description": "Descrição detalhada da tarefa",
  "status": "pendente",
  "createdAt": "2025-04-29T12:10:00Z",
  "updatedAt": "2025-04-29T12:10:00Z"
}
```

---

### 3. `GET /api/tasks/{id}`
Retorna uma tarefa específica pelo ID.

#### Parâmetros
- **id** (obrigatório): ID da tarefa a ser recuperada.

#### Resposta
- **200 OK**: Tarefa encontrada.
- **404 Not Found**: Tarefa não encontrada.

#### Exemplo de resposta:
```json
{
  "id": 1,
  "title": "Tarefa 1",
  "description": "Descrição da Tarefa 1",
  "status": "pendente",
  "createdAt": "2025-04-29T12:00:00Z",
  "updatedAt": "2025-04-29T12:00:00Z"
}
```

---

### 4. `PUT /api/tasks/{id}`
Atualiza uma tarefa existente pelo ID.

#### Parâmetros
- **id** (obrigatório): ID da tarefa a ser atualizada.
- **title** (opcional): Novo título da tarefa.
- **description** (opcional): Nova descrição da tarefa.
- **status** (opcional): Novo status da tarefa.

#### Resposta
- **200 OK**: Tarefa atualizada com sucesso.
- **404 Not Found**: Tarefa não encontrada.

#### Exemplo de requisição:
```json
{
  "title": "Tarefa Atualizada",
  "description": "Nova descrição da tarefa",
  "status": "em progresso"
}
```

#### Exemplo de resposta:
```json
{
  "id": 1,
  "title": "Tarefa Atualizada",
  "description": "Nova descrição da tarefa",
  "status": "em progresso",
  "createdAt": "2025-04-29T12:00:00Z",
  "updatedAt": "2025-04-29T12:30:00Z"
}
```

---

### 5. `DELETE /api/tasks/{id}`
Exclui uma tarefa pelo ID.

#### Parâmetros
- **id** (obrigatório): ID da tarefa a ser excluída.

#### Resposta
- **204 No Content**: Tarefa excluída com sucesso.
- **404 Not Found**: Tarefa não encontrada.

---

## 📝 Documentação Swagger

A documentação Swagger da API pode ser acessada através do seguinte link:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Diagrama da API

![Diagrama da API](https://github.com/PAULOTEK/desafio-devops/blob/main/%20docs/diagrama-api.png?raw=true)

---

## 🚀 Como rodar a aplicação

### 1. Instalação

Clone o repositório:

```bash
git clone https://github.com/PAULOTEK/desafio-devops.git
cd desafio-devops
```

Instale as dependências:

```bash
npm install
```

### 2. Rodando com Docker

Para rodar a aplicação com Docker, use o comando:

```bash
docker-compose up
```

Isso irá iniciar a API e o banco de dados PostgreSQL.

---

## 🛠️ CI/CD com GitHub Actions

O projeto está configurado com um pipeline CI/CD utilizando GitHub Actions. As ações são configuradas no diretório `.github/workflows` e incluem etapas de build, testes e deploy.
