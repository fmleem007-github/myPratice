import React, { useState } from "react";
import Item from "./Item";
import { VIEWS } from "./const";
import Sayings from "./Sayings";
import { login, logout } from "./session";
import './style.css';


const UserSignIn = ({ setView }) => {

    // hooks

    // handler
    const userTodoListChangeHandler = () => {
        console.log("userTodoListChangeHandler");
        setView("todolist");
    };

    const userCalendarChangeHandler = () => {
        console.log("userCalendarChangeHandler");
        setView("calendar");
    };
    const MemoChangeHandler = () => {
        console.log("MemoChangeHandler");
        setView("memo");
    };

    const userEditChangeHandler = () => {
        console.log("userEditChangeHandler");
        setView("user-edit");
    };

    const userSignOutChangeHandler = () => {
        console.log("userSignOutChangeHandler");
        alert("로그인 정보가 없습니다. 홈으로 이동합니다.");
        logout();
        setView("home");
    };


    return (
        <div>
            <h1>명언입니다.</h1>
            <button onClick={userTodoListChangeHandler}>할 일 목록</button>
            <button onClick={userCalendarChangeHandler}>일정</button>
            <button onClick={MemoChangeHandler}>메모</button>
            <button onClick={userEditChangeHandler}>내 정보 관리</button>
            <button onClick={userSignOutChangeHandler}>로그아웃</button>

        </div>
    )
}

export default UserSignIn;