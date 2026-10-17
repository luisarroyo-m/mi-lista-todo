# Lista de tareas

## Nombre de la aplicación

**Lista de tareas — Organiza mi día**

## Descripción

Esta es una aplicación web sencilla creada con **React** que permite organizar las tareas del día. El usuario puede escribir una tarea, agregarla a una lista y presionar el botón **«Hecho»** cuando la termine para quitarla de la lista.

El proyecto fue desarrollado para practicar los conceptos básicos de React, como los **componentes**, el estado con **`useState`** y la interacción con botones y campos de texto.

## Tecnologías utilizadas

- **HTML:** estructura de los elementos de la página, escrita mediante JSX.
- **CSS:** estilos y presentación de la aplicación.
- **JavaScript:** lógica para agregar y quitar tareas.
- **React:** biblioteca utilizada para crear la interfaz mediante componentes.
- **Vite:** herramienta para crear y ejecutar el proyecto durante el desarrollo.
- **Visual Studio Code:** editor utilizado para escribir el código.
- **Git y GitHub:** control de versiones y almacenamiento del proyecto.

## Requisitos previos

Antes de ejecutar la aplicación, es necesario tener instalado **Node.js**, que incluye **npm**.

## Pasos para instalar y ejecutar

1. Descargar el proyecto desde GitHub (opción **Code → Download ZIP**) y descomprimirlo, o clonarlo si se conoce la dirección del repositorio.
2. Abrir la carpeta del proyecto en **Visual Studio Code**.
3. Abrir una terminal desde el menú **Terminal → New Terminal**.
4. Instalar las dependencias con el comando:

   ```bash
   npm install
   ```

5. Iniciar la aplicación con:

   ```bash
   npm run dev
   ```

6. Abrir en el navegador la dirección local que aparece en la terminal (por ejemplo, `http://localhost:5173/`).

Para detener el servidor de desarrollo, presionar **Ctrl + C** en la terminal.

## ¿Cómo se utiliza?

1. Escribir una actividad en el campo **«Escribe una tarea»**.
2. Presionar **«Agregar tarea»** para incorporarla a la lista.
3. Repetir el proceso para añadir más actividades.
4. Cuando una actividad esté terminada, presionar **«Hecho»** junto a ella. La tarea desaparecerá de la lista.

**Nota:** actualmente las tareas se guardan en el estado de React mientras se utiliza la página. Si se recarga el navegador, la lista vuelve a estar vacía.

## Componentes principales

- **`App.jsx`:** componente principal. Guarda la lista de tareas con `useState` y contiene las funciones para agregar y quitar tareas.
- **`TaskForm.jsx`:** muestra el campo de texto y el botón para agregar una tarea.
- **`EliminarTarea.jsx`:** muestra el botón **«Hecho»**, que permite quitar una tarea de la lista.
- **`App.css`:** contiene los estilos de la aplicación.

## Objetivo del proyecto

Aprender a construir una aplicación interactiva sencilla con React, utilizando componentes reutilizables, comunicación mediante props y manejo del estado con `useState`.
