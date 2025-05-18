# My Todo App – Práctica Formativa Obligatoria 2

Mini–app de gestión de tareas **full-stack** con Angular (frontend), Node.js/Express (API) y MySQL, orquestada con **Docker Compose**.

Esta práctica pertence a la materia **“Seminario de Actualización DevOps”** de la carrera de Tecnicatura Superior en Desarrollo de Software 


## 🔧 Descripción de servicios (docker-compose.yml)

### db
  - Imagen oficial mysql:8.0
  - Monta db-init/init.sql para crear la base appdb y tabla tasks
  - Puerto del host: 3310 → 3306

### backend
  - Imagen hernans87/todo-backend:1.0
  - Variables de entorno: host, usuario, contraseña y BD
  - Puerto del host: 3000 → 3000

### frontend
  - Imagen hernans87/todo-frontend:1.0
  - Servido por Nginx en /usr/share/nginx/html
  - Puerto del host: 4200 → 80


## 🚀 Cómo levantar el entorno

### Requisitos

- **Docker**  
- **Docker Compose**

### Pasos

1. Clonar el repositorio  
  ```bash
  git clone https://github.com/HernanS87/docker-my-todo-app.git
  cd docker-my-todo-app
  ```

2. Descargar las imágenes de Docker Hub  
  ```bash
  docker-compose pull
  ```

3. Arrancar los contenedores en segundo plano  
  ```bash
  docker-compose up -d
  ```

4. Un vez en ejecución se podrá acceder a cada servicio en los destinos
  - Frontend (Angular + Nginx) → http://localhost:4200
  - API (Node.js/Express) → http://localhost:3000/tasks
  - Base de datos (MySQL) → localhost:3310 (opcional, p.ej. para Workbench)


