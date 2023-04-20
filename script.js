const passField = document.querySelector("input");
const showBtn = document.querySelector("span i");

showBtn.onclick = (() => {
    if(passField.type === "password") {
        passField.type = "text";
        showBtn.classList.add("hide_btn");
    } else {
        passField.type = "password";
        showBtn.classList.remove("hide_btn");
    }
})