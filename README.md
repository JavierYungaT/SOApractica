# Arquitectura SOA

Sistema distribuido en la web, bajo arquitectura SOA, en el que se implemente un proceso de negocio, el mismo que deberá implicar a un mínimo de tres proveedores de distintos servicios. El proceso de negocio deberá implicar proveedores de servicios en la nube y otros desarrollados por los
miembros del equipo. El proceso de negocio será para posibilitar transferencias interbancarias.

# ¿Qué es Mule ESB?

Mule, el motor de tiempo de ejecución de Anypoint Platform, es un bus de servicio empresarial (ESB) ligero basado en Java y una plataforma de integración que permite a los desarrolladores conectar aplicaciones de forma rápida y sencilla, lo que les permite intercambiar datos. Permite una fácil integración de los sistemas existentes, independientemente de las diferentes tecnologías que utilicen las aplicaciones, incluidos JMS, Web Services, JDBC, HTTP y más. El ESB se puede implementar en cualquier lugar, puede integrar y organizar eventos en tiempo real o por lotes, y tiene conectividad universal.

# Ventajas

Las ventajas de usar mule son:

 •	Creación y alojamiento de servicios: exponga y aloje servicios reutilizables, utilizando el ESB como un contenedor de servicios ligero.
 
 •	Mediación de servicios: proteja los servicios de los formatos y protocolos de mensajes, separe la lógica empresarial de la mensajería y habilite llamadas de servicio           independientes de la ubicación.
 
 •	Enrutamiento de mensajes: enrute, filtre, agregue y vuelva a secuenciar los mensajes según el contenido y las reglas.
 
 •	Transformación de datos: intercambie datos en distintos formatos y protocolos de transporte.
 
 
 # Implementación
 
 ![descarga](https://user-images.githubusercontent.com/34014602/119610882-87d1aa00-bdbf-11eb-92f7-eddc0ce80bf7.jpg)
 
Nuestro proyecto trata sobre la creación de un sistema distribuido en la web, bajo arquitectura SOA, en el que se implemente un proceso negocio deberá implicar proveedores de servicios en la nube y otros desarrollados por los miembros del equipo. El proceso de negocio será para posibilitar transferencias interbancarias. el cual se ejemplificará en la creación de un sistema distribuido bajo la arquitectura de SOA que permitirá a un usuario lista y crea bancos y a su vez realiza transferencias. Nosotros creamos un api mediante nodejs y mysql.

![2](https://user-images.githubusercontent.com/34014602/119611013-b9e30c00-bdbf-11eb-9941-1aaa561a53b3.png)

![3](https://user-images.githubusercontent.com/34014602/119611014-ba7ba280-bdbf-11eb-871f-0569b6a3a57b.png)

Donde por medio del servicio Postman podemos realizar un CRUD de las cuentas

![4](https://user-images.githubusercontent.com/34014602/119611015-ba7ba280-bdbf-11eb-935b-1dd275dd1e5d.png)

 A través de Mule realizamos el listado de todas las cuentas obtenidas.
 
# Arquitectura Mule ESB
 
 ![5](https://user-images.githubusercontent.com/34014602/119611198-fc0c4d80-bdbf-11eb-970a-f392023a8708.png)
 
# Configuración del listener

A continuación, ponemos el path del servicio a obtener y seguido de "/" ponemos el parámetro que queremos obtener.

![6](https://user-images.githubusercontent.com/34014602/119611199-fca4e400-bdbf-11eb-9875-752233102b38.png)

A continuación, configuramos el puerto y el host.

![7](https://user-images.githubusercontent.com/34014602/119611200-fca4e400-bdbf-11eb-9f32-62860b9f70be.png)



