import React from "react";

// 로그인 시 세션 저장
const login = (userId) => {
  sessionStorage.setItem('loggedInUser', userId);
};

// 로그인 상태 확인
const checkSession = () => {
  const user = sessionStorage.getItem('loggedInUser');
  if (user) {
    console.log(`현재 로그인된 사용자: ${user}`);
  } else {
    console.log("로그인 필요");
  }
};

// 로그아웃 시 세션 제거
const logout = () => {
  sessionStorage.removeItem('loggedInUser');
};
export {login, logout, checkSession};
