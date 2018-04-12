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
  y esta será guardada en una base de datos y mostrada en una tabla en la plataforma para que cualquier otra persona pueda visualizar estas peliculas, y en base a las puntuaciones 
  ver o no la pelicula si le apetece.

Determinar la infraestructura y estrategia de despliegue
* La infraestructura utilizada en principio sería un servidor simple, donde tendríamos guardada tanto la base de datos como el código fuente del proyecto, siendo 
  desplegada en la dircción IP de este servidor. Para las pruebas que se han realizado se ha utilizado el un portáti como servidor local que aloja tanto el código como el servidor 
  de MongoDB donde se guardan los datos relacionados con las películas.

Determinar las tecnologías a usar
* Las tecnologías utilizadas han sido principalmente JavaScript, HTML, CSS y MongoDB. Se ha utilizado Nodejs para toda la parte del back-end relacionada con el servirdor, las tareas realizadas en la base de datos 
  y se ha utilizado una plantilla de Bootstrap para la parte de las vistas o página principal donde se muestra el contenido de la plataforma web.

![node](https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/1200px-Node.js_logo.svg.png?raw=true)
![mongo](https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/mongodb.png?raw=true)
![js](https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/js-logo.png?raw=true)
![html](https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/images.png?raw=true)
![css](https://github.com/DarwinGonzalez/PracticaArqSoftDSI/blob/master/public/img/CSS.3.svg.png?raw=true)


