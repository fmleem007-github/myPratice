import React from "react";

const SignUp = () => {
    return(
        // <!-- 회원가입 -->
         <div class="sign_up_wrap">
            <input class= "basic_input" type="text" name="u_id" placeholder="ID를 입력해주세요" />
            <br />
            <input class= "basic_input" type="password" name="u_pw" placeholder="PW를 입력해주세요" />
            <br />
            <input class= "basic_input" type="password" name="u_confirm" placeholder="PW를 다시 입력해주세요" />
            <br />
            <input class="basic_input" type="text" name="u_name" placeholder="이름을 입력해주세요" />
            <br />
            <input class="basic_input" type="email" name="u_mail" placeholder="이메일을 입력해주세요" />
            <br />
            <button>회원가입</button>
        </div>
    );
}
export default SignUp;