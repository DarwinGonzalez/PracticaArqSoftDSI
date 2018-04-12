# Práctica Arquitectura Software
Práctica de laboratorio de Arquitectura del Software - Desarrollo Sistemas Informáticos 
***
Para esta práctica será necesario la cumplimentación de una serie de objetivos, tales como:

* Definir los aspectos claves del diseño de nuestra aplicación
    1. Determinar el tipo de aplicación
    2. Determinar la infraestructura y estrategia de despliegue
    3. Determinar las tecnologías a usar
    4. Determinar los atributos básicos de nuestra aplicación
    5. En base a todo lo anterior definir el estilo arquitectónico
* Implementar la funcionalidad básica de nuestra aplicación en base a la arquitectura elegida (usar el sistema de control de versiones para el desarrollo).

# Prototipo de aplicación MVC
![captura](https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/prototipo.png?raw=true)

### Definir los aspectos claves del diseño de nuestra aplicación

Determinar el tipo de aplicación:
* El tipo de aplicación que se ha elegido para el proyecto es una aplicación en la cual el usuario pueda introducir su película favorita (con una serie de campos relacionados con la película)
  y esta será guardada en una base de datos y mostrada en una tabla en la plataforma para que cualquier otra persona pueda visualizar estas películas, y en base a las puntuaciones 
  ver o no la película si le apetece.

Determinar la infraestructura y estrategia de despliegue
* La infraestructura utilizada en principio sería un servidor simple, donde tendríamos guardada tanto la base de datos como el código fuente del proyecto, siendo 
  desplegada en la dirección IP de este servidor. Para las pruebas que se han realizado se ha utilizado el un portátil como servidor local que aloja tanto el código como el servidor 
  de MongoDB donde se guardan los datos relacionados con las películas.

Determinar las tecnologías a usar
* Las tecnologías utilizadas han sido principalmente JavaScript, HTML, CSS y MongoDB. Se ha utilizado Nodejs para toda la parte del back-end relacionada con el servirdor, las tareas realizadas en la base de datos 
  y se ha utilizado una plantilla de Bootstrap para la parte de las vistas o página principal donde se muestra el contenido de la plataforma web.

<p align="center">
 
<img src="https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/1200px-Node.js_logo.svg.png?raw=true">
<img src="https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/mongodb.png?raw=true">
<img src="https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/js-logo.png?raw=true">
<img src="https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/images.png?raw=true">
<img src="https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/CSS.3.svg.png?raw=true">
 
</p>

Determinar los atributos básicos de nuestra aplicación
En cuanto a los diferentes atributos con los que cuenta nuestra aplicación hay varios:
* En primer lugar tenemos la parte del servidor, que es la encargada de atender toda la serie de peticiones que se han al servicio, y como no de levantar el servicio en el puerto indicado. Además de esto el servidor
  es el encargado de cargar las vistas (elemento que ahora nombraremos con más detalle). 
* Por otra parte tenemos nuestra aplicación en el directorio /app y dentro de la misma otros tres subdirectorios que contienen los controladores que son los encargados de determinar las funciones que se podrán hacer,
  las vistas que son las encargadas de cargar el contenido multimedia que ve el usuario y por último los modelos que son las
  diferentes estructuras de datos utilizadas para trabajar o almacenar datos.
* Contamos además con un directorio /config en el cual se guardan las diferentes rutas y las acciones que se determinan para cada una de ellas.

En base a todo lo anterior definir el estilo arquitectónico
* En base a lo comentado en todo lo anterior podemos determinar que nuestra aplicación se trata de una aplicación con una arquitectura de modelo vista controlador, también
  conocida comúnmente como MVC. Esto se puede determinar debido a que en una fase previa al diseño se ha hecho una distribución de directorios orientada a cumplir con este modelo de 
  arquitectura tan conocido. En el tenemos diferenciadas estas tres partes cada una con su función determinada.
  
 ```
.
├── README.md
├── app
│   ├── controllers
│   │   └── peliculaController.js
│   ├── models
│   │   └── pelicula.js
│   └── views
│       └── pelicula.ejs
├── config
│   └── routes.js
├── index.js
├── npm-debug.log
├── package-lock.json
├── package.json
└── public
```

Implementar la funcionalidad básica de nuestra aplicación en base a la arquitectura elegida (usar el sistema de control de versiones para el desarrollo).
* Como podemos ver se ha creado un prototipo de aplicación con una serie de funcionalidades básicas tales como la introducción de valores en los atributos en la base de datos y la recuperación y lectura de los mismos en una tabla mostrada en la vista principal del proyecto. Serán añadidas proximamente funcionalidades como búsqueda mediante valores concretos de los atributos, eliminación de registros de la base de datos,...

