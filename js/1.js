let persona ={
    nombre:"Mauricio",
    apellido:"Soria",
    edad:24,
    estudiante:true,
    hobbie:["correr","jugar a la play","estudiar","leer","viajar"],
    mostrar:function () {
    for(const property in persona){
    console.log(`${property}:${persona[property]} `);
    };
    },
    agregarHobbie:(agregar)=>{
    for(let i=0;i<=agregar.length;i++){
        persona.hobbie.push(agregar[i]);
    }
        console.log(persona.hobbie);
    },
    borrarPrimero:function(){
    this.hobbie.shift();
    console.log(this.hobbie);
    },
    buscarHobbie:function(){
    const personasFiltradas = persona.hobbie.filter(item => item === 'viajar');
    if(personasFiltradas!=0){
        console.log("Si tiene ese hobbie");
    }else{
        console.log("No contiene ese hobbie");
    }
    console.log(personasFiltradas);
    }
};
//persona.mostrar();
//persona.agregarHobbie(["caminar","mirar tv","programar"]);
//persona.borrarPrimero();
//persona.buscarHobbie();

