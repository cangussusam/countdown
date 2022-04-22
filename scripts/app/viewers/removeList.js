CreateList.showListTable()

setTimeout(function () {

    let removes = document.querySelectorAll('.gg-trash')

    removes.forEach(remove => {
        remove.onclick = function () {

            ConnectionFactory
                .getConnection()
                .then(connection => {
                    new TimerDAO(connection)
                        .list()
                        .then(timers =>
                            timers.forEach(timer => {
                                if(timer.name === this.nextElementSibling.innerHTML){

                                    ConnectionFactory
                                        .getConnection()
                                        .then(connection => {
                                            new TimerDAO(connection)
                                                .delete(43)
                                        })
                                 
                                }
                            })
                        )
                })
        }
    })

}, 50)