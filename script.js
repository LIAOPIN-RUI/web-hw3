function handlePhishing(e) {
    e.preventDefault();
    alert("登入測試");
}

function generateCaptcha() {
    const captcha = document.getElementById('captcha');
    const code = Math.floor(100000 + Math.random() * 900000);
    captcha.textContent = code;
}

function toggleVisibility(id, el) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        el.textContent = "👁️";
    } else {
        input.type = "password";
        el.textContent = "🙈";
    }
}

function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function openForgotModal() {
    document.getElementById('forgotModal').style.display = 'flex';
}

function closeForgotModal() {
    document.getElementById('forgotModal').style.display = 'none';
}

window.onload = generateCaptcha;
