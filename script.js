const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function signUp(e){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gioitinh = document.getElementById("gioitinh").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var action = document.getElementById("action").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        name: name,
        age: age,
        gioitinh: gioitinh,
        weight: weight,
        height: height,
        action: action,
        email: email,
        password: password,
    }
    var BMR;
    var Calo;
        if (gioitinh == "Nam") {
            BMR = Math.round((66 + (13.7*weight) + (5*height) - (6.8*age))/10) * 10;
        }
        if (gioitinh == "Nữ") BMR = Math.round((655 +(9.6*weight) + (1.8*height) - (4.7*age))/10) * 10;
        if (gioitinh == "Khác") BMR = 2250;
        if (action == "Không hoặc ít vận động") Calo = Math.round(1.2*BMR);
        if (action == "Vận động nhẹ (tập thể dục 1-3 lần/tuần)") Calo = Math.round(1.375*BMR);
        if (action == "Vận động vừa phải (tập thể dục 3-5 lần/tuần)") Calo = Math.round(1.55*BMR);
        if (action == "Năng động (tập thể dục hằng ngày/ tập cường độ cao 4-5 lần/tuần)") Calo = Math.round(1.725*BMR);
        if (action == "Rất năng động (tập thể dục cường độ cao 6-7 lần/tuần)") Calo = Math.round(1.9*BMR);

        var Calorender = document.querySelector("#calo");
        var htmls = `<h4>
                ${Calo}
                </h4>`
        Calorender.innerHTML = htmls;
    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    if (name != "" && email != "" && password !="" && weight!="" && height!=""){
        const open = document.getElementById('open');
        const myModal = document.getElementById('myModal');
        const close = document.getElementById('close');
        
        open.addEventListener('click', () =>{
            myModal.classList.add('show');
        });
        close.addEventListener('click', () =>{
            myModal.classList.remove('show');
        });
        window.location.assign("https://nobore.netlify.app");

    }
    else{
        alert("Bạn hãy nhập đầy đủ thông tin!");
        return;
    }
}

function signIn(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    if (email != "" && password !="" ){
        window.location.assign("/nobore-main/index.html");
    }
    else{
        alert("Bạn hãy nhập đầy đủ thông tin!");
        return;
    }
}

