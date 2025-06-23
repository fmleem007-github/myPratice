
import React, { useState, useEffect } from "react";
import { login, logout } from "./session";
import './style.css';

const Memo = ({ setView }) => {
    const [memo, setMemo] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [showSavedMessage, setShowSavedMessage] = useState(false);
    const userId = localStorage.getItem("loggedInUser");

    // 초기 로딩 시 사용자별 메모 불러오기
    useEffect(() => {
        if (userId) {
            const stored = localStorage.getItem("memos");
            const parsed = stored ? JSON.parse(stored) : {};
            setMemo(parsed[userId] || '');
        }
    }, [userId]);

    // 저장 함수
    const handleSave = () => {
        const stored = localStorage.getItem("memos");
        const parsed = stored ? JSON.parse(stored) : {};
        parsed[userId] = memo;
        localStorage.setItem("memos", JSON.stringify(parsed));

        setIsEditing(false);
        setShowSavedMessage(true);
        setTimeout(() => setShowSavedMessage(false), 1500);
    };

    const userTodoListChangeHandler = () => setView("todolist");
    const userCalendarChangeHandler = () => setView("calendar");
    const userEditChangeHandler = () => setView("user-edit");
    const userSignOutChangeHandler = () => {
        logout();
        alert("로그인 정보가 없습니다. 홈으로 이동합니다.");
        setView("home");
    };

    return (
        <div>
            <button onClick={userTodoListChangeHandler}>할 일 목록</button>
            <button onClick={userCalendarChangeHandler}>캘린더</button>
            <button onClick={userEditChangeHandler}>회원정보수정</button>
            <button onClick={userSignOutChangeHandler}>로그아웃</button>

            <h2>메모장</h2>
            <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                readOnly={!isEditing}
                rows="6"
                placeholder="메모를 입력하세요..."
            />
            <div>
                {isEditing ? (
                    <button onClick={handleSave}>저장</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>수정</button>
                )}
            </div>
            {showSavedMessage && <p>저장되었습니다!</p>}
        </div>
    );
};

export default Memo;
