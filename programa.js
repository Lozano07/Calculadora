 //Validacion para que sea un dato numerico
const ValidarNumero = () => {
 let input = document.getElementById('id');
 let CapturaDato = input.value; 
    if (isNaN(CapturaDato) || CapturaDato===""){    
       input.value  = CapturaDato.replace(/\D/g, '');
  }
}


//TOMAR LOS VALORES DEL BOTON Y RETORNARLOS AL INPUT
const AsignarValor = (valor) => {
let Numeros = document.getElementById('id');
Numeros.value += valor;
}   


//Reiniciar la calculadora
const Borrar = () => {
    
let reiniciar = document.getElementById('id');
reiniciar.value="";
let reiniciar2=document.getElementById('numero');
reiniciar2.value="";
Acumulado = 0;
Verificacion = 0;
EliminarClase();

}


//VARIABLES GLOBALES

let Acumulado = 0 ; // Variable para almacenar los resultados de las operaciones
let AcumuladoOperaciones; // Variable para llevar en cuenta la operacion 
let Verificacion = 0; /* Esta variable me permite hacer una sola verificacion 
                        cuando el valor inicial de la variable Acumulado es 0 */



//FUNCION PARA ELIMINAR LAS CLASES

let CambioColor = document.querySelectorAll(".CambioColor");  //Capturo la clase 


const EliminarClase = () =>{                                               

for (const Eliminar of CambioColor){         /*Recorro la variable Eliminar en CambioColor      
                                           dandome la clase que esta en algunos de los botones*/ 

Eliminar.classList.remove('active');  // Elimino las clases que estan en los botones recorridos 
}; 

}; //fin funcion



//FUNCION PARA EL PORCENTAJE
const porcentaje = (Resultado)=>{

let numero = document.getElementById('id');
let NumeroEntrada = parseFloat(numero.value);
let AcuPorcentaje;

if(!isNaN(NumeroEntrada)){
if (Resultado === '%'){

     AcuPorcentaje = NumeroEntrada/100;
     numero.value = AcuPorcentaje;
        
    }
}else {
        numero.value="";
    }


}; // fin funcion



//FUNCION PARA CAMBIAR SIGNO
const CambiarSigno=(Signo)=>{
let numero = document.getElementById('id');
let numero2 = document.getElementById('numero');
let NumeroEntrada = parseFloat(numero.value);
let NumeroSalida = parseFloat(numero2.value);

if (Signo==='+/-'){
    
    if (!isNaN(NumeroEntrada)) {
        numero.value = NumeroEntrada*-1;
    } else {
        numero.value = "";
    }

}


};//FIN FUNCION



// OPERACIONES!
const Operaciones = (Resultado) => {

EliminarClase(); //Funcion para eliminar las clases

if (Resultado==='*'){
    CambioColor[0].classList.toggle('active');
} else if (Resultado==='-'){
    CambioColor[1].classList.toggle('active');
} else if (Resultado==='+'){
    CambioColor[2].classList.toggle('active');
} else if (Resultado==='/'){
    CambioColor[3].classList.toggle('active');
}


let numero = document.getElementById('id'); //Capturo el dato del elemento input 
let numero2 = document.getElementById('numero');
let NumeroEntrada = parseFloat(numero.value); //Capturo el dato del elemento input y tomo el valor
let NumeroSalida = parseFloat(numero2.value);      

     if (!isNaN(NumeroEntrada)==""){

     numero2.value = Acumulado;

     }  else if (!isNaN(NumeroEntrada)) {

      if  (Acumulado==0 && Verificacion == 0 ){   /* Validacion para que no me opere
                                                        Cuando este en 0 el acumulado*/

            Acumulado += NumeroEntrada;  

            Verificacion = Acumulado+1; //Para que se ejecute una sola vez!

            }   else  {

                if(Resultado === '+'){
     
            Acumulado += NumeroEntrada;
     

            } else if (Resultado === '-'){
            
            Acumulado -= NumeroEntrada;

            }  else if (Resultado === '*'){

            Acumulado *= NumeroEntrada

            }  else if (Resultado === '/'){

            Acumulado /= NumeroEntrada

            }  
            
        }

     }

numero2.value = Acumulado;  // Asigno el valor de Acumulado para que sea el dato del segundo input
numero.value = ""; // limpio el valor en el primer input para seguir con otra operacion
AcumuladoOperaciones = Resultado; // lleva la operacion que se realizo anteriormente
 
}; // Fin funcion



//FUNCION PARA EL IGUAL
const Total = ()  =>  {

let numero = document.getElementById('id');
let numero2 = document.getElementById('numero');
let NumeroEntrada = parseFloat(numero.value);
let NumeroSalida = parseFloat(numero2.value);      

EliminarClase(); //Funcion para eliminar las clases

       if (!isNaN(NumeroEntrada)==""){

     numero2.value = Acumulado;

     }  else if (!isNaN(NumeroEntrada)) {

            if(AcumuladoOperaciones === '+'){
     
            Acumulado += NumeroEntrada;

            }  else if  (AcumuladoOperaciones === '-'){
            
            Acumulado -= NumeroEntrada;

            }  else if (AcumuladoOperaciones === '*'){

            Acumulado *= NumeroEntrada;

            }  else if (AcumuladoOperaciones === '/'){

            Acumulado /= NumeroEntrada;

            }

        }

  
numero2.value = Acumulado;

numero.value="";


}; //Fin funcion    










/*const GuardarNumeroSuma = () => {

    let numero = document.getElementById('id');
    let numero2 = document.getElementById('numero');
    let NumeroEntrada = parseFloat(numero.value);
    let NumeroSalida = parseFloat(numero2.value);
    

     if (!isNaN(NumeroEntrada)==""){

     numero2.value = Acumulado+" + ";

     }  else if (!isNaN(NumeroEntrada)) {

     Acumulado += NumeroEntrada;
     numero2.value = Acumulado+" + ";
     numero.value ="";
    
     }

   }
*/


//Operaciones basicas   


const resta = (num1,num2) =>{
    return num1 - num2
}

const multiplicacion = (num1,num2) =>{
    return num1 * num2
}

const division = (num1,num2) =>{
    return num1 / num2
}        