import React, { useState } from "react";
import { login, logout } from "./session";
import './style.css';

const UserInfo = ({ setView }) => {

    // hooks

    // handler
    const userSignOutChangeHandler = () => {
        console.log("userSignOutChangeHandler");
        logout();
        alert("로그인 정보가 없습니다. 홈으로 이동합니다.");
        setView("home");
    };


    return (
        <><button onClick={userSignOutChangeHandler}>로그아웃</button></>

    )
}

export default UserInfo;