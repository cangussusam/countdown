const inputDate = document.querySelector('#event__date')
const inputHours = document.querySelector('#event__hours')
const inputName = document.querySelector('#event__name')
const closeButton = document.querySelector('#close__button')
let submit = document.querySelector('.date__button')

let defaultHours
let validName = false, validDate = false, validDBNames = false

submit.onclick = function(event) {

    event.preventDefault()

    defaultHours = inputHours.value

    Validation.validityHours(inputHours)
    Validation.validityName(inputName)
    Validation.validityDate(inputDate, defaultHours)

    if(!validName || !validDate){
        alert('Nome ou data Inválidos')
        form.reset()
        
        return 
    }

    Validation.validityDBNames(inputName)
    if(!validDBNames){
        alert('Não é possível adicionar dois eventos com o mesmo Nome')
        form.reset()
        
        return
    }

    ConnectionFactory
    .getConnection()
    .then(connection => {
        new TimerDAO(connection)
        .add(new Timer(inputName.value, inputDate.value, defaultHours))

    })

    CreateList.showListTable()
}

