import { Link } from "react-router-dom";

const Menu = ({ isSignined, setIsSignined }) => {
    return(
        <div className="menu-wrap">
            <div className="wrap">
                <div className="menus">
                    <Link to="/">home</Link>
                    {
                        !isSignined
                        ?
                            <>
                                &nbsp;&nbsp; <span className="menu-separator">|</span> &nbsp;&nbsp;
                                <Link to="/member/signup">signup</Link>
                                &nbsp;&nbsp; <span className="menu-separator">|</span> &nbsp;&nbsp;
                                <Link to="/member/signin">signin</Link>
                            </>
                        :
                            <>
                                &nbsp;&nbsp; <span className="menu-separator">|</span> &nbsp;&nbsp;
                                <Link to="/member/modify">modify</Link>
                                &nbsp;&nbsp; <span className="menu-separator">|</span> &nbsp;&nbsp;
                                <Link to="" onClick={() => {
                                    console.log('[Menu] SIGNOUT BUTTON CLICKED!!');
                                    
                                }}>signout</Link>
                            </>

                    }
                    
                </div>
                <div className="services">
                    <Link to="/todolist/write">todo-write</Link>
                    &nbsp;&nbsp; <span className="menu-separator">|</span> &nbsp;&nbsp;
                    <Link to="/todolist/list">todo-list</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu;