import './style.css';
import React, { useState } from "react";

const UserSignIn = ({ setView }) => {
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');

    const HomeChangeHandler = () => {
        console.log("HomeChangeHandler");
        setView("home");
    };
    const uIdChangeHandler = (e) => {
        setUId(e.target.value);
    };

    const uPwChangeHandler = (e) => {
        setUPw(e.target.value);
    };

    const userSignUpChangeHandler = () => {
        setView("signup");
    };

    return (
        <div className="signin-wrap">
            <button onClick={HomeChangeHandler}>Home</button>
            <br />
            <input value={uId} onChange={uIdChangeHandler} type="text" placeholder="Input user ID!!" /><br />
            <input value={uPw} onChange={uPwChangeHandler} type="password" placeholder="Input user PW!!" /><br />
            <button onClick={() => {
                console.log('SIGN IN BTN CLICKED!!');

                let users = localStorage.getItem("users");
                if (users === null) {
                    alert('SIGN IN FAIL!!');
                    setUId('');
                    setUPw('');
                    return;
                }

                users = JSON.parse(users);
                if (users[uId] !== undefined && users[uId].uPw === uPw) {
                    alert('SIGN IN SUCCESS!!');

                    // 로그인한 사용자 ID 저장
                    localStorage.setItem("loggedInUser", uId);

                    setUId('');
                    setUPw('');

                    setView("dashboard"); // 또는 "userEdit"
                } else {
                    alert('SIGN IN FAIL!!');
                    setUId('');
                    setUPw('');
                }
            }}>로그인</button>
            <button onClick={userSignUpChangeHandler}>회원가입</button>
        </div>
    );
};

export default UserSignIn;
