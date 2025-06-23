import React from "react";
import { MEM_VIEWS } from "./mem_const";

export const Menu = ({setView}) => {
    return(
        <div className="menu-wrap">
            <button
            onClick={() =>{
                setView(MEM_VIEWS.SIGNUP_VIEW);
            }}
            >회원가입</button>
            <button
            onClick={() =>{
                setView(MEM_VIEWS.SIGNIN_VIEW);
            }}>로그인</button>
            <button
            onClick={() =>{
                setView(MEM_VIEWS.MODIFY_VIEW);
            }}>정보수정</button>
            <button
            onClick={() =>{
                setView(MEM_VIEWS.TERMINATION_VIEW);
            }}>탈퇴</button>
            <button
            onClick={() =>{
                setView(MEM_VIEWS.RESERVATION_VIEW);
            }}>항공권예약</button>
            
        </div>
    )
}