const videoLink = document.getElementById('vidLink');
const videoContainer = document.getElementById('hiddenContainer');
const abtLink = document.getElementById('abtLink');
const abtContainer = document.getElementById('hiddenAbtContainer');
const contLink = document.getElementById('contactLink');
const contContainer = document.getElementById('hiddenContContainer');


videoLink.addEventListener('click', () => {
    videoContainer.style.display = videoContainer.style.display === 'block' ? 'none' : 'block';
});

abtLink.addEventListener('click', () => {
    abtContainer.style.display = abtContainer.style.display === 'block' ? 'none' : 'block';
});

contLink.addEventListener('click', () => {
    contContainer.style.display = contContainer.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        this.parentElement.parentElement.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target === videoContainer) {
        videoContainer.style.display = "none";
    }
    if (event.target === abtContainer) {
        abtContainer.style.display = "none";
    }
    if (event.target === contContainer) {
        contContainer.style.display = "none";
    }
}

document.getElementById("themeChange").addEventListener("click", function() {

    toggleStylesheet("theme.css");
    //insert 'link' element into head just below styles.css reference
  })
  
  function toggleStylesheet(href, onoff) {
    
    var existingNode = 0 //get existing stylesheet node if it already exists:
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(href) > -1) existingNode = document.styleSheets[i].ownerNode
    }
    if (onoff == undefined) onoff = !existingNode //toggle on or off if undefined
    if (onoff) { //TURN ON:
      if (existingNode) return onoff //already exists so cancel now
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
    } else { //TURN OFF:
      if (existingNode) existingNode.parentNode.removeChild(existingNode)
    }
    if (onoff){
        document.getElementById('logo').src="sithLogo.png";
        document.getElementById('ganda').src="sithGanda.jpg";
        document.getElementById('bannar').src="empireBanner.PNG";
        document.getElementById('bannar2').src="empireBanner.PNG";
    } else {
        document.getElementById('logo').src="logo2.png";
        document.getElementById('ganda').src="leftside.jpg";
        document.getElementById('bannar').src="banner.PNG";
        document.getElementById('bannar2').src="banner.PNG";
    }
    
    
    
    return onoff

  }
  