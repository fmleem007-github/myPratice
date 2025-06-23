import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ToDoListWrap from "./ToDoListWrap";
// import "./css/"

const ToDoList = () => {
    return (
        <div id="wrap">
            <div className="title_wrap">
                <span>To Do List</span>
                <button>로그아웃</button>
            </div>
            <SignIn />
            <SignUp />
            <ToDoListWrap />
        </div>

    );
}
export default ToDoList;