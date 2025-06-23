import '../style/header.css';

const Header = ({ setIsUserMode, setIsAdminMode }) => {

    // handler
    const userModeBtnClickHandler = () => {
        console.log('[Header] userModeBtnClickHandler()');
        setIsUserMode(true);
        setIsAdminMode(false);
    }
    const adminModeBtnClickHandler = () => {
        console.log('[Header] adminModeBtnClickHandler()');
        setIsUserMode(false);
        setIsAdminMode(true);
    }

    return(
        <div className="header-wrap">
            <div className="items">
                <h3>My Dashboard</h3>
                <div>
                    <a href="#none" onClick={userModeBtnClickHandler}>USER</a>
                    &nbsp;&nbsp; | &nbsp;&nbsp; 
                    <a href="#none" onClick={adminModeBtnClickHandler}>ADMIN</a>
                </div>
            </div>
        </div>
    );
}

export default Header;