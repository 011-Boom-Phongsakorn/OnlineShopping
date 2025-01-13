"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    constructor(login_id, password) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState_1.UserState.NEW;
    }
    getLogin_id() {
        return this.login_id;
    }
    setLogin_id(login_id) {
        this.login_id = login_id;
    }
    setPassword(password) {
        this.password = password;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    toString() {
        return `WebUser | id: ${this.login_id}. State: ${this.state}`;
    }
}
exports.WebUser = WebUser;
