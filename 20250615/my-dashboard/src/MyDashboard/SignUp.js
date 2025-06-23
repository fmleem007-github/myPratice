
import React, { useState } from "react";
import { getCurrentDateTime } from './util.js';
import { VIEWS } from "./const.js";
import './style.css';

const SignUp = ({ setView }) => {
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const handleSignUp = () => {
        let users = localStorage.getItem("users");
        users = users ? JSON.parse(users) : {};

        // ID 중복 검사
        if (users[uId]) {
            alert("이미 존재하는 ID입니다. 다른 ID를 사용해주세요.");
            return;
        }

        const newUser = {
            uId,
            uPw,
            uMail,
            uPhone,
            u_reg_date: getCurrentDateTime(),
            u_mod_date: getCurrentDateTime(),
        };

        users[uId] = newUser;
        localStorage.setItem("users", JSON.stringify(users));

        //  사용자별 초기 데이터 구조 생성 (선택)
        const todos = JSON.parse(localStorage.getItem("todos") || "{}");
        todos[uId] = [];
        localStorage.setItem("todos", JSON.stringify(todos));

        alert('회원가입이 완료되었습니다!');
        setUId('');
        setUPw('');
        setUMail('');
        setUPhone('');
        setView("user-signin");
    };

    return (
        <div className="signup-wrap">
            <input value={uId} onChange={(e) => setUId(e.target.value)} type="text" placeholder="Input new user ID!!" /><br />
            <input value={uPw} onChange={(e) => setUPw(e.target.value)} type="password" placeholder="Input new user PW!!" /><br />
            <input value={uMail} onChange={(e) => setUMail(e.target.value)} type="email" placeholder="Input new user MAIL!!" /><br />
            <input value={uPhone} onChange={(e) => setUPhone(e.target.value)} type="text" placeholder="Input new user PHONE!!" /><br />
            <button onClick={handleSignUp}>SIGN UP</button>
        </div>
    );
};

export default SignUp;
