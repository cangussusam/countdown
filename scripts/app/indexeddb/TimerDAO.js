class TimerDAO {

    #connection
    #store

    constructor(connection){

        this.#connection = connection
        this.#store = 'timers'        
    }

    add(timer) {

        return new Promise((resolve, reject) => {

            let request = this.#connection
                .transaction(this.#store, 'readwrite')
                .objectStore(this.#store)
                .add(timer)

            request.onsuccess = e => {

                resolve()
            }
            
            request.onerror = e => {

                console.log(e.target.error)
                reject('Não é possível adicionar o Evento')
            }

        })
    }

    list() {

        return new Promise((resolve, reject) => {

            let request = this.#connection
                .transaction(this.#store, 'readwrite')
                .objectStore(this.#store)
                .openCursor()

            let timers = []

            request.onsuccess = e => {

                let actualIndex = e.target.result

                if(actualIndex) {
                    
                    let data = actualIndex.value
                    timers.push(new Timer(data.name, data.date, data.hours))

                    actualIndex.continue()
                }else{
                    
                    console.log(timers)
                    resolve(timers)
                }
            }

            request.onerror = e => {

                console.log(e.target.error)
                reject('Não é possível listar os Eventos')
            }
        })
    }

    clear() {

        return new Promise((resolve, reject) => {
            
            let request = this.#connection
                .transaction(this.#store, 'readwrite')
                .objectStore(this.#store)
                .clear()
               
            request.onsuccess = e => {

                console.log('Remoção realizada com sucesso.')
                resolve()
            }

            request.onerror = e => {

                console.log(e.target.error)
                console.log('Falha na remoção')
                reject()
            }
        })
    }

    delete(timer) {
        
        return new Promise((resolve, reject) => {

            let request = this.#connection
                .transaction(this.#store, 'readwrite')
                .objectStore(this.#store)
                .delete(timer)

               
            request.onsuccess = e => {

                console.log('Delete realizada com sucesso.')
                resolve()
            }

            request.onerror = e => {

                console.log(e.target.error)
                console.log('Falha na remoção')
                reject()
            }
        })
    }
}

