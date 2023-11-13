function showPopup() {
    const popupContainer = document.getElementById('popup')
    popupContainer.style.border = "black 1px solid";
    popupContainer.innerHTML = `
    <div class="redes-header">
                <h2>REDES</h2>
                <button id="close" onClick="closePopup()">X</button>
            </div>
            <div class="popup-list">
                <a href="https://www.linkedin.com/in/matias-roccazzella-b146b411a/" class="popup-element"><img src="">Linkedin</img></a>
                <a href="https://www.instagram.com/matiroccazzella/" class="popup-element"><img src="">Instagram</img></a>
                <a href="https://github.com/MRoccazzella?tab=repositories" class="popup-element"><img src="">Github</img></a>
                <a href="https://twitter.com/TatiRoccazzella" class="popup-element"><img src="">Twitter</img></a></div>
    </div>
  `
  popupContainer.appendChild(popupContainer)
}
function closePopup() {
    
    const popupContainer = document.getElementById('popup')
    popupContainer.style.border = "none";
    popupContainer.innerHTML = ``
    popupContainer.appendChild(popupContainer)
}

function changefont(font) {
    const elementosTexto = document.querySelectorAll("*");

    for (const elementoTexto of elementosTexto) {
    elementoTexto.style.fontFamily = font;
  }
  document.getElementById("buttonRoboto").style.fontFamily = 'Roboto'
  document.getElementById("buttonAgbalumo").style.fontFamily = 'Agbalumo'
  document.getElementById("buttonMontserrat").style.fontFamily = 'Montserrat'
  }
  
  document.getElementById("buttonRoboto").addEventListener("click", function() {
    changefont("Roboto");
  });
  
  document.getElementById("buttonAgbalumo").addEventListener("click", function() {
    changefont("Agbalumo");
  });
  
  document.getElementById("buttonMontserrat").addEventListener("click", function() {
    changefont("Montserrat");
  });


document.getElementById("show-popup").onclick = showPopup;
document.getElementById("close").onclick = closePopup;

