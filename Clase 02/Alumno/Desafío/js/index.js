console.log('Init app')

var gender = prompt('Ingrese su Género', 'Masculino o Femenino')

var age = prompt('Ingrese su edad')

var parsedAge = parseFloat(age, 10)

if ('Masculino' === gender, parsedAge > 17) {
  console.log('Sr. usted es mayor de edad')
}
else {
  if ('Masculino' === gender, parsedAge < 18) {
    console.log('Sr. ud NO es mayor de edad')
  }
}




