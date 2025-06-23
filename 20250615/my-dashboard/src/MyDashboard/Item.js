import React from "react";
import './style.css';


const Item = ({ todo }) => {
    return (
        <div className="item">

            <input type="checkbox" />
            {todo}
            <button>수정</button>
            <button>삭제</button>
            <button>...</button>
        </div>
    );
}
export default Item;