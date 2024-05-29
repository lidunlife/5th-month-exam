let userCredentials = {
    login: "mmm",
    password: "123mmm"
};

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === userCredentials.login && password === userCredentials.password) {
        alert("You signed up!");
        document.getElementById('username').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    } else {
        alert("Something is wrong!");
    }
}

function addQuestion() {
    let question = prompt("Please,give your questiob:");
    if (question) {
        let questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.textContent = question;
        document.getElementById('questions').appendChild(questionDiv);
    }
}