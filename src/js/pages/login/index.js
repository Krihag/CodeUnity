import listener from "../../api/handlers/eventListeners/formListen.js";
import seePassword from "../register/seePassword.js";

listener.login.auth();
seePassword();
