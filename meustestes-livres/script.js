let images = document.querySelectorAll('div#caroussel > img')
let btnPrev = document.querySelector('button#prev')
let btnNext = document.querySelector('button#next')
let containerIndicators = document.querySelector('div#containerIndicators')
let imageIndex = 0

function createIndicators() {
    for (let i = 0; i < images.length; i++) {
        let radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'indicator'
        radio.value = i
        radio.id = `indicator-${i}`
        radio.style.verticalAlign = 'middle'
        radio.style.marginRight = '10px'
        containerIndicators.appendChild(radio)

        radio.onchange = () => {
            if (radioIndicators[i].checked = true) {
                imageIndex = i
            }
            displayCurrentImage()
        }
    }

}

function displayCurrentImage() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
        radioIndicators[i].checked = false
    }
    radioIndicators[imageIndex].checked = true
    images[imageIndex].style.display = 'block'
}

function nextImage() {
    imageIndex = (imageIndex + 1) % images.length
    displayCurrentImage()
}

function prevImage() {
    imageIndex--
    if (imageIndex < 0) {
        imageIndex = images.length - 1
    }
    displayCurrentImage()
}

function stopSlide() {
    clearInterval(automaticSlide)
}

for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = () => {
        stopSlide()
    }

    images[i].onmouseout = () => {
        automaticSlide = setInterval(nextImage, 2000)
    }
}

btnNext.onclick = () => {
    nextImage()
}

btnPrev.onclick = () => {
    prevImage()
}

btnNext.onmouseover = () => {
    stopSlide()
}

btnPrev.onmouseover = () => {
    stopSlide()
}

containerIndicators.onmouseover = () => {
    stopSlide()
}

btnPrev.onmouseout = () => {
    automaticSlide = setInterval(nextImage, 2000)
}

btnNext.onmouseout = () => {
    automaticSlide = setInterval(nextImage, 2000)
}

containerIndicators.onmouseout = () => {
    automaticSlide = setInterval(nextImage, 2000)
}

let automaticSlide = setInterval(nextImage, 2000)

createIndicators()
let radioIndicators = document.querySelectorAll('div#containerIndicators > input[type=radio]')
displayCurrentImage()