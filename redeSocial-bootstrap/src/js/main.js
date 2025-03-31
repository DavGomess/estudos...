let input = document.getElementById('openModalInput');
let modal = new bootstrap.Modal(document.getElementById('postModal'));
let textarea = document.getElementById("modalTextarea");



input.addEventListener("click", function() {
    modal.show(); 
    setTimeout(() => textarea.focus(), 100)
});


let themeButton = document.getElementById('themeButton')


themeButton.addEventListener('click', function() {
    document.body.classList.toggle("dark-theme")

    
})