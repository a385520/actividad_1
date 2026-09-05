# Nombre del proyecto

<!--
============================================================
 PLANTILLA DE README.md PARA LOS ENTREGABLES (REPOSITORIOS)
 DE LAS TAREAS Y PRÁCTICAS DEL CURSO
 Sustituye los campos entre [ ] y elimina estos comentarios
 antes de entregar el repositorio.
============================================================
-->

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | [Ingeniería en Computación] |
| **Materia** | [Desarrollo de Aplicaciones Web] |
| **Docente** | [Luis Antonio Ramirez Martinez] |
| **Actividad** | Tarea 3: Desarrollo de Servicios Web con Node.js] |
| **Alumno** | [Nohemi Posada Atayde] |
| **Matrícula** | [385520] |
| **Fecha de entrega** | [04/09/2026] |

## Descripción

Aplicación web de gestión de tareas (TODO List) desarrollada con Node.js y Express. Las tareas se almacenan en memoria (sin base de datos) y se administran mediante una API REST y, adicionalmente, mediante un servicio SOAP que reutiliza la misma lógica de negocio. El proyecto incorpora además registro de eventos, refresco automático en desarrollo, análisis estático de código y pruebas unitarias.

## Objetivo

Aplicar los conceptos fundamentales de administración de paquetes con NPM y exponer las funcionalidades de una aplicación mediante servicios web REST y SOAP, integradno herramientas de desarrollo, calidad de código y pruebas que forman parte dde un flujo básico de trabajo con Node.js.

## Tecnologías utilizadas

-Node.js
-Express
-Soap(node-soap)
Log4js
Supervisor
Eslint 
Jest
NPM

## Requisitos previos

-Node.js (versión LTS recomendada)
-NPM 
-Postman(para probar los endpoints REST y las operaciones SOAP)
-Git

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd todo-app
npm install

## Ejecución

```bash
npm run dev
```
Por defecto la aplicación queda disponible en http://localhost:3000.

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `[npm start]` | [Inicia la aplicación en modo normal] |
| `[npm run dev]` | [Inicia la aplicación con Supervisor, reiniciándola automáticamente ante cambios en el código] |
| `[npm test]` | [Ejecuta las pruebas unitarias con Jest] |
| `[npm run lint]` | [Ejecuta el análisis estático del código con ESLint] |

## Funcionalidades / uso

La lógica de administración de tareas es compartida por las interfaces REST y SOAP. Cada tarea cuenta con: identificador, título/descripción y estado (pendiente/completada).

API REST (probada con Postman):

GET /api/tasks — Consulta las tareas existentes
POST /api/tasks — Crea una nueva tarea
PUT /api/tasks/:id — Modifica una tarea existente
DELETE /api/tasks/:id — Elimina una tarea

Servicio SOAP (probado con Postman, mediante solicitudes XML):

GetTasks — Consulta las tareas existentes
AddTask — Crea una nueva tarea

Logs (Log4js): se registran el inicio de la aplicación, la creación, modificación y eliminación de tareas, y los errores durante la ejecución.

## Pruebas

Las pruebas unitarias, implementadas con Jest, cubren la lógica de administración de tareas: creación, consulta, modificación y eliminación. Se ejecutan con:

<npm test>

## Análisis de calidad de código

El análisis estático del código JavaScript se realiza con ESLint. Se ejecuta con:
<npm run lint>

## Estructura general del proyecto

todo-app/
|-- src/
|   |-- app.js
|   |-- services/
|   |   `-- taskService.js
|   |-- routes/
|   |   `-- tasks.js
|   |-- soap/
|   |   `-- taskSoap.js
|   `-- logger.js
|-- tests/
|   `-- tasks.test.js
|-- logs/
|-- package.json
|-- package-lock.json
|-- eslint.config.js
|-- .gitignore
`-- README.md


## Autor

[Nohemi Posada Atayde] — [385520]
