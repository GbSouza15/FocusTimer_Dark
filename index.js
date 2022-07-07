const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.addminutes')
const buttonRemoveMinutes = document.querySelector('.removeminutes')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonDarkOn = document.querySelector('.darkon')
const buttonDarkOff = document.querySelector('.darkoff')
const buttonVolumeForest = document.querySelector('.volumeForest')
const buttonVolumeRain = document.querySelector('.volumeRain')
const buttonVolumeCoffeeshop = document.querySelector('.volumeCoffeeshop')
const buttonVolumeFireplace = document.querySelector('.volumeFireplace')
const forest = new Audio('./sound/Floresta.wav')
const rain = new Audio('./sound/Chuva.wav')
const coffeeshop = new Audio('./sound/Cafeteria.wav')
const fireplace = new Audio('./sound/Lareira.wav')
let minutes = Number(minutesDisplay.textContent)
let addtimer = Number(minutes.textContent)
let timerTimerOut

function audioForestPause() {
  forest.pause()
}
function audioForestPlay() {
  forest.play()
}
function audioRainPlay() {
  rain.play()
}
function audioRainPause() {
  rain.pause()
}
function audioCoffeshopPlay() {
  coffeeshop.play()
}
function audioCoffeshopPause() {
  coffeeshop.pause()
}
function audioFireplacePlay() {
  fireplace.play()
}
function audioFireplacePause() {
  fireplace.pause()
}

function addTimer() {
  minutes = Number(minutes) + 5
  updateTimerDisplay(minutes, 0)
}

function removeTimer() {
  if (minutes > 0) {
    minutes = Number(minutes) - 5
    updateTimerDisplay(minutes, 0)
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}
function contador() {
  timerTimerOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      return
    }
    if (seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    contador()
  }, 1000)
}

function darkModeOn() {
  const body = document.querySelector('body')
  body.classList.add('dark')
}

function darkModeOff() {
  const body = document.querySelector('body')
  body.classList.remove('dark')
}

buttonVolumeForest.addEventListener('click', function (e) {
  forest.volume = e.currentTarget.value / 100
})
buttonVolumeRain.addEventListener('click', function (e) {
  rain.volume = e.currentTarget.value / 100
})
buttonVolumeCoffeeshop.addEventListener('click', function (e) {
  coffeeshop.volume = e.currentTarget.value / 100
})
buttonVolumeFireplace.addEventListener('click', function (e) {
  fireplace.volume = e.currentTarget.value / 100
})

buttonDarkOff.addEventListener('click', function () {
  darkModeOn()
  buttonDarkOff.classList.add('hide')
  buttonDarkOn.classList.remove('hide')
})

buttonDarkOn.addEventListener('click', function () {
  darkModeOff()
  buttonDarkOn.classList.add('hide')
  buttonDarkOff.classList.remove('hide')
})

buttonPlay.addEventListener('click', function () {
  contador()
})

buttonStop.addEventListener('click', function () {
  resetTimer()
})

buttonAddMinutes.addEventListener('click', function () {
  addTimer()
})

buttonRemoveMinutes.addEventListener('click', function () {
  removeTimer()
})

buttonForest.addEventListener('click', function () {
  buttonForest.classList.toggle('active')
  if (forest.paused == true) {
    forest.play()
  } else {
    forest.pause()
  }
})
buttonRain.addEventListener('click', function () {
  buttonRain.classList.toggle('active')
  if (rain.paused == true) {
    rain.play()
  } else {
    rain.pause()
  }
})
buttonCoffeeShop.addEventListener('click', function () {
  buttonCoffeeShop.classList.toggle('active')
  if (coffeeshop.paused == true) {
    coffeeshop.play()
  } else {
    coffeeshop.pause()
  }
})
buttonFirePlace.addEventListener('click', function () {
  buttonFirePlace.classList.toggle('active')
  if (fireplace.paused == true) {
    fireplace.play()
  } else {
    fireplace.pause()
  }
})
