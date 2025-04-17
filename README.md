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

Compilação e Deploy
Processo de Compilação e Build
O processo de compilação e build da aplicação está automatizado através de um pipeline de CI/CD no GitHub Actions. Ele é responsável por compilar o código, rodar testes (se definidos) e criar artefatos de build para o deploy.

Passos no Pipeline de Build:
Checkout do Repositório: A primeira etapa do pipeline faz o checkout do código fonte do repositório.

Instalação de Dependências: Utilizando o npm install, as dependências do projeto são instaladas.

Rodar Testes: Caso existam testes definidos no projeto, eles serão executados. (Neste caso, temos um placeholder, então não há testes sendo executados).

Build do Projeto: O comando npm run build é executado para gerar a versão compilada do projeto.

Salvar Artefatos de Build: O artefato gerado (geralmente a pasta dist) é salvo para ser usado nas etapas posteriores.

Processo de Release
O estágio de Release cria uma versão do projeto no GitHub. A versão é gerada com base no commit atual, e é criada uma tag no repositório com a versão e número do run.

Passos no Pipeline de Release:
Download do Artefato de Build: O artefato gerado no estágio de build é baixado para ser utilizado no deploy.

Criar Release no GitHub: Uma nova release é criada no GitHub utilizando a tag v1-{run_number}, e o código da release é disponibilizado.

Processo de Deploy
No estágio de Deploy, a aplicação é empacotada como uma imagem Docker e enviada para o Docker Hub, pronto para ser implantado no ambiente de produção ou teste.

Passos no Pipeline de Deploy:
Download do Artefato de Build: O artefato de build gerado é baixado novamente.

Construir Imagem Docker: O Dockerfile é usado para criar uma imagem Docker a partir do código.

Login no Docker Hub: A autenticação no Docker Hub é feita com o uso de credenciais armazenadas como GitHub Secrets (DOCKER_USERNAME e DOCKER_PASSWORD).

Subir Imagem para o Docker Hub: Após construir a imagem Docker, ela é enviada para o Docker Hub, tornando-a disponível para qualquer ambiente de teste ou produção.

Notificação de Sucesso: Uma mensagem é exibida no console indicando que o deploy foi concluído com sucesso.

Como Rodar Localmente
Requisitos:
Node.js (versão 22 ou superior).

Docker (para build e deploy via Docker).

Passos para rodar a API localmente:
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor localmente:

bash
Copiar
Editar
npm run dev
O servidor estará disponível em http://localhost:3000, e você poderá testar a API utilizando o endpoint /api/tasks.

Configuração do Docker (para deploy)
1. Criando a Imagem Docker
Para criar uma imagem Docker da sua aplicação, utilize o seguinte comando:

bash
Copiar
Editar
docker build -t seu-usuario/seu-repositorio:latest .
2. Logando no Docker Hub
Antes de enviar a imagem para o Docker Hub, faça login no Docker Hub com o comando:

bash
Copiar
Editar
docker login
3. Enviando a Imagem para o Docker Hub
Depois de criar a imagem, envie-a para o Docker Hub com o comando:

bash
Copiar
Editar
docker push seu-usuario/seu-repositorio:latest
Agora, a imagem estará disponível no Docker Hub e pode ser usada para implantação em qualquer ambiente que utilize Docker.

Se precisar de mais ajustes ou explicações, é só avisar!

css
Copiar
Editar

Esse `README.md` já inclui a documentação sobre os endpoints da API, o processo de build e deploy, como rodar a aplic