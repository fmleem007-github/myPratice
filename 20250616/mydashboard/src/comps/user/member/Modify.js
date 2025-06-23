import { useActionState, useEffect, useState } from 'react';
import '../../../style/user/modify.css';
import { SESSIONS } from '../../session/session';

const Modify = ({
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
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    useEffect(() => {
        console.log('[Modify] useEffect()');
        
        let userMembers = JSON.parse(localStorage.getItem('user-members'));
        let signinedUser = userMembers[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
        setUId(signinedUser.uId);
        setUPw(signinedUser.uPw);
        setUMail(signinedUser.uMail);
        setUPhone(signinedUser.uPhone);

    }, []);

    // handler
    const uPwChangeHandler = (e) => {
        console.log('[Modify] uPwChangeHandler()');
        setUPw(e.target.value);
    }
    const uMailChangeHandler = (e) => {
        console.log('[Modify] uMailChangeHandler()');
        setUMail(e.target.value);
    }
    const uPhoneChangeHandler = (e) => {
        console.log('[Modify] uPhoneChangeHandler()');
        setUPhone(e.target.value);
    }
    const modifyBtnClickHandler = () => {
        console.log('[Modify] modifyBtnClickHandler()');

        let userMembers = JSON.parse(localStorage.getItem('user-members'));
        let oldUser = userMembers[uId];
        oldUser.uPw = uPw;
        oldUser.uMail = uMail;
        oldUser.uPhone = uPhone;
        localStorage.setItem('user-members', JSON.stringify(userMembers));

        alert('MODIFY SUCCESS!!');

        setIsHome(true);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false); 
        setIsMemo(false);
        setIsCalender(false);

    }

    return(
        <div className="modify-wrap">
            <h4>USER MODIFY</h4>
            <input value={uId} type="text" disabled readOnly placeholder="Input user ID"/><br />
            <input onChange={uPwChangeHandler} value={uPw} type="password" placeholder="Input user PW"/><br />
            <input onChange={uMailChangeHandler} value={uMail} type="email" placeholder="Input user MAIL"/><br />
            <input onChange={uPhoneChangeHandler} value={uPhone} type="text" placeholder="Input user PHONE"/><br />
            <button onClick={modifyBtnClickHandler}>MODIFY</button>
        </div>
    )
}

export default Modify;