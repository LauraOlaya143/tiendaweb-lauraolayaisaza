# Proyecto final, curso de REACT JS en CODERHOUSE.

## My FairyTale

Es un simulador de un Ecommerce de muñecas Monster High, Ever After High y Rainbow High.

La idea general de esta aplicacion es crear un Sistema de E-Commerce para compra de productos con filtrado por categorías usando informacion de un JSON propio llamado asyncMock, el cual contendra la informacion de cada producto y asi lograr que a partir de esta poder lograr mas cosas como:

- Filtrar u ordenar los productos segun su categoria 
- Interactuar con cada producto y ver los detalles de este
- agregar la cantidad de productos deseados al carrito de compras


## Que se utilizo hasta el momento para llegar al resultado de la Pre Entrega?

- Create-React-App
- React-router-dom
- Vercel 

## Que se construyo?

En el proyecto encontraras las categorias de los productos representados en la barra de navegacion para asi hacer un filtrado propio de los productos segun su categoria usando las rutas "/category/:categoryId".

Despues se encuentra el componente ItemListContainer, donde estan guardados las cartas de los productos, creadas de forma dinamica atraves de los componentes ItemList y Item, en estas encontraras el boton de "ver detalles", el cual de dirigira hacia la ruta "/detail/:productId" donde encontraras los detalles del producto seleccionado y cuenta con un componente ItemCount, el cual se encarga de contar la cantidad de elementos que quieres agregar a tu carrito de compras.

## Vistas

### Vista del Home

-

## Flow de la App 

-

## Link de la App

[Deploy](https://tiendaweb-lauraolayaisaza.vercel.app).

### `IMPORTANTE`

este proyecto aun esta en desarrollo, por ende algunas funciones en la fecha actual no esten en su total funcionalidad.
