let cuenta = {
titular:"Alex",saldo:0,
ingresar:()=>{
this.saldo=this.saldo+(parseInt(prompt("Ingrese saldo a ingresar")));
},
extraer:()=>{
    saldo=saldo-(parseInt.prompt("Ingrese saldo a sacar"));
},
informar:()=>{
    document.write(`Estado de cuenta <br>Nombre:${cuenta}<br>Saldo:${saldo}`)
}
};
alert("Ingrese el valor de lo que desee hacer");
while(confirm("Desea salir?")!=true){
    let n = parseInt(prompt("1-Agregar dinero//2-Extraer dinero//3-Informe"));
    if(n>0 &&n<4){
    switch (n){
        case 1:
        cuenta.saldo=cuenta.saldo+(prompt("<br>Ingrese saldo a ingresar"));
        break;
        case 2:
        
        break;
        case 3:
        document.write(cuenta.saldo);
        break;
    }
    }else {
        document.write("<br>Ingrese un valor correcto");}
    
    
}
