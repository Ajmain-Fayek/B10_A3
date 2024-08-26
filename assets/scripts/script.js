let navBar = document.getElementById('nav-bar');
const navBtn = document.getElementById('checkbox');

navBtn.addEventListener('click', function(){
    navBar.classList.toggle('hidden');
})