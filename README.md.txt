##### Test Lottery #####

Test Lottery es un programa que realiza Web Scrapping a 3 páginas web de loterías dominicanas y las muestra en
formato JSON por medio de una API. Las páginas consultadas son:

- https://loteriasdominicanas.com/
- https://loterias.do/
- https://loteriadominicanas.com/

Para cada una se investigó la estructura de como posicionaban los datos en la web para localizarlos desde la API.

Para hacer esto posible se utilizaron los paquetes:

- Axios: Para traer los datos.
- Cheerio: Para poder tener control sobre ellos y utilizarlos a nuestra medida.

El proyecto esta dividido en:

src/
    controller/
        loteriasController.js (Aquí se procesa la informacion para ser mostrada)
    model/
        loteriasModel.js (Aquí se extrae la información de las web y se organiza)
    router/
        loteriasRouter.js (Aquí se accede al componente del controlador que tiene la información a mostrar)
index.js (Archivo principal y portador de la configuración)

EL programa se ejecuta escribiendo las siguientes líneas en una terminal:
    node index.js

Tiene instalado Nodemon, un paquete para escucha automático, asi que tambien puede ejecutarse con:
    npx nodemon index.js

Para ver los datos, puede abrir Postman y crear un nuevo request escribiendo:
    http://localhost:3023/getLoterias

El puerto 3023 es el puerto que se le ha asignado.