# Aplicación Móvil InterLibros (Demo)

App móvil desarrollada en React Native

## Inicio

La aplicación se probo en emulador Android, para el correcto funcionamiento debe estar iniciado la api rest InterLibros (https://github.com/drincast/apiinterlibros.git).

A continuación se describen unos pasos para obtener una copia y ejecutar la aplicación

### Prerequisites

Tener instalado el entorno NodeJS
Instalar el CLI de react native
Tener instalaso el sdk de Android (https://developer.android.com/studio/index.html?hl=es-419)
Crear un emulador con el AVD Manager
```
$ npm i -g react-native-cli
```

### Instalación

Entrar a la carpeta raíz del proyecto y ejecutar el siguiente comando

```
npm install
```

luego de  ejecutar la instalación

```
npm install
```

Iniciar el emulador de Android, cuando ya el emulador este funcional, ejecutar el siguiente comando
```
$ react-native run-android
```

---
### Algunas Pantallas

Al iniciar la aplicación, se debe logear (usuario de prueba usuario02, password 123456)

 ![alt text](https://raw.githubusercontent.com/drincast/InterLibros/master/imagenes/imagen01.JPG)

Luego de loguearse se visualiza la pantalla de búsqueda de libros

![alt text](https://raw.githubusercontent.com/drincast/InterLibros/master/imagenes/imagen02.JPG)

El la caja de texto, se escribe lo que se quiere buscar, al cliquear el botón buscar, se visualizara una lista de los posibles resultados.
En la barra de navegación hay una opción para ver los mensajes (Ver Mensajes), esta opción es para ver los mensajes de peticiones de libros que realizan otros usuarios (esta parte se visualizara al final)
Si cliquea un ítem de la lista, se pasa a la pantalla de detalle del libro.

![alt text](https://raw.githubusercontent.com/drincast/InterLibros/master/imagenes/imagen03.JPG)

En esta pantalla se visualiza información de la aplicación, si se cliquea el botón ENVIAR SOLICITUD, se envía un mensaje al usuario dueño del libro expresando el interés en el.

Para ver los mensajes de solicitud realizados al usuario en la pantalla de búsqueda de libro, en la parte superior (barra de navegación), hay un vinculo (Ver Mensajes), donde se visualiza los mensajes

 ![alt text](https://raw.githubusercontent.com/drincast/InterLibros/master/imagenes/imagen04.JPG)


## Versioning
1.0.0


## Authors
* **Rubén Orozco**

## License
The JavaScript Templates script is released under the [MIT license](https://opensource.org/licenses/MIT).
