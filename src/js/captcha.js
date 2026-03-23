// Função para gerar uma sequência aleatória de 5 caracteres (letras e números)
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Atualiza o captcha ao clicar no botão
document.getElementById('refreshCaptcha').addEventListener('click', function () {
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = generateCaptcha();
});

// Função para atualizar o captcha no DOM
function setCaptcha() {
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = generateCaptcha();
}

// Gera o captcha ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    setCaptcha(); // Gera e insere o captcha ao carregar
});