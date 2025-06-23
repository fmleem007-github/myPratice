import React from "react";

const ListItem = () => {
    return (
        <div id="list_item">
            <div className="container"
            display="flex">
              
                    <input type="checkbox" />
             
                <div className="txt">
                    qruyt   rqterteuyqtertre
                </div>
                <button className="modify">수정</button>
                <button className="delete">삭제</button>
                <button className="share">👨‍👩‍👦</button>
                <button className="seeMore">...</button>
            </div>
        </div>
    );
}
export default ListItem;