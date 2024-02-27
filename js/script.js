function calcularIdadeCachorro() {
    const idadeCachorroInput = document.getElementById("idade_cachorro");
    const idadeCachorroExibicao = document.getElementById("idade_cachorro_exibicao");
    const anoNascimentoCachorro = parseInt(prompt("Informe o ano de nascimento do cachorro:"));

    if (!isNaN(anoNascimentoCachorro)) {
        const anoAtual = new Date().getFullYear();
        const idadeCachorro = anoAtual - anoNascimentoCachorro;
        idadeCachorroInput.value = idadeCachorro + " anos";
        idadeCachorroExibicao.textContent = "A idade do seu cachorro é: " + idadeCachorro + " anos";
    } else {
        alert("Ano de nascimento inválido.");
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;
    const idadeCachorro = document.getElementById("idade_cachorro").value;

    if (!nome || !email || !assunto || !mensagem || !idadeCachorro) {
        alert("Por favor, preencha todos os campos.");
    } else {
        window.location.href = "enviado.html";
    }
}

document.getElementById("ver_idade").addEventListener("click", calcularIdadeCachorro);
document.getElementById("formulario").addEventListener("submit", enviarFormulario);
