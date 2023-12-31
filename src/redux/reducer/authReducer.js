const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = true, action) => {
    switch(action.type){
        case LOGIN:
            return true;
        case LOGOUT:
            return false;
        default:
            return state;
    }
}

export default authReducer