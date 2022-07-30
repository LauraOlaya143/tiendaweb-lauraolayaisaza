# Proyecto final, curso de REACT JS en CODERHOUSE.

## My FairyTale

Es un simulador de un Ecommerce de muñecas Monster High, Ever After High y Rainbow High.

La idea general de esta aplicación es crear un Sistema de E-Commerce para compra de productos con filtrado por categorías usando información de un JSON propio llamado asyncMock, el cual contendrá cada producto y así lograr que a partir de esta poder lograr más cosas como: 

- Filtrar u ordenar los productos según su categoría  

- Interactuar con cada producto y ver los detalles de este 

- agregar la cantidad de productos deseados al carrito de compras 


## Que se utilizo hasta el momento para llegar al resultado de la Pre Entrega?

- Create-React-App
- React-router-dom
- Vercel 

## Que se construyo?

En el proyecto encontraras las categorías de los productos representados en la barra de navegación para así hacer un filtrado propio de los productos según su categoría usando las rutas "/category/:categoryId". 

Después se encuentra el componente ItemListContainer, donde están guardados las cartas de los productos, creadas de forma dinámica atreves de los componentes ItemList y Item, en estas encontraras el botón de "ver detalles", el cual de dirigirá hacia la ruta "/detail/:productId" donde encontraras los detalles del producto seleccionado y cuenta con un componente ItemCount, el cual se encarga de contar la cantidad de elementos que quieres agregar a tu carrito de compras. 

## Vistas

### Vista del Home

![img](https://i.imgur.com/toGMwO9.png)

## Flow de la App 

![img](https://i.imgur.com/TQQmcte.gif)

## Link de la App

[Deploy](https://tiendaweb-lauraolayaisaza.vercel.app).

### `IMPORTANTE`

Este proyecto aun esta en desarrollo, por ende, algunas funciones en la fecha actual no estén en su total funcionalidad. 
