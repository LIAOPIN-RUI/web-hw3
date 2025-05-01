function handlePhishing(e) {
    e.preventDefault();
    alert("登入測試");
}

function generateCaptcha() {
    const captcha = document.getElementById('captcha');
    const code = Math.floor(100000 + Math.random() * 900000);
    captcha.textContent = code;
}

function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onload = generateCaptcha;

