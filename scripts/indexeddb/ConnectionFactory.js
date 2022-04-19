var ConnectionFactory = (function(){
    
    const dbName = 'countdown'
    const version = 1
    const stores = ['timers']
    var connection, close = null 
    

    return class ConnectionFactory {

        constructor() {
            
            throw new Error('Não é possível instanciar a classe "Connection Factory"')
        }

        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(dbName, version)

                openRequest.onupgradeneeded = e => {

                    ConnectionFactory.#createStore(e.target.result)

                }
        
                openRequest.onsuccess = e => {

                    if(!connection){
                        connection = e.target.result
                        close = connection.close.bind(connection)
                        connection.close = function() {
                            throw new Error('Não se pode fechar a conexão de forma direta')
                        }
                    } 
                    
                    resolve(connection)
                }

                openRequest.onerror = e => {

                    console.log(e.target.error)
                    reject(e.target.error.name)
                }

            })
        }

        static #createStore(connection) {
            
            stores.forEach(store => {
                        
                if(connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store)
                
                connection.createObjectStore(store, {autoIncrement: true})
            })
        }

        static closeConnection() {

            if(connection){
                close()
                connection = null
            }
        }
    }

})()