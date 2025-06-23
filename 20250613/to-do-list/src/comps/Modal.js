import React from "react";

const Modal = () => {
    return(
        // <!-- modal -->
        <div id="model_bg">
            <div className="content">
                <div>공유할 대상을 입력해주세요</div>
                <input type="text " />
                <button className="sharebutton">공유</button>
                <button className="closebutton">닫기</button>
            </div>
        </div>
    );
}
export default Modal;