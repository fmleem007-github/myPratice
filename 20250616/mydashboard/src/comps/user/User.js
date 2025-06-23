import { useState } from "react";
import Home from "./Home";
import Modify from "./member/Modify";
import Signin from "./member/Signin";
import Signup from "./member/Signup";
import Menu from "./Menu";
import TodoList from "./todolist/TodoList";
import Memo from "./memo/Memo";
import Calender from "./calender/Calender";

<<<<<<< HEAD
const User = () => {
=======
const User = ({setIsUserSignedin}) => {
>>>>>>> 283f9524 (ti do list)

    // hooks
    const [isHome, setIsHome] = useState(true);
    const [isSignup, setIsSignup] = useState(false);
    const [isSignin, setIsSignin] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [isTodolist, setIsTodolist] = useState(false);
    const [isMemo, setIsMemo] = useState(false);
    const [isCalender, setIsCalender] = useState(false);

    return(
        <div>
            <Menu 
            setIsHome={setIsHome}
            setIsSignup={setIsSignup}
            setIsSignin={setIsSignin}
            setIsModify={setIsModify} 
            setIsTodolist={setIsTodolist} 
            setIsMemo={setIsMemo} 
<<<<<<< HEAD
            setIsCalender={setIsCalender} />
=======
            setIsCalender={setIsCalender} 
            setIsUserSignedin={setIsUserSignedin}
            />
>>>>>>> 283f9524 (ti do list)
            { isHome && <Home /> }
            { isSignup && <Signup 
                            setIsHome={setIsHome}
                            setIsSignup={setIsSignup}
                            setIsSignin={setIsSignin}
                            setIsModify={setIsModify} 
                            setIsTodolist={setIsTodolist} 
                            setIsMemo={setIsMemo} 
                            setIsCalender={setIsCalender} /> }
            { isSignin && <Signin 
                            setIsHome={setIsHome}
                            setIsSignup={setIsSignup}
                            setIsSignin={setIsSignin}
                            setIsModify={setIsModify} 
                            setIsTodolist={setIsTodolist} 
                            setIsMemo={setIsMemo} 
<<<<<<< HEAD
                            setIsCalender={setIsCalender} /> }
=======
                            setIsCalender={setIsCalender} 
                            setIsUserSignedin={setIsUserSignedin}
                            /> }
>>>>>>> 283f9524 (ti do list)
            { isModify && <Modify 
                            setIsHome={setIsHome}
                            setIsSignup={setIsSignup}
                            setIsSignin={setIsSignin}
                            setIsModify={setIsModify} 
                            setIsTodolist={setIsTodolist} 
                            setIsMemo={setIsMemo} 
                            setIsCalender={setIsCalender} /> }
            { isTodolist && <TodoList /> }
            { isMemo && <Memo /> }
            { isCalender && <Calender /> }
        </div>
    )
}

export default User;