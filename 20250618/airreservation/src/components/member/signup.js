import React, { useState } from "react";
import{ DB_NAMES }from "../../db"
import { MEM_VIEWS } from "./mem_const";

export const SignUp = ({setView}) => {
    // hooks
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uConfirm, setConfirm] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setuPhone] = useState('');

    // handler
     const onChangeHandler = (e) => {
        console.log('onChangeHandler', e.target.name);
        switch(e.target.name) {
            case 'uId' :
                setUId(e.target.value);
                break;
            case 'uPw' :
                setUPw(e.target.value);
                break;
            case 'uConfirm' :
                setConfirm(e.target.value);
                break;
            case 'uMail' :
                setUMail(e.target.value);
                break;
            case 'uPhone' :
                setuPhone(e.target.value);
                break;
                default:
                    break;
        }
       }
    const onClickHandler = () => {
        console.log('onClickHandler');
     let userMembers = localStorage.getItem(DB_NAMES.USERMEMBERS);
        if (userMembers === null) {
         let   newUser = {
                [uId]: {
                    uId, uPw, uMail, uPhone
                }
            }
            localStorage.setItem(DB_NAMES.USERMEMBERS, JSON.stringify(userMembers));
            alert('SIGNUP SUCCESS!!');
            setUId('');
            setUPw('');
            setUMail('');
            setuPhone('');

        } else {
            userMembers = JSON.parse(userMembers);      // String -> Object
            userMembers[uId] = {
                uId, uPw, uMail, uPhone
            }
            localStorage.setItem(DB_NAMES.USERMEMBERS, JSON.stringify(userMembers));
            alert('SIGNUP SUCCESS!!');
            setUId('');
            setUPw('');
            setUMail('');
            setuPhone('');
            setView(MEM_VIEWS.SIGNIN_VIEW);
        }
        }
    return(
           <div class="signup-wrap">
         <input  onChange={onChangeHandler}
           type="tel" name="uId" value={uId} placeholder="Input New ID" />
           <br />
           <input 
           onChange={onChangeHandler}
           type="text" name="uPw" value={uPw} placeholder="Input New Pw" />
        <br />
        <input  onChange={onChangeHandler}
           type="password" name="uConfirm" value={uConfirm} placeholder="Input New Confirm" />
        <br />
        <input  onChange={onChangeHandler}
           type="password" name="uMail" value={uMail} placeholder="Input New email" />
        <br />
        <input  onChange={onChangeHandler}
           type="email" name="uPhone" value={uPhone} placeholder="Input New phone" />
        <br />
       
        <br />
        <button
        onClick={onClickHandler}
        >회원가입</button>
        </div>
    )
}