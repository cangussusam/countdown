class Countdown {

    constructor() {

        throw new Error('Não é possível instanciar a classe "Countdown"')
    }

    static setDate(date, hours) {

        let actualDate = new Date(`${date}T${hours}`)
        distance = new Date(actualDate) - new Date()

        return distance
    }

    static timer(distance) {

        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return days, hours, minutes, seconds
    }
}



