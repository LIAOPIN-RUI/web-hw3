// 全域變數：目前驗證碼
let currentCaptcha = "";

function handlePhishing(e) {
    e.preventDefault();

    const remember = document.getElementById('rememberMe').checked;
    const userCaptcha = document.getElementById('captchaInput').value;

    // 比對使用者輸入與目前驗證碼
    if (userCaptcha !== currentCaptcha) {
        alert("驗證碼錯誤，請重新輸入");
        generateCaptcha();
        return;
    }

    // ✅ 驗證通過，跳轉到 loading.html
    window.location.href = "loading.html";
}

function generateCaptcha() {
    const captcha = document.getElementById('captcha');
    currentCaptcha = Math.floor(100000 + Math.random() * 900000).toString();
    captcha.textContent = currentCaptcha;
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

// 語系切換（中/英）
document.querySelector('.icon-button[title="語言切換"]').addEventListener('click', toggleLanguage);

function toggleLanguage() {
    const lang = document.documentElement.lang;
    if (lang === "zh-Hant") {
        document.documentElement.lang = "en";
        document.querySelector('.header-center').textContent = "Online Banking";
        document.querySelector('.login-container h3').textContent = "Login";
        document.querySelector('label[for="idNumber"]').textContent = "National ID";
        document.querySelector('label[for="userId"]').textContent = "Username";
        document.querySelector('label[for="userPwd"]').childNodes[0].textContent = "Password ";
        document.querySelector('.forgot-link').textContent = "? Forgot";
        document.querySelector('label[for="captchaInput"]').textContent = "Captcha";
        document.querySelector('.login-btn').textContent = "Login";
        document.querySelector('.remember-me').innerHTML = '<input type="checkbox" id="rememberMe" /> Remember me';
    } else {
        document.documentElement.lang = "zh-Hant";
        document.querySelector('.header-center').textContent = "個人網路銀行";
        document.querySelector('.login-container h3').textContent = "網銀登入";
        document.querySelector('label[for="idNumber"]').textContent = "身分證字號";
        document.querySelector('label[for="userId"]').textContent = "使用者代號";
        document.querySelector('label[for="userPwd"]').childNodes[0].textContent = "使用者密碼 ";
        document.querySelector('.forgot-link').textContent = "?忘記密碼";
        document.querySelector('label[for="captchaInput"]').textContent = "圖形驗證碼";
        document.querySelector('.login-btn').textContent = "登入";
        document.querySelector('.remember-me').innerHTML = '<input type="checkbox" id="rememberMe" /> 記住我';
    }
}

// 頁面載入時產生驗證碼
window.onload = function () {
    generateCaptcha();

    // 備用語言按鈕（如有 .lang-toggle 類別）
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
};
