let auto ={
color:"rojo"
,marca:"Chevrolet"
,modelo:2020,
encender:() =>{
console.log(auto);
    encender=alert("Desea encender su auto?");
document.write("<br>El auto esta encendido");
}
,apagar:()=>{
    apagar=alert("Desea apagar su auto?");
    document.write("<br>Auto apagado");
}
};
auto.encender();
auto.apagar();

