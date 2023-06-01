// Ejemplo de 3 objetos literales en js


const perro = {
  nombre: "Tomás",
  raza: "pp",
  edad: 11,
  sexo: "macho",

  presentar: function () {
    console.log(`El perro ${this.nombre}, es de raza ${this.raza}, tiene ${this.edad} años de edad, y es ${this.sexo}.`);
},
  jugar: function (minutos) {
    console.log(`El perro ${this.nombre} jugó ${minutos} minutos.`);
  },
  comer: function () {
    console.log(`El perro ${this.nombre} comió.`);
  },

}

perro.presentar();
perro.jugar(15);
perro.comer();


console.log("*************************************************************************************");


const casa = {
  cantAmbientes: 5,
  estaHabitada:true,
  direccion:"Arenales 154",
  localidad:"C.A.B.A",

  estaHabitada: function () {
    return this.estaHabitada;
  },
  setcantAmbientes: function (nuevaCantAmb) {
    this.cantAmbientes = nuevaCantAmb;
  },
  presentar: function () {
    console.log(`La casa de la dirección "${this.direccion}", en la localidad de ${this.localidad}, tiene ${this.cantAmbientes} ambientes.`);
  },

}

casa.presentar();
casa.setcantAmbientes(6);
console.log("En la casa se agregó un ambiente más por lo cual los datos de la casa ahora son:")
casa.presentar();

console.log("*************************************************************************************");


const alumno = {
  apellido:"Montiel",
  nombre:"Gael",
  dni:"30.548.987",
  carrera:"Ing. en Sistemas",
  cantMateriasAprobadas: 16,
  cantMateriasInscriptas: 5,

  presentar: function () {
    console.log(`El alumno ${this.apellido} ${this.nombre}, con dni ${this.dni}, cursa la carrera de ${this.carrera}. Ya aprobó ${this.cantMateriasAprobadas} y actualmente se encuentra cursando ${this.cantMateriasInscriptas}`);
  },

  aprobarMateria: function () {
    this.cantMateriasAprobadas = this.cantMateriasAprobadas + 1
  }, 
  abandonarMateria: function () {
    if((this.cantMateriasAprobadas - 1) >= 0)
      this.cantMateriasInscriptas = this.cantMateriasInscriptas -1
  },
}

alumno.presentar();
alumno.abandonarMateria();
alumno.abandonarMateria();
alumno.abandonarMateria();
alumno.presentar();