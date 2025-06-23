import { useState } from 'react';
import '../../../style/user/signin.css';
import { SESSIONS } from '../../session/session';

const Signin = ({
    setIsUserSigned,
    setIsHome,
    setIsSignup,
    setIsSignin,
    setIsModify,
    setIsTodolist,
    setIsMemo,
    setIsCalender
}) => {

    // hooks
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');

    // handler
    const uIdChangeHandler = (e) => {
        console.log('[Signin] uIdChangeHandler()');
        setUId(e.target.value);
    }
    const uPwChangeHandler = (e) => {
        console.log('[Signin] uPwChangeHandler()');
        setUPw(e.target.value);
    }
    const signinBtnClickHandler = () => {
        console.log('[Signin] signinBtnClickHandler()');

        let userMembers = localStorage.getItem('user-members');     // null
        if (userMembers === null) {
            alert('SIGN IN FAIL!!');
            setUId('');
            setUPw('');
            SESSIONS.USER_SESSION.SET_SIGNINEDID();
            return;
        }

        userMembers = JSON.parse(userMembers);      // String -> Object
        if (userMembers[uId] !== undefined && userMembers[uId].uPw === uPw) {
            alert('SIGN IN SUCCESS!!');
            
            SESSIONS.USER_SESSION.SET_SIGNINEDID(uId);
            
            setUId('');
            setUPw('');
            
            setIsUserSigned(true);
            setIsHome(true);
            setIsSignup(false);
            setIsSignin(false);
            setIsModify(false);
            setIsTodolist(false);
            setIsMemo(false);
            setIsCalender(false);

        }

    }
    return(
        <div className="signin-wrap">
            <h4>USER SIGN IN</h4>
            <input onChange={uIdChangeHandler} value={uId} type="text" placeholder="Input user ID"/><br />
            <input onChange={uPwChangeHandler} value={uPw} type="password" placeholder="Input user PW"/><br />
            <button onClick={signinBtnClickHandler}>SIGN IN</button>
        </div>
    )
}

export default Signin;