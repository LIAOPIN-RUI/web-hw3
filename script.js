function handlePhishing(e) {
    e.preventDefault();
    alert("這是一個模擬釣魚頁面，請勿輸入真實帳號密碼。此為資安訓練用，提醒您注意登入頁真偽！");
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

