const timerName = document.querySelector('.timer__name')

let distance, days, hours, minutes, seconds, countdown, removeButton, lists, temporisador
let plusButton = document.querySelector('.add__button')
let op = 0 , number = 0

function run() {
    setTimeout(function() {
        lists = document.querySelectorAll('.lists__li')
    
        lists.forEach(list => {
            list.addEventListener('click', function(event) {
                which(event.target)
            })
        })
        
        function which(input) {
        
            temporisador = input.nextElementSibling.value
           
            ConnectionFactory
            .getConnection()
            .then(connection => {
                new TimerDAO(connection)
                    .list()
                    .then(timers => {
                        timers.forEach(timer => {
                            if (timer.name == input.innerHTML) {
    
                                clearInterval(countdown)
    
                                countdown = setInterval(function () {
    
                                    Countdown.setDate(timer.date, timer.hours)
                                    Countdown.timer(distance)
    
                                    ShowCountdown.showTimer(temporisador, days, hours, minutes, seconds)
                                    ShowCountdown.showTitle(temporisador, timer.name, days, hours, minutes, seconds)
    
                                    if(distance < 0){
                                        clearInterval(countdown)
                                        ShowCountdown.eventStarted(timerName, timer.name)
                                        document.querySelectorAll('.timer__paragraph').forEach(item => item.innerHTML = '00')
                                    }
                                }, 1000)
                            }
    
                        })
                    })
            })
    
    
        }
    },50)
        
}

run()

submit.addEventListener('click', function() {
    run()
})


plusButton.onclick = function () {

    op += 1
    console.log(`id="opcional${op}`)
    let text = document.querySelector('.timer__opcional')
        .innerHTML += `       
    <section class="timer" id="opcional${op}">
    <div class="timer__complete">
        <div class="timer container">
            <div class="timer__div">
                <p class="timer__paragraph" id="timer__day">00</p>
                <p class="timer__title">days</p>
            </div>
            <div class="timer__div">
                <p class="timer__paragraph" id="timer__hour">00</p>
                <p class="timer__title">hours</p>
            </div>
            <div class="timer__div">
                <p class="timer__paragraph" id="timer__minute">00</p>
                <p class="timer__title">minutes</p>
            </div>
            <div class="timer__div">
                <p class="timer__paragraph" id="timer__second">00</p>
                <p class="timer__title">seconds</p>
            </div>
        </div>
        <div class="close container" id="close__button">
            <div class="leftright"></div>
            <div class="rightleft"></div>
            <label class="close container">close</label>
        </div>
    </div>
    
    <div>
        <p class="timer__name"></p>
    </div>
    </section>`

    document.querySelectorAll('.timer').forEach(margin => {
        margin.style.margin = "4rem 0"
    })
    
    removeButton = document.querySelectorAll('#close__button')

    removeButton.forEach(remove => {
        remove.onclick = function (event) {
            this.parentElement.parentElement.remove()

        }
    })

    run()
    addNumber()
}

function addNumber() {

    

    let createOption = document.createElement('option')
    createOption.innerHTML = number++
    document.querySelectorAll('#options__list').forEach(options => {
        options.appendChild(createOption)
    })
}