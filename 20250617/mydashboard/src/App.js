import { useState } from "react";
import Admin from "./comps/admin/Admin";
import Header from "./comps/Header";
import User from "./comps/user/User";

function App() {

  // hooks
  const [isUserMode, setIsUserMode] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const [isUserSigned, setIsUserSigned] = useState(false);
  const [isAdminSigned, setIsAdminSigned] = useState(false);

  return (
    <>
      <Header 
      setIsUserMode={setIsUserMode} 
      setIsAdminMode={setIsAdminMode}/>
      {
        isUserMode && <User 
        setIsUserSigned={setIsUserSigned} />
      }
      {
        isAdminMode && <Admin 
        setIsAdminSigned={setIsAdminSigned} />
      }      
    </>
  );
}

export default App;
