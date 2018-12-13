var browserWindow = window;
var browserDocument = document;
var element = browserDocument.element;
var xBodyAxis = browserWindow.innerWidth || element.clientWidth || body.clientWidth;
var yBodyAxis = browserWindow.innerHeight|| element.clientHeight|| body.clientHeight; 
var xNewBodyAxis = 0;
var yNewBodyAxis = 0;
var restOfX = xBodyAxis % 50;
var restOfY = yBodyAxis % 50;
var progress = 0;

startLoadingModal();

function calculateAxys(xAxis, yAxis) {
  xNewBodyAxis = xAxis / 50;
  yNewBodyAxis = yAxis / 50
}

function startLoadingModal() {
  let modal = document.createElement('div');
  let modalImage = document.createElement('img');
  modalImage.id = "loadingGif";
  modalImage.src = "assets/imgs/loading.gif";

  document.body.appendChild(modal).id = "modal";
  modal.appendChild(modalImage);
}

function generateLeds() {
  calculateAxys(xBodyAxis, yBodyAxis);
  for(let j = 0; j < yNewBodyAxis; j++) {
    let lineDiv = document.createElement("div");
    
    document.getElementsByTagName("body")[0].appendChild(lineDiv).className = "line";
    for(let i = 0; i < xNewBodyAxis; i++) {
      let ledDiv = document.createElement('div');
      ledDiv.className = "led";
      ledDiv.onclick = ledClicked();
      lineDiv.appendChild(ledDiv);
    }
  }
}

function ledClicked() {
  let allLeds = document.getElementsByClassName('led');
    for(let index = 0; index < allLeds.length; index++) {
      allLeds[index].addEventListener("dblclick", function() { 
        this.style.background = "#ffff00";
      });
    }

    for(let index = 0; index < allLeds.length; index++) {
      allLeds[index].addEventListener("click", function() {
        this.style.background = "#000000";
      });
    }
  }

  function resetAllLeds() {
    let allLeds = document.getElementsByClassName('led');
    for(let index = 0; index < allLeds.length; index++) {
      allLeds[index].style.background = "#000000";
    }
  }

function stopLoadingModal() {
  let modal = document.getElementById("modal");
  let loadingGif = document.getElementById("loadingGif");
  modal.parentNode.removeChild(modal);
  loadingGif.parentNode.removeChild(loadingGif);
  alert("Comandos\n" + 
  "ESC: Clear board\n" + 
  "Double click: Turn on clicked led\n" + 
  "Double Click: Reset clicked led");
}

function turnOffAllLeds() {
  if(event.defaultPrevented) { return };
  var key = event.key || event.keyCode;
  if (key === 'Escape' || key === 'Esc' || key === 27) {
    resetAllLeds();
  }
}

/* Listeners */
window.addEventListener("load", stopLoadingModal, false);
document.addEventListener('keyup', turnOffAllLeds, false);