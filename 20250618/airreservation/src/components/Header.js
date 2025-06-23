import React from "react";
import { SESSIONS } from "../components/session/session";
import { MAIN_VIEWS } from "./const";

export const Header = ({ setService }) => {
  return (
    <div className="header-wrap">
      <button
        onClick={() => {
          console.log("MEMBER_VIEW");
          setService(MAIN_VIEWS.MEMBER_VIEW);
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          console.log("MEMBER_VIEW");
          setService(MAIN_VIEWS.MEMBER_VIEW);
        }}
      >
        회원가입
      </button>

      {
    //   SESSIONS.USER_SESSION.GET_SIGNINEDID() === null && (
        <button
          onClick={() => {
            console.log("RESERV_VIEW");
            setService(MAIN_VIEWS.RESERV_VIEW);
          }}
        >
          항공권예약
        </button>
    //   )
      }
    </div>
  );
};
