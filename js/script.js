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
