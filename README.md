# Configuración de un proyecto React con consumo de API

Este proyecto es una aplicación de React que consume un endpoint llamado `locations`. A continuación, se detallan los pasos para inicializar el proyecto de React usando Vite y configurarlo para consumir el endpoint.

## Requisitos

- Node.js = 20.11.0
- npm = 10.2.4

## Pasos para Inicializar el Proyecto

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Ariaz39/frontend_joonik.git
```
### 2. Ingresar a la Carpeta del Proyecto
```bash
cd frontend_joonik
```
### 3. Instalar las Dependencias
```bash
npm install
```
### 4. Crear un Archivo `.env` en la Raíz del Proyecto
```bash
touch .env
```
### 5. Agregar las siguientes variables al Archivo `.env`
```bash
REACT_APP_API_URL=http://backend_joonik.test/api
REACT_APP_API_KEY=e306562f-a827-46d7-bd6f-6fce54cdee0b
```
### 4. Iniciar el Proyecto
```bash
npm run dev
```
### 5. Abrir el Navegador
```bash
http://localhost:5174/
```
