let listaProductos = [
{
nombreProducto: "Hidratante facial",
precio: 3500,
categoria: "Hidratante",
},
{ nombreProducto: "Tonico exfoliante",
precio: 2350.45, 
categoria: "Tonico" },
{
nombreProducto: "Protector solar factor 50",
precio: 3300,
categoria: "Protector solar",
},
{
nombreProducto: "Protector solar toque seco factor 50",
precio: 4100,
categoria: "Protector solar",
},
{
nombreProducto: "Protector solar con color factor 50",
precio: 3850.5,
categoria: "Protector solar",
},
{
nombreProducto: "Gel de limpieza facial",
precio: 1740.99,
categoria: "Limpieza",
},
{ nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
{ nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
{
nombreProducto: "Exfoliante de azúcar cherry",
precio: 1200,
categoria: "Labios",
},
{
nombreProducto: "Pads de hidrogel para contorno de ojos",
precio: 2800,
categoria: "Ojos",
},
{
nombreProducto: "Mascarilla facial",
precio: 3250.99,
categoria: "Mascaras",
},
{ nombreProducto: "Sérum facial con PHA",
precio: 3200, categoria: "Sérum" },
{ nombreProducto: "Bálsamo labial", 
precio: 3200, categoria: "Labios" },
{ nombreProducto: "Crema contorno de ojos", 
precio: 3200, categoria: "Ojos" },
{
nombreProducto: "Protector solar en barra",
precio: 3800,
categoria: "Protector solar",
},
{
nombreProducto: "Mascara de hidratación y reparación",
precio: 1200,
categoria: "Mascaras",
},
{ nombreProducto: "Agua micellar", 
precio: 2890, 
categoria: "Limpieza" },
];
let tabla = "<table><thead><tr><th>Nombre</th><th>Precio</th><th>Categoria</th></tr></thead><tbody>";
for (let i = 0; i< listaProductos.length; i++) {
tabla += "<tr><td>" + listaProductos[i].nombreProducto + "</td><td>" + listaProductos[i].precio + "</td><td>" + listaProductos[i].categoria + "</td></tr>";
}
tabla += "</tbody></table>";

let tabla2 = "<table><thead><tr><th>Nombre</th><th>Precio</th><th>Categoria</th></tr></thead><tbody>";
let tablafiltrada = listaProductos.filter(producto => producto.nombreProducto.includes("Protector solar"));
for (let i = 0; i< tablafiltrada.length; i++) {
tabla2 += "<tr><td>" + tablafiltrada[i].nombreProducto + "</td><td>" + tablafiltrada[i].precio + "</td><td>" + tablafiltrada[i].categoria + "</td></tr>";
}
tabla2 += "</tbody></table>";
function tablaFiltrada(x){
    let tabla3 = "<table><thead><tr><th>Nombre</th><th>Precio</th><th>Categoria</th></tr></thead><tbody>";
    let tablaBusq = listaProductos.filter(producto => producto.nombreProducto.includes(x));
    console.log(tablaBusq);
    if(tablaBusq.length!==0){
        for (let i = 0; i< tablaBusq.length; i++) {
            tabla3 += "<tr><td>" + tablaBusq[i].nombreProducto + "</td><td>" + tablaBusq[i].precio + "</td><td>" + tablaBusq[i].categoria + "</td></tr>";
            }
            document.write(tabla3);
    }else{
        alert(`El producto ingresado no se encuentra disponible en este momento`);
    }
}

document.write(tabla);
document.write(`<br> <h3>Tabla Filtrada</h3>`);
document.write(tabla2);
let x = prompt("Ingrese el producto que desea buscar:");
tablaFiltrada(x);