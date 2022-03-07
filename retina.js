// ACHIEVEMENTS SECTION 

// iterates through a loop, adding 1 every pass and updating the HTML with the new number. once the loop hits 123, the cycle is killed.

const elements = {
  number: document.getElementsByClassName('number'),
}

let number = 0

function addNumber() {
  const numberAddInterval = setInterval(() => {
    for (let i = 0; i < 1; i++) {
      number += 1
      elements.number.innerHTML = number
      console.log('number is now ' + number)
      for (let i = 0; i < elements.number.length; i++) {
        elements.number[i].innerHTML = number
      }
      if (number >= 123) {
        console.log('we hit 123')
        clearInterval(numberAddInterval)
      }
    }
  }, 15)
}

// detects when elements are in the viewport, which triggers addNumber function

window.addEventListener('scroll', function (e) {
  const element = document.querySelector('.achievements-card-container')
  const position = element.getBoundingClientRect()
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log('element is fully visible!')
    addNumber()
    this.removeEventListener(e.type, arguments.callee, e.eventPhase)
  }
}, true)

// CATEGORY SECTION

//user clicks a category button, the selector is matched to the appropriate ID and changes the stylesheet element to 'visible'

function showText(div) {
  if (div === 'btn1') {
    document.getElementById('hidden-text-layer1').style.visibility = 'visible'
  } else if (div === 'btn2') {
    document.getElementById('hidden-text-layer2').style.visibility = 'visible'
  } else if (div === 'btn3') {
    document.getElementById('hidden-text-layer3').style.visibility = 'visible'
  } else if (div === 'btn4') {
    document.getElementById('hidden-text-layer4').style.visibility = 'visible'
  } else if (div === 'btn5') {
    document.getElementById('hidden-text-layer5').style.visibility = 'visible'
  } else if (div === 'btn6') {
    document.getElementById('hidden-text-layer6').style.visibility = 'visible'
  }
}

function hideText(div) {
  if (div === 'hidebtn1') {
    console.log('Hide click detected')
    document.getElementById('hidden-text-layer1').style.visibility = 'hidden'
  } else if (div === 'hidebtn2') {
    document.getElementById('hidden-text-layer2').style.visibility = 'hidden'
  } else if (div === 'hidebtn3') {
    document.getElementById('hidden-text-layer3').style.visibility = 'hidden'
  } else if (div === 'hidebtn4') {
    document.getElementById('hidden-text-layer4').style.visibility = 'hidden'
  } else if (div === 'hidebtn5') {
    document.getElementById('hidden-text-layer5').style.visibility = 'hidden'
  } else if (div === 'hidebtn6') {
    document.getElementById('hidden-text-layer6').style.visibility = 'hidden'
  }
}

//FOOTER SECTION

// clicking this icon sends user to the top of the page

function sendToTop() {
  window.scrollTo(0, 0)
}