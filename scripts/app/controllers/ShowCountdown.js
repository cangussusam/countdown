class ShowCountdown {

    constructor() {

        throw new Error('Não é possível instanciar a classe "ShowCountdown"')
    }

    static showTimer(temp, days, hours, minutes, seconds) {

        document.querySelector(`#opcional${temp} #timer__day`).innerHTML = days
        document.querySelector(`#opcional${temp} #timer__hour`).innerHTML = hours
        document.querySelector(`#opcional${temp} #timer__minute`).innerHTML = minutes
        document.querySelector(`#opcional${temp} #timer__second`).innerHTML = seconds        
    }

    static showTitle(temp, eventName, days, hours, minutes, seconds) {
        console.log(`opcional${temp}`)
        if (days > 0) {
            document.querySelector(`#opcional${temp} .timer__name`).innerHTML = `Faltam ${days} dias para o evento '${eventName}' começar`
        } else if (hours > 0) {
            document.querySelector(`#opcional${temp} .timer__name`).innerHTML = `Faltam ${hours} horas para o evento '${eventName}' começar`
        } else if (minutes > 0) {
            document.querySelector(`#opcional${temp} .timer__name`).innerHTML = `Faltam ${minutes} minutos para o evento '${eventName}' começar`
        } else if (seconds > 0) {
            document.querySelector(`#opcional${temp} .timer__name`).innerHTML = `Faltam ${seconds} segundos para o evento '${eventName}' começar`
        }
    }

    static eventStarted(input, eventName) {
        
        input.innerHTML = `O evento '${eventName}' começou!`
    }
}
