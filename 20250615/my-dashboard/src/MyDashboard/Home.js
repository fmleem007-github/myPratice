import React from "react";
import './style.css';

const Home = ({ setView }) => {
    // handler
    const userChangeHandler = () => {
        console.log("userChangeHandler");
        setView("user-signin");
    };

    const adminChangeHandler = () => {
        console.log("adminChangeHandler");
        setView("admin-signin");
    };

    return (
        <div>
            <button onClick={userChangeHandler}>사용자</button>
            <button onClick={adminChangeHandler}>관리자</button>
        </div>
    );
};

export default Home;
