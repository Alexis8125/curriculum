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
      document.getElementById("valores").value = array_ejem;
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if(name.length == 0 || last_name.length == 0 || password.length == 0 || confirm_password.length == 0){
        Swal.fire({
                title: "Campos Vacios",
                text: "Alguno de los campos se encuentra vacio",
                icon: "error"
              });
              if(name.length == 0){
                document.getElementById("name").style.border = "2px solid red";
              }
              if(last_name.length == 0){
                document.getElementById("last_name").style.border = "2px solid red";
              }
              if(password.length == 0){
                document.getElementById("password").style.border = "2px solid red";
              }
              if(confirm_password.length == 0){
                document.getElementById("confirm_password").style.border = "2px solid red";
              }

    }else{
        document.getElementById("name").style.border = "2px solid green";
        document.getElementById("last_name").style.border = "2px solid green";
        document.getElementById("print").innerHTML = "<strong>" + name + " " + last_name + "</strong>";
    }

    if(password === confirm_password){
        Swal.fire("La contraseña es correcta");
        document.getElementById("password").style.border = "2px solid green";
        document.getElementById("confirm_password").style.border = "2px solid green";
    }else{
        Swal.fire("Verifique su contraseña");
        document.getElementById("confirm_password").style.border = "2px solid red";
    }
    
}

//ARRAYS
var dias_sem = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1,2.5,"abc"];
var array_mul = [
  {name:"Alexis", age:18, color:"Blue"},
  {name:"Majo", age:19, color:"green"},
  {name:"Liceth", age:10, color:"gray"},
  {name:"Rodo", age:13, color:"white"}
]

var json_ejm = {
  name:"Alexis",
  lastname:"Arenas",
  phone:"3209021560",
  email:"laarenass@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i=0; i<dias_sem.length;i++){
  console.log(dias_sem[i]);
}
let j=0;
while(j<array_num.length){
  console.log(array_num[j]);
  j++;
}

accu = 0;
for(let k=0;k<array_num.length;k++){
  accu+=array_num[k];
}
console.log(accu);

var acum=0;
for(let h=0;h<array_mul.length;h++){
  acum+=array_mul[h].age;
}
console.log(acum);
document.getElementById("print_age").innerText= "<strong>El valor de la suma es:</strong> " + acum;
document.getElementById("print_age_eti").innerHTML= "<strong>El valor de la suma es:</strong> " + acum;

function limpiar(){
  document.getElementById("valores").value = "";
  document.getElementById("print_age").innerText= "";
document.getElementById("print_age_eti").innerHTML= "";
}
var array_ejem=[1,2,3,4,5,6,7,8,9]
function agregar(){
  array_ejem.push(10);
  document.getElementById("valores").value = array_ejem;
}

function eliminar(){
  array_ejem.pop();
  document.getElementById("valores").value = array_ejem;
}

function impr_reverse(){
  document.getElementById("text_reverse").innerText = array_ejem.reverse();
  document.getElementById("valores").disabled = false;
}

//EXERCISE
//Agregar un input que yo escriba un numero y que ese sea el numero que agregue; crear boton que agregue y elimine en el primero; y que limpiar limpie los dos input

var add_num= document.getElementById("")


//Clase 21/05/2024