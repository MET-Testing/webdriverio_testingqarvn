# webdriverio_testingqarvn

Web de pruebas para practicar Selenium webdriverIO con Javascript

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
- [npm](https://www.npmjs.com/) (se instala automáticamente con Node.js)

## Instalar Dependencias

Antes de ejecutar las pruebas, asegúrate de instalar las dependencias del proyecto utilizando npm. Abre una terminal en la raíz de tu proyecto y ejecuta el siguiente comando:

```
npm install
```

## Ejecuta las pruebas

```
npx wdio wdio.conf.js
```

## Criterios para hacer una PR

Perfecta nomenclatura del nombre de Archivo de prueba:

1. {ShortName}.{extensionFile} ej: camposRequeridos.js
2. Archivo de Prueba dentro del directorio del Componente correspondiente
3. Que se vea bien el codigo en general, que funcione.
4. Usar un directorio para data estatica en caso que haya datos para iterar.
5. Usar PageObjectModel: Chequear que el "page.js" esté dentro de la carpeta "pageobjects"
6. En caso de usar Commands: Asegurarse de aplicarlo para crear pasos de Precondiciones o Scripts de Algoritmos globales. (No para pasos de accion)

## Menciones

Autor de la web: Rodrigo Igor Villanueva Nieto
