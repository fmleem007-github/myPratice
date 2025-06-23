import React, { useState } from "react";
import { DB_NAMES } from "../../db";
import { SESSIONS } from "../session/session";

export const SignIn = ({ setView }) => {
  // hooks
  const [uId, setUId] = useState("");
  const [uPw, setUPw] = useState("");
  const [uConfirm, setConfirm] = useState("");
  const [uMail, setUMail] = useState("");
  const [uPhone, setuPhone] = useState("");

  // handler
  const onChangeHandler = (e) => {
    console.log("onChangeHandler");
    switch (e.target.name) {
      case "uId":
        setUId(e.target.value);
        break;
      case "uPw":
        setUPw(e.target.value);
        break;
    }
  };

  const onClickHandler = () => {
    let userMembers = localStorage.getItem(DB_NAMES.USERMEMBERS); // null
    if (userMembers === null) {
      alert("SIGN IN FAIL!!");
   
    }
    else {
        userMembers = JSON.parse(userMembers);
        let user = userMembers[uId];
        console.log(user);
        if( user === undefined) {
            alert('SIGN IN FAIL!!');
            //return
        }
        else {
            if(uPw === user.uPw){
            alert("SIGN IN SUCCEED!!");
            SESSIONS.USER_SESSION.SET_SIGNINEDID(uId);
            }
    }
        
}
          
         setUId("");
      setUPw("");SESSIONS.USER_SESSION.SET_SIGNINEDID();
      return;
  
  };
  return (
    <div className="signin-wrap">
      <input
        onChange={onChangeHandler}
        type="text"
        name="uId"
        value={uId}
        placeholder="Input ID"
      />
      <br />

      <input
        onChange={onChangeHandler}
        type="password"
        name="uPw"
        value={uPw}
        placeholder="Input  Pw"
      />
      <br />

      <button onClick={onClickHandler}>로그인</button>
    </div>
  );
};
