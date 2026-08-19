const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('showing');
    });
}


function bukaModal(sumberGambar) {
    document.getElementById("modal-foto").style.display = "flex";
    document.getElementById("foto-besar").src = sumberGambar;
}

function tutupModal() {
    document.getElementById("modal-foto").style.display = "none";
}