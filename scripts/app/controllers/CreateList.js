
class CreateList {

    constructor() {
        
        throw new Error('Não é possível instanciar a classe "Create List"')
    }

    static showListTable() {
        
        document.querySelectorAll('.lists__div-li').forEach(li => {
            li.remove()
        })
      
        ConnectionFactory
        .getConnection()
        .then(connection => {
            new TimerDAO(connection)
            .list()
            .then(timers =>
                timers.forEach(timer => {

                    document.querySelector('.lists__ul').innerHTML += `
                    <div class="lists__div-li">
                        <div class="gg-trash"></div>
                        <li class="lists__li">${timer.name}</li>
                        <input type="text" class="lists__input" list="options__list" value="0">
                        <datalist id="options__list"></datalist>  
                    </div>`
            })
        )})

    }
}

 