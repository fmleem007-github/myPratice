import React from "react";

const SignIn = () => {
    return (

        // <!-- 로그인 -->
        <div className="sign_in_wrap">
            <input class="basic_input" type="text" name="u_id" placeholder="ID를 입력해주세요" />
            <br />
            <input class="basic_input" type="password" name="u_pw" placeholder="PW를 입력해주세요" />
            <br />
            <button>로그인</button>
             <button>회원가입</button>
            <br />
        </div>
    );
}
export default SignIn;