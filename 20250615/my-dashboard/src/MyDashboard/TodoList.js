
import React, { useState, useEffect } from "react";
import { DB_NAMES } from "./const";
import { login, logout } from "./session";

const TodoList = ({ setView }) => {
    const [listText, setListText] = useState('');
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // 수정 중인 항목 인덱스
    const userId = localStorage.getItem("loggedInUser");

    useEffect(() => {
        if (userId) {
            const stored = localStorage.getItem(DB_NAMES.TODOS_DB_NAME);
            const parsed = stored ? JSON.parse(stored) : {};
            setTodos(parsed[userId] || []);
        }
    }, [userId]);

    const saveTodos = (updatedTodos) => {
        const stored = localStorage.getItem(DB_NAMES.TODOS_DB_NAME);
        const parsed = stored ? JSON.parse(stored) : {};
        parsed[userId] = updatedTodos;
        localStorage.setItem(DB_NAMES.TODOS_DB_NAME, JSON.stringify(parsed));
        setTodos(updatedTodos);
    };

    const onChangeHandler = (e) => {
        setListText(e.target.value);
    };

    const registeBtnClickHandler = () => {
        if (!userId) {
            alert("로그인 정보가 없습니다.");
            return;
        }

        if (editIndex !== null) {
            // 수정 모드
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = listText;
            saveTodos(updatedTodos);
            setEditIndex(null);
        } else {
            // 등록 모드
            const updatedTodos = [...todos, listText];
            saveTodos(updatedTodos);
        }

        setListText('');
    };

    const handleEdit = (index) => {
        setListText(todos[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        saveTodos(updatedTodos);
    };

    const userMemoChangeHandler = () => setView("memo");
    const userCalendarChangeHandler = () => setView("calendar");
    const userEditChangeHandler = () => setView("user-edit");
    const userSignOutChangeHandler = () => {
        alert("로그인 정보가 없습니다. 홈으로 이동합니다.");
        logout();
        setView("home");
    };

    return (
        <div id="wrap">
            <div className="gnb-wrap">
                <button onClick={userMemoChangeHandler}>메모</button>
                <button onClick={userCalendarChangeHandler}>캘린더</button>
                <button onClick={userEditChangeHandler}>회원정보수정</button>
                <button onClick={userSignOutChangeHandler}>로그아웃</button>
            </div>
            <div>
                Dash Board
                <div className="list-add-wrap">
                    <input
                        onChange={onChangeHandler}
                        value={listText}
                        type="text"
                        name="item"
                        placeholder="등록할 내용"
                    />
                    <button onClick={registeBtnClickHandler}>
                        {editIndex !== null ? "수정 완료" : "등록"}
                    </button>

                    <div className="list_items_wrap">
                        {todos.length > 0 ? (
                            todos.map((todo, idx) => (
                                <div key={idx} className="todo-item">
                                    <span>{todo}</span>
                                    <button onClick={() => handleEdit(idx)}>수정</button>
                                    <button onClick={() => handleDelete(idx)}>삭제</button>
                                </div>
                            ))
                        ) : (
                            <p>등록된 항목이 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
