const entrarEmail = document.getElementById("email");
const entrarSenha = document.getElementById("senha");
const emailErro = document.getElementById("emailErro");
const senhaErro = document.getElementById("senhaErro");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

function validarEmail() {
    const email = entrarEmail.value.trim();

    emailErro.textContent = "";

    if (email.length === 0) {
        emailErro.textContent = "Email é obrigatório";
        return false;
    }

    if (regexEmail.test(email)) {
        console.log(`Email válido: ${email}`);
        return true;
    } else {
        emailErro.textContent = "Formato de email inválido";
        return false;
    }
}


function validarSenha() {
    const senha = entrarSenha.value.trim();

    if (regexSenha.test(senha)) {
        console.log(`Senha válida ${senha}`);
        return true;

    } else {
        console.log("Senha inválida - precisa: 6+ chars, A-Z, número, especial");
        return false;
    }
}


document.getElementById("email").addEventListener("blur", validarEmail);

document.getElementById("senha").addEventListener("blur", validarSenha);