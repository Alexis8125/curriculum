//Formas de imprimir en pantalla
// alert("Hola soy un alert desde el archio externo de js");
// console.log("Hola soy un mensaje de consola");
// document.write("Hola soy la interfaz principal");
// Swal.fire("Hola soy una alerta de una libreria");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "success",
//     showConfirmButton: false,
//     timer: 1500
//   });

// VARIABLES Y TIPOS DE DATOS

// para valores constantes
const pi = 3.14;

// para variables globales, cuando la voy a usar en todo el documento
var name="Alexis";

// para usar en funciones
let edad = 18;
let edad_string="18";
var bool=true; // false


// OPERADORES BASICOS + - * / %
var suma = 5 - 2;
console.log(suma);
console.log(edad_string + suma);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

// OPERADORES DE COMPARACION < > >= <= <> 
// = asignacion
// == comparacion 5=="5" (Compara sin tipo de dato)
// === comparacion 5==="5"(Compara valor y tipo de dato)

// operadores logicos && ||

console.log("Mi nombre es " + name + " tiene como edad: " + edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        showConfirmButton: false
      });
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
                title: "Campos Vacios",
                text: "Alguno de los campos se encuentra vacio",
                icon: "error"
              });
              if(name.length == 0){
                document.getElementById("name").style.border = "2px solid red"
              }
              if(last_name.length == 0){
                document.getElementById("last_name").style.background = "red"
              }

    }else{
        document.getElementById("name").style.border = "2px solid green"
        document.getElementById("last_name").style.background = "green"
        document.getElementById("print").innerHTML = "<strong>" + name + " " + last_name + "</strong>"
    }

    if(password === confirm_password){
        Swal.fire("La contraseña es correcta");
    }else{
        Swal.fire("Verifique su contraseña");
    }
    
}


