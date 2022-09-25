var btnOpen = document.querySelector('.login-text')
var modal = document.querySelector('.form-inner')
var iconClose = document.querySelector('.box i')

function toggleLogin() {
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleLogin)
iconClose.addEventListener('click', toggleLogin)

function signUp(e) {
    event.preventDefault();
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var user = {
        username: username,
        email: email,
        password: password,
    }
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert("Đăng Ký Thành Công");
    
}
function login(e){
    event.preventDefault();
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user === null){
        alert (" Bạn chưa hoặc nhập thiếu thông tin")
    }
    else if(
        username == data.username && email == data.email && password == data.password){
            alert(" Đăng nhập thành công ")
            window.location.href="https://phuclong.com.vn/category";
        }
        else{
            alert(" Sai tài khoản hoặc mật khẩu")
        }
}