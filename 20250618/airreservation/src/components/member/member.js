import React, { useEffect, useState } from "react"
import { SignUp } from "./signup"
import { SignIn } from "./signin"
import { Modify } from "./modify"
import { Termination } from "./termination"
import { Menu } from "./Menu"
import { MEM_VIEWS } from "../member/mem_const"
import { SESSIONS } from "../session/session"
import { MAIN_VIEWS } from "../const"



export const Member = ({setService}) => {
    let viewComponent  = null;
    // Hooks
    const [view, setView] = useState(MEM_VIEWS.SIGNIN_VIEW);
    
    //Handler
   switch (view) {
  case MEM_VIEWS.SIGNIN_VIEW:
    viewComponent = <SignIn setView={setView} />;
    break;
  case MEM_VIEWS.SIGNUP_VIEW:
    viewComponent = <SignUp setView={setView} />;
    break;
  case MEM_VIEWS.MODIFY_VIEW:
    viewComponent = <Modify setView={setView} />;
    break;
  case MEM_VIEWS.TERMINATION_VIEW:
    viewComponent = <Termination setView={setView} />;
    break;
  case MEM_VIEWS.TERMINATION_VIEW:
    viewComponent = <Termination setView={setView} />;
    break;
  case MEM_VIEWS.RESERVATION_VIEW:
    setService(MAIN_VIEWS.RESERV_VIEW)
    viewComponent = <Termination setView={setView} />;
    break;
  case MEM_VIEWS.HOME_VIEW:
    setService(MAIN_VIEWS.HOME_VIEW)
    viewComponent = <Termination setView={setView} />;
    break;
  default:
    viewComponent = null;
}
    return(
        // <!-- -멤버서비스(CRUD) -->
        <div className="member-wrap">
            <h1>회원관리</h1>
          
        <Menu setView={setView} />


            {viewComponent}




    
         </div>
      );
}
