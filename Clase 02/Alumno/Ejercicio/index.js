var dayAsked = prompt('Ingrese un día de la semana')

switch (dayAsked) {

  case 'Lunes':
  case 'lunes':
  case 'Martes':
  case 'martes':
  case 'Miércoles':
  case 'Miercoles':
  case 'miércoles':
  case 'miercoles':
  case 'Jueves':
  case 'jueves':
  case 'Viernes':
  case 'viernes':

    console.log('Día hábil')
    break

  case 'Sábado':
  case 'Sabado':
  case 'sábado':
  case 'sabado':
  case 'Domingo':
  case 'domingo':

    console.log('Fin de semana')
    break

  default: console.log('No es día de semana en este planeta')
}