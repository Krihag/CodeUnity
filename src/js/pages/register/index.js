import listener from "../../api/handlers/eventListeners/formListen.js";
import register from "./register.js";
import storage from "../../utils/storage.js";
import seePassword from "./seePassword.js";


register();

const registerForm = document.querySelector("#registrationForm")

registerForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const body = {
        password: document.querySelector("#password-input").value,
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value
    }

    storage.save("register", body)
    window.location.href = "/register/register.html"
})

seePassword();


