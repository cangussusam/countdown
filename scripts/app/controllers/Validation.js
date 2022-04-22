class Validation {

    constructor() {
        
        throw new Error('Não é possível instanciar a classe "Validation"')
    }

    static validityHours(input) {
        
        if(input.value.length < 5){
            return defaultHours = '00:00'
        }
        return
    }
    
    static validityName(input) {
      
        let noSpaceName = input.value.replace(/\s/g, '')

        if(noSpaceName.length == 0) return validName = false
    
        return validName = true
    }

    static validityDate(input, defaultHours) {
        
        let date = input.value
        let actualDate = new Date(`${date}T${defaultHours}`)
        let distance = new Date(actualDate) - new Date()

        if(distance < 0 || distance == isNaN) {
            return validDate = false
        }
    
        return validDate = true
    }

    static validityDBNames(input) {

        const options = document.querySelectorAll('option')

        if(options.length == 0){
            return validDBNames = true

        }

        options.forEach(option => {
            if(option.value === input.value){
                return validDBNames = false
            }

            return validDBNames = true
        })
    }
}
