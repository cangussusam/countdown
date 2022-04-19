const inputDate = document.querySelector('#event__date')
const inputHours = document.querySelector('#event__hours')
const inputName = document.querySelector('#event__name')
const submit = document.querySelector('.date__button')
const timerName = document.querySelector('.timer__name')
const form = document.querySelector('.date__form')

let defaultHours, distance, eventName, validName = true, validDate = true, date

submit.onclick = (event) => {
    event.preventDefault()

    date = inputDate.value
    defaultHours = inputHours.value
    eventName = inputName.value

    validityHours()
    validityName()
    validityDate(defaultHours)

    if(!validName || !validDate){

        alert('Nome ou data Inválidos')
        form.reset()
        
        return 
    }

    let countdown = setInterval(function () {
        
        setDate(defaultHours)

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        showTimer(days, hours, minutes, seconds)
        showTitle(days, hours, minutes, seconds)

        if(distance < 0){
            clearInterval(countdown)
            timerName.innerHTML = `O evento "${eventName} começou!"`
            document.querySelectorAll('.timer__paragraph').forEach(item => item.innerHTML = '00')
        }

    }, 1000)

    form.reset()
    inputName.focus()

}

function validityHours() {

    if(inputHours.value.length < 5){
        return defaultHours = '00:00'
    }
}

function validityName() {

    let noSpaceName = inputName.value.replace(/\s/g, '')

    if(noSpaceName.length == 0) return validName = false

    return validName = true
}

function validityDate(defaultHours){
  
    let date = inputDate.value
    let actualDate = new Date(`${date}T${defaultHours}`)

    distance = new Date(actualDate) - new Date()
    
    if(distance < 0) {
        return validDate = false
    }

    return validDate = true

}

function setDate(defaultHours) {
  
    let actualDate = new Date(`${date}T${defaultHours}`)
    distance = new Date(actualDate) - new Date()

    return distance
}

function showTimer(days, hours, minutes, seconds) {
   
   document.querySelector('#timer__day').innerHTML = days
   document.querySelector('#timer__hour').innerHTML = hours
   document.querySelector('#timer__minute').innerHTML = minutes
   document.querySelector('#timer__second').innerHTML = seconds
}

function showTitle(days, hours, minutes, seconds) {
        
    if(days > 0) {
        timerName.innerHTML = `Faltam ${days} dias para o evento "${eventName}" começar`
    }else if(hours > 0){
        timerName.innerHTML = `Faltam ${hours} horas para o evento "${eventName}" começar`
    }else if(minutes > 0){
        timerName.innerHTML = `Faltam ${minutes} minutos para o evento "${eventName}" começar`
    }else if(seconds > 0){
        timerName.innerHTML = `Faltam ${seconds} segundos para o evento "${eventName}" começar`
    }
}

