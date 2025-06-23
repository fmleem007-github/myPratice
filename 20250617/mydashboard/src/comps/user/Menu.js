import { SESSIONS } from "../session/session";
import '../../style/user/menu.css';

const Menu = ({
    setIsUserSigned,
    setIsHome,
    setIsSignup,
    setIsSignin,
    setIsModify,
    setIsTodolist,
    setIsMemo,
    setIsCalender
}) => {

    // handler
    const homeBtnClickHandler = () => {
        console.log('[Menu] homeBtnClickHandler()');

        setIsHome(true);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(false);

    }
    const signupBtnClickHandler = () => {
        console.log('[Menu] signupBtnClickHandler()');

        setIsHome(false);
        setIsSignup(true);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(false);

    }
    const signinBtnClickHandler = () => {
        console.log('[Menu] signinBtnClickHandler()');

        setIsHome(false);
        setIsSignup(false);
        setIsSignin(true);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(false);

    }
    const todolistBtnClickHandler = () => {
        console.log('[Menu] todolistBtnClickHandler()');

        if (SESSIONS.USER_SESSION.GET_SIGNINEDID() === '') {
            alert('PLEASE SIGN-IN!!');

            setIsHome(false);
            setIsSignup(false);
            setIsSignin(true);
            setIsModify(false);
            setIsTodolist(false);
            setIsMemo(false);
            setIsCalender(false);
            return;
        }

        setIsHome(false);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(true);
        setIsMemo(false);
        setIsCalender(false);

    }
    const memoBtnClickHandler = () => {
        console.log('[Menu] memoBtnClickHandler()');

        if (SESSIONS.USER_SESSION.GET_SIGNINEDID() === '') {
            alert('PLEASE SIGN-IN!!');

            setIsHome(false);
            setIsSignup(false);
            setIsSignin(true);
            setIsModify(false);
            setIsTodolist(false);
            setIsMemo(false);
            setIsCalender(false);
            return;
            
        }

        setIsHome(false);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(true);
        setIsCalender(false);

    }
    const calenderBtnClickHandler = () => {
        console.log('[Menu] calenderBtnClickHandler()');

        if (!SESSIONS.USER_SESSION.GET_SIGNINEDID()) {
            alert('PLEASE SIGN-IN!!');

            setIsHome(false);
            setIsSignup(false);
            setIsSignin(true);
            setIsModify(false);
            setIsTodolist(false);
            setIsMemo(false);
            setIsCalender(false);
            return;

        }

        setIsHome(false);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(true);

    }    
    const modifyBtnClickHandler = () => {
        console.log('[Menu] modifyBtnClickHandler()');

        setIsHome(false);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(true);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(false);

    }
    const signoutBtnClickHandler = () => {
        console.log('[Menu] signoutBtnClickHandler()');

        SESSIONS.USER_SESSION.SET_SIGNINEDID();

        setIsUserSigned(false);
        
        setIsHome(true);
        setIsSignup(false);
        setIsSignin(false);
        setIsModify(false);
        setIsTodolist(false);
        setIsMemo(false);
        setIsCalender(false);

    }

    return(
        <div className="menu-wrap">
            <div className="items">
                <div className="service">
                                <a href="#none" onClick={todolistBtnClickHandler}>todolist</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#none" onClick={memoBtnClickHandler}>memo</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#none" onClick={calenderBtnClickHandler}>calender</a>
                </div>
                <div className="member">
                    <a href="#none" onClick={homeBtnClickHandler}>home</a>
                    &nbsp;&nbsp; | &nbsp;&nbsp;
                    {
                        !SESSIONS.USER_SESSION.GET_SIGNINEDID()
                        ?
                        <>
                            <a href="#none" onClick={signupBtnClickHandler}>signup</a>
                            &nbsp;&nbsp;
                            <a href="#none" onClick={signinBtnClickHandler}>signin</a>
                        </>
                        :
                        <>
                            <a href="#none" onClick={modifyBtnClickHandler}>modify</a>
                            &nbsp;&nbsp;
                            <a href="#none" onClick={signoutBtnClickHandler}>signout</a>
                        </>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Menu;