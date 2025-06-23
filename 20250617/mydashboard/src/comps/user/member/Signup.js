import { useState } from 'react';
import '../../../style/user/signup.css';

const Signup = ({
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

    // handler
    const uIdChangeHandler = (e) => {
        console.log('[Signup] uIdChangeHandler()');
        setUId(e.target.value);
    }
    const uPwChangeHandler = (e) => {
        console.log('[Signup] uPwChangeHandler()');
        setUPw(e.target.value);
    }
    const uMailChangeHandler = (e) => {
        console.log('[Signup] uMailChangeHandler()');
        setUMail(e.target.value);
    }
    const uPhoneChangeHandler = (e) => {
        console.log('[Signup] uPhoneChangeHandler()');
        setUPhone(e.target.value);
    }
    const signupBtnClickHandler = () => {
        console.log('[Signup] signupBtnClickHandler()');

        let userMembers = localStorage.getItem('user-members');
        if (userMembers === null) {
            userMembers = {
                [uId]: {
                    uId, uPw, uMail, uPhone
                }
            }
            localStorage.setItem('user-members', JSON.stringify(userMembers));
            alert('SIGNUP SUCCESS!!');
            setUId('');
            setUPw('');
            setUMail('');
            setUPhone('');

        } else {
            userMembers = JSON.parse(userMembers);      // String -> Object
            userMembers[uId] = {
                uId, uPw, uMail, uPhone
            }
            localStorage.setItem('user-members', JSON.stringify(userMembers));
            alert('SIGNUP SUCCESS!!');
            setUId('');
            setUPw('');
            setUMail('');
            setUPhone('');
        }

        setIsHome(true);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(false);

    }

    return(
        <div className="signup-wrap">
            <h4>USER SIGN UP</h4>
            <input value={uId} onChange={uIdChangeHandler} type="text" placeholder="Input new user ID"/><br />
            <input value={uPw} onChange={uPwChangeHandler} type="password" placeholder="Input new user PW"/><br />
            <input value={uMail} onChange={uMailChangeHandler} type="email" placeholder="Input new user MAIL"/><br />
            <input value={uPhone} onChange={uPhoneChangeHandler} type="text" placeholder="Input new user PHONE"/><br />
            <button onClick={signupBtnClickHandler}>SIGN UP</button>
        </div>
    )
}

export default Signup;