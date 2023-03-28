let persona ={
    nombre:"Mauricio",
    apellido:"Soria",
    edad:24,
    estudiante:true,
    hobbie:["correr,jugar a la play,estudiar,leer"],
    mostrar:()=>{
    for(const property in persona){
    console.log(`${property}:${persona[property]} `);
    };
    },
    agregarHobbie:(agregar)=>{
    persona.hobbie.push(agregar);
    },
    borrarHobbie:(borrar)=>{
    delete this.hobbie['borrar'];
    },
    buscarHobbie:()=>{
    
    },
};
