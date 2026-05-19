const apiUrl = "http://localhost:8080/students";

window.onload = function () {
    getStudents();
};

function addStudent() {

    const student = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        mobile: document.getElementById("mobile").value
    };

    fetch(apiUrl, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(student)
    })

    .then(response => response.json())

    .then(data => {

        alert("Student Added Successfully");

        clearFields();

        getStudents();
    });
}

function getStudents() {

    fetch(apiUrl)

    .then(response => response.json())

    .then(data => {

        let table = "";

        data.forEach(student => {

            table += `
            
            <tr>

                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.mobile}</td>

                <td>

                    <button onclick="editStudent(
                    ${student.id},
                    '${student.name}',
                    '${student.email}',
                    '${student.course}',
                    '${student.mobile}'
                    )">

                    Edit

                    </button>

                    <button class="delete"
                    onclick="deleteStudent(${student.id})">

                    Delete

                    </button>

                </td>

            </tr>
            `;
        });

        document.getElementById("studentTable").innerHTML = table;
    });
}

function editStudent(id, name, email, course, mobile) {

    document.getElementById("studentId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("course").value = course;
    document.getElementById("mobile").value = mobile;
}

function updateStudent() {

    const id = document.getElementById("studentId").value;

    const student = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        mobile: document.getElementById("mobile").value
    };

    fetch(apiUrl + "/" + id, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(student)
    })

    .then(response => response.json())

    .then(data => {

        alert("Student Updated Successfully");

        clearFields();

        getStudents();
    });
}

function deleteStudent(id) {

    fetch(apiUrl + "/" + id, {

        method: "DELETE"
    })

    .then(() => {

        alert("Student Deleted Successfully");

        getStudents();
    });
}

function clearFields() {

    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("mobile").value = "";
}