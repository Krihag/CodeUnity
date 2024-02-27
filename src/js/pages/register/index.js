import listener from "../../api/handlers/eventListeners/formListen.js";
import register from "./register.js";
import seePassword from "./seePassword.js";

listener.register.auth();
register();
seePassword();

