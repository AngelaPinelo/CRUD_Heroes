# CRUD_Heroes 💪🏻
Este proyecto consiste en un CRUD (Create, Read, Update, Delete) con Node.js y Express en el backend y React en el frontend

</br>

<p align="center">
  <img src="https://media.giphy.com/media/K6XVjfH1zp5yE/giphy.gif?cid=790b7611pr11wt2t1ep9tgjhfslxov2zej4yi9zropckuizj&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Thanks">
</p>
</br>
La estructura del proyecto es la siguiente: 
- Se encuentra el folder llamado backendUbiquo (en este folder se aloja el backend de nuestro CRUD)
- Se encuentra el folder llamado frontUbiquo (dentro de este folder existe otro con el mismo nombre el cual contiene el frontend del proyecto)

## Instrucciones para probarlo ✏️

Puedes descargar el proyecto cómo un zip o clonar el repositorio, debes de tener instalado Node 20.16.0

### Para el Backend
- Debes asegurarte de estar en la carpeta correspondiente (backendUbiquo) y abrirla en la terminal
- Debes ejecutar el siguiente comando:
   `npm install`
  Esto instalará todos los paquetes y módulos necesarios para el correcto funcionamiento del proyecto
- Debes agregar un archivo *.env* al mismo nivel que se encuentra el archivo *package.json*
- En el archivo .env debes agregar una variable de entorno llamada MONGODB_URI a la que se le debe dar el valor de la URI para conectarse a la BD heroes
- Adicional puedes agregar una variable de entorno llamada PORT y asignarle el valor del puerto en que quieres que corra la aplicación (por default la aplicación corre en el puerto 4000)
- Ejecuta el siguiente comando para correr el proyecto:
   `npm start`

### Para el Frontend
- Debes asegurarte de estar en la carpeta correspondiente (frontUbiquo la que está dentro de la principal llamada también frontUbiquo) y abrirla en la terminal
- Debes ejecutar el siguiente comando:
   `npm install`
  Esto instalará todos los paquetes y módulos necesarios para el correcto funcionamiento del proyecto
- Ejecuta el siguiente comando para correr el proyecto:
   `npm run dev`
- En consola se mostrará el link local dónde se muestra el proyecto


