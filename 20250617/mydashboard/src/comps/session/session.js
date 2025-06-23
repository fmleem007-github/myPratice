export const SESSIONS = {
    USER_SESSION: {
        SIGNINED_ID: '',
        SET_SIGNINEDID: function(id = '') {
            this.SIGNINED_ID = id;
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