document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('notBratText').value = '';
});

function bratifyText() {
    var bratText = document.getElementById('notBratText').value;
    document.getElementById('bratText').innerText = bratText;
}