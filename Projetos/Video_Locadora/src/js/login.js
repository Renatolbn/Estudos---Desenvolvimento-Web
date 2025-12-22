const entrarEmail = document.getElementById("email");
const entrarSenha = document.getElementById("senha");

function validarEmail() {
    const email = entrarEmail.value.trim();

    if (email.includes("@")) {
        console.log(`Email contém @ ${email}`);

    } else if (email.length > 0) {
        console.log(`Email sem @ ${email}`);
    }

}


const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

function validarSenha() {
    const senha = entrarSenha.value.trim();

    if (regexSenha.test(senha)) {
        console.log(`Senha válida ${senha}`);
        return true;

    } else if (senha.length > 0) {
        console.log("Senha inválida - precisa: 6+ chars, A-Z, número, especial");
        return false;
    }
}


document.getElementById("email").addEventListener("blur", validarEmail);

document.getElementById("senha").addEventListener("blur", validarSenha);