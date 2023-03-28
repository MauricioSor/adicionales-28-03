let calculadora ={
    numero1:0,
    numero2:0,
    numero3:0,
    numero4:0,
    suma:function(){
    return "Primera Suma: "+(this.numero1 + this.numero2)+" Segunda suma: "+(this.numero3 + this.numero4);
    },
    restar:function(){
        return "Primera resta: "+(this.numero1-this.numero2)+" Segunda resta: "+((this.numero3-this.numero4));
        },
    multiplicar:function(){
        return "Primera multiplicacion :"+(this.numero1*this.numero2)+" Segunda multiplicacion: "+((this.numero3*this.numero4));
        },
    dividir:function(){
        if(this.numero2==0){
            console.log("No se puede dividir por 0 el segundo elemento");
            return "Segunda division: "+(this.numero3/this.numero4);
        }else if(this.numero4==0){
            console.log("No se puede dividir por 0 el cuarto elemento");
            return "Primera division: "+(this.numero1/this.numero2);
        }
        else{
            return "Primera division: "+(this.numero1/this.numero2)+" Segunda division: "+((this.numero3/this.numero4));
        }
        },
};
calculadora.numero1 = 10;
calculadora.numero2 = 0;
calculadora.numero3 = 10;
calculadora.numero4 = 2;
console.log(calculadora.suma());
console.log(calculadora.restar());
console.log(calculadora.dividir());
console.log(calculadora.multiplicar());