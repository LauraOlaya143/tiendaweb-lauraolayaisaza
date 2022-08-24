# Proyecto final, curso de REACT JS en CODERHOUSE.

## My FairyTale

Es un simulador de un Ecommerce de muñecas Monster High, Ever After High y Rainbow High.

La idea general de esta aplicación es crear un Sistema de E-Commerce para compra de productos con filtrado por categorías usando información de un JSON propio llamado asyncMock, el cual contendrá cada producto y así lograr que a partir de esta poder lograr más cosas como: 

- Filtrar u ordenar los productos según su categoría  

- Interactuar con cada producto y ver los detalles de este 

- Agregar la cantidad de productos deseados al carrito de compras 

- Ver los productos agregados en la ruta /cart con su respectiva cantidad

- Eliminar los productos del carrito de compras

- Finalizar la compra y obtener el ID de esta


## Que se utilizo hasta el momento para llegar al resultado de la Pre Entrega?

- Create-React-App
- React-router-dom
- Vercel 
- Firebase
- toastify (Para generar alertas con un mejor estilo)
- Bootstrap (Para simplificar el responsive del NavBar)

## Que se construyo?

En el proyecto encontraras las categorías de los productos representados en la barra de navegación para así hacer un filtrado propio de los productos según su categoría usando las rutas "/category/:categoryId". 

Después se encuentra el componente ItemListContainer, donde están guardados las cartas de los productos, creadas de forma dinámica atreves de los componentes ItemList y Item, en estas encontraras el botón de "ver detalles", el cual de dirigirá hacia la ruta "/detail/:productId" donde encontraras los detalles del producto seleccionado y cuenta con un componente ItemCount, el cual se encarga de contar la cantidad de elementos que quieres agregar a tu carrito de compras. 

Luego de agregar los productos aparecerá el de carrito de compras con la cantidad de productos que este contenga, al darle click a este icono te dirigirá a la ruta "/cart" donde encontraras los elementos de tu lista y la opción de eliminar un producto, eliminar todos o finalizar tu compra. 

Al darle al botón de finalizar tu compra, te guiara a la ruta "/orderdata" donde podrás encontrar un formulario donde debes de poner tu nombre, email y teléfono, para así finalmente presionar en el botón "submit" y enviar la información a la base de datos de Firebase, finalizando con una alerta de Toastify la cual mostrara el ID de tu compra.

## Vistas

### Vista del Home

![img](https://i.imgur.com/nPxkoyL.png)

### Vista del item detail

![img](https://i.imgur.com/4PPolNn.png)

### Vista del Home filtrado segun la categoria elegida

![img](https://i.imgur.com/qmrpSdW.png)

### Vista del carrito de compras

![img](https://i.imgur.com/bICKVpt.png)

### Vista del formulario para finalizar tu compra

![img](https://i.imgur.com/yIExLb7.png)

## Flow de la App 

![Alt text](https://media.giphy.com/media/KBa2JqcPqZ0KPxyjNk/giphy.gif)

## Link de la App

[Deploy](https://tiendaweb-lauraolayaisaza.vercel.app).