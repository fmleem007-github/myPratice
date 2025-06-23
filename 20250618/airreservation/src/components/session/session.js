import { DB_NAMES } from "../../db";

export const SESSIONS = {
    USER_SESSION: {
        SIGNINED_ID: '',
        SET_SIGNINEDID: function(id = '') {
            this.SIGNINED_ID = id;
            localStorage.setItem(DB_NAMES.SESSION_LOGGEDID,this.SIGNINED_ID);
        },
        GET_SIGNINEDID: function() {
            return this.SIGNINED_ID;
        }
    },
    ADMIN_SESSION: {
        SIGNINED_ID: '',
        SET_SIGNINEDID: function(id = '') {
            this.SIGNINED_ID = id;
        },
        GET_SIGNINEDID: function() {
            return this.SIGNINED_ID;
        }
    }
}