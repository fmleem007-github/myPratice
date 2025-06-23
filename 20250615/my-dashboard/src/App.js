
import React, { useState } from "react";
import Home from "./MyDashboard/Home";
import UserSignIn from "./MyDashboard/UserSignIn";
import SignUp from "./MyDashboard/SignUp";
import Dashboard from "./MyDashboard/Dashboard";
import UserEdit from "./MyDashboard/UserEdit";
import TodoList from "./MyDashboard/TodoList";
import Calendar from "./MyDashboard/Calendar";
import UserInfo from "./MyDashboard/UserInfo";
import AdminSignIn from "./MyDashboard/AdminSignIn";
import Memo from "./MyDashboard/Memo";
import './MyDashboard/style.css'; // 전체 스타일
import { VIEWS } from "./MyDashboard/const";

function App() {
  const [view, setView] = useState("home");

  const renderView = () => {
    switch (view) {
      case VIEWS.HOME_VIEW:
        return <Home setView={setView} />;
      case VIEWS.SIGNIN_VIEW:
        return <UserSignIn setView={setView} />;
      case VIEWS.SIGNUP_VIEW:
        return <SignUp setView={setView} />;
      case VIEWS.DASHBOARD_VIEW:
        return <Dashboard setView={setView} />;
      case VIEWS.TODOS_VIEW:
        return <TodoList setView={setView} />;
      case "calendar":
        return <Calendar setView={setView} />;
      case "user-edit":
        return <UserEdit setView={setView} />;
      case "memo":
        return <Memo setView={setView} />;
      case "admin-signin":
        return <AdminSignIn setView={setView} />;
      case "user-info":
        return <UserInfo setView={setView} />;
      default:
        return <div>404: 페이지를 찾을 수 없습니다.</div>;
    }
  };

  return (
    <div id="app" className={view === "todolist" ? "no-style" : "styled"}>
      {renderView()}
    </div>
  );
}

export default App;
