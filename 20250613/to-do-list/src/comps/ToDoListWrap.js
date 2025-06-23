import React from "react";
import Modal from "./Modal";
import ListItem from "./ListItem";

const ToDoListWrap = () => {
    return (
        // <!-- 메인 리스트 페이지 -->
        <div className="todo_list_wrap">
            <div className="calendar"
            display="flex" align-items="center"
            >
                <img src="res/imgs/left_arrow.png" id="left_arrow" />
                <div className="dateBox"><input type="date" id="todo_date" /></div>
                <img src="/res/imgs/right_arrow.png" id="right_arrow" />
            </div>
            <div className="todo_listAdd">
                <input type="text" className="basic_input" />
                <button>추가</button>
            </div>
            <div className="todo_list">
                <ListItem />

            </div>
            <Modal />
        </div>
    );
}
export default ToDoListWrap;