# Sofka-devops-app-angular
-----------------------------------------------------------------------------------------------------------------------------------
## Clonar el proyecto:

#### Debes tener una cuenta en GitLab para poder acceder a la siguiente url,la cual te permitira clonar el proyecto en tu maquina local:

[(git@gitlab.com:julian.mesa2/sofka-devops-app-angular.git)]

AL momento de entrar con la url le aparecera la siguiente interfaz en GitLab:

[![Captura-desde-2022-08-04-17-14-16.png](https://i.postimg.cc/WbS7Xxw3/Captura-desde-2022-08-04-17-14-16.png)](https://postimg.cc/PPpZq3cs)

1) Le damos en clone y donde dice 	**Clone with SSH**.
2) Hay que ubicarnos en la ruta donde vamos a clonar la carpeta del proyecto.
3)abrimos una terminal y desde alli, colocamos el siguiente comando:

 **git clone git@gitlab.com:julian.mesa2/sofka-devops-app-angular.git**

 Asi ya tendriamos el proyecot en nuestro equipo de forma local.

 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Abrir proyecto en el IDE y colocarlo en marcha:

1) Abrir el proyecto que se clono del repositorio  en el IDE de mayor preferencia (Recomendado visual studio code). Veremos toda la estructura de carpetas del proeyecto.

[![Captura-desde-2022-08-04-17-27-36.png](https://i.postimg.cc/Bv2pcbYW/Captura-desde-2022-08-04-17-27-36.png)](https://postimg.cc/R3VwvSxG)

2)Antes de poner en marcha el proyecto, debemos asegurarnos que tenemos instalado nodejs y el CLI de angular

3)En caso de tener ya instalado nodejs y el CLI angular, colocamos los siguientes comandos en su respectivo orden:

 **npm update**
 **ng update**
 **npm install**

 Ya con esto tendremos todas las dependencias en nuestro proyecto , ya que al subirlo al repositorio remoto, la carpeta node_modules no se sube y por esta razon hay que hacer los comandos anteriores.

 4) Ya por ultimo podemos colocarlo en marcha con el siguiente comando:

 **ng serve -o**

 Lo cual abrira automaticamente en el navegador la app como se ve a continuacion en la imagen:

 [![Captura-desde-2022-08-04-17-38-38.png](https://i.postimg.cc/L6XMCFFQ/Captura-desde-2022-08-04-17-38-38.png)](https://postimg.cc/w3SPMPvD)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Funcionamiento del app

Se construye un proyecto con el framework de angular, el cual consta de un menu Dropdown.En el cual hay tres opciones:

**frontend**
**backend**
**devops**

al momento de escoger alguna, hay un servicio observando dicho endpoint de un api que trae algunos datos de tecnologias del area escogida en el menu.

Acontinuacion se veran en unas imagenes como se renderiza esta informacion que viene del back en el navegador:

**frontend**
[![Captura-desde-2022-08-04-17-46-43.png](https://i.postimg.cc/02pH0tbX/Captura-desde-2022-08-04-17-46-43.png)](https://postimg.cc/9rQpWYPy)

**backend**
[![Captura-desde-2022-08-04-17-49-12.png](https://i.postimg.cc/R08RBfWn/Captura-desde-2022-08-04-17-49-12.png)](https://postimg.cc/7C3715Mx)

