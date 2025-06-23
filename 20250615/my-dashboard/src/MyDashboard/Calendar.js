import React, { useState } from "react";
import { login, logout } from "./session";
import './style.css';


const Calendar = ({ setView }) => {

    // hooks

    // handler
    const userTodoListChangeHandler = () => {
        console.log("userTodoListChangeHandler");
        setView("todolist");
    };

    const userMemoChangeHandler = () => {
        console.log("userMemoChangeHandler");
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
        <>
            <button onClick={userTodoListChangeHandler}>할 일 목록</button>
            <button onClick={userMemoChangeHandler}>메모</button>
            <button onClick={userEditChangeHandler}>회원정보수정</button>
            <button onClick={userSignOutChangeHandler}>로그아웃</button>
        </>
    )
}

export default Calendar;