// Manejar el inicio de sesión

function showForm() {
    document.getElementById('add-form').style.display = 'block';
    document.getElementById('view-data').style.display = 'none';
}

function showView() {
    document.getElementById('view-data').style.display = 'block';
    document.getElementById('add-form').style.display = 'none';
}

// Manejar el formulario de agregar datos del profesor
document.getElementById('teacher-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const experience = document.getElementById('experience').value;
    const institutions = document.getElementById('institutions').value;
    const degrees = document.getElementById('degrees').value;
    const survey = document.getElementById('survey').value;
    const email = document.getElementById('email').value;
    const photo = document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : '';

    const teacherData = {
        name,
        experience,
        institutions,
        degrees,
        survey,
        email,
        photo
    };

    // Guardar los datos del profesor en localStorage
    localStorage.setItem(name, JSON.stringify(teacherData));
    alert('Datos del profesor guardados');
    document.getElementById('teacher-form').reset();
    showView()
});

// Manejar el formulario de leer datos del profesor
document.getElementById('view-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('view-name').value;

    // Obtener los datos del profesor de localStorage
    const teacherData = JSON.parse(localStorage.getItem(name));

    if (teacherData) {
        document.getElementById('teacher-data').innerHTML = `
            <p><strong>Nombre:</strong> ${teacherData.name}</p>
            <p><strong>Años de Experiencia:</strong> ${teacherData.experience}</p>
            <p><strong>Instituciones donde Trabaja:</strong> ${teacherData.institutions}</p>
            <p><strong>Títulos Académicos:</strong> ${teacherData.degrees}</p>
            <p><strong>Encuestas de Estudiantes:</strong> ${teacherData.survey}</p>
            <p><strong>Correo Electrónico:</strong> ${teacherData.email}</p>
            <img src="${teacherData.photo}" alt="Foto del Profesor">
        `;
    } else {
        document.getElementById('teacher-data').innerHTML = '<p>No se encontraron datos para el profesor especificado.</p>';
    }
});
