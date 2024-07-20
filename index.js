document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        if (password === '1111') {
            window.location.href = 'carreras.html';
        } else {
            alert('Contraseña incorrecta.');
        }
    });
});
