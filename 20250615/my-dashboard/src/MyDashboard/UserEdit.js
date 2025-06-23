import React, { useState, useEffect } from "react";
import { getCurrentDateTime } from "./util";
import './style.css';
import { login, logout } from "./session";

const UserEdit = ({ setView }) => {
    const [uPw, setUPw] = useState('');
    const [user, setUser] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const [uPwForModify, setUPwForModify] = useState('');
    const [uMailForModify, setUMailForModify] = useState('');
    const [uPhoneForModify, setUPhoneForModify] = useState('');

    useEffect(() => {
        const loggedInUserId = localStorage.getItem("loggedInUser");
        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (loggedInUserId && users[loggedInUserId]) {
            setUser(users[loggedInUserId]);
        }
    }, [setView]);

    const confirmPassword = () => {
        if (user && user.uPw === uPw) {
            alert("비밀번호 확인 완료!");
            setUPwForModify(user.uPw);
            setUMailForModify(user.uMail);
            setUPhoneForModify(user.uPhone);
            setIsConfirmed(true); //  확인 완료 상태로 변경
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
        setUPw('');
    };

    const handleModify = () => {
        const users = JSON.parse(localStorage.getItem("users") || "{}");
        const updatedUser = {
            ...user,
            uPw: uPwForModify,
            uMail: uMailForModify,
            uPhone: uPhoneForModify,
            u_mod_date: getCurrentDateTime(),
        };
        users[user.uId] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
        alert("회원정보 수정 완료!");
        setView("dashboard");
    };

    const handleDelete = () => {
        if (window.confirm("정말 탈퇴하시겠습니까?")) {
            const users = JSON.parse(localStorage.getItem("users") || "{}");
            delete users[user.uId];
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.removeItem("loggedInUser");
            alert("탈퇴 완료!");
            setView("home");
        }
    };

    const userTodoListChangeHandler = () => {
        console.log("userTodoListChangeHandler");
        setView("todolist");
    };

    const userCalendarChangeHandler = () => {
        console.log("userCalendarChangeHandler");
        setView("calendar");
    };

    const userMemoChangeHandler = () => {
        console.log("userMemoChangeHandler");
        setView("memo");
    };

    const userSignOutChangeHandler = () => {
        console.log("userSignOutChangeHandler");
        logout();
        alert("로그인 정보가 없습니다. 홈으로 이동합니다.");
        setView("home");
    };


    return user ? (
        <>
            <button onClick={userTodoListChangeHandler}>할 일 목록</button>
            <button onClick={userCalendarChangeHandler}>캘린더</button>
            <button onClick={userMemoChangeHandler}>메모</button>
            <button onClick={userSignOutChangeHandler}>로그아웃</button>

            <div className="modify-wrap">
                <div className="confirm-wrap">
                    <input
                        onChange={(e) => setUPw(e.target.value)}
                        value={uPw}
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                    <button onClick={confirmPassword}>확인</button>
                </div>

                {isConfirmed && (
                    <div className="modify-form">
                        ID: <input disabled readOnly value={user.uId} /><br />
                        PW: <input onChange={(e) => setUPwForModify(e.target.value)} value={uPwForModify} /><br />
                        MAIL: <input onChange={(e) => setUMailForModify(e.target.value)} value={uMailForModify} /><br />
                        PHONE: <input onChange={(e) => setUPhoneForModify(e.target.value)} value={uPhoneForModify} /><br />
                        REG-DATE: <input disabled readOnly value={user.u_reg_date} /><br />
                        MOD-DATE: <input disabled readOnly value={user.u_mod_date} /><br />
                        <button onClick={handleModify}>수정</button>
                        <button onClick={handleDelete}>탈퇴</button>
                    </div>
                )}
            </div>
        </>
    ) : null;
};

export default UserEdit;
