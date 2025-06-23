import { useState } from "react";
import Admin from "./comps/admin/Admin";
import Header from "./comps/Header";
import User from "./comps/user/User";

function App() {

  // hooks
  const [isUserMode, setIsUserMode] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(false);
<<<<<<< HEAD
=======
  const [IsUserSignedin, setIsUserSignedin] = useState(false);
>>>>>>> 283f9524 (ti do list)

  return (
    <>
      <Header 
      setIsUserMode={setIsUserMode} 
      setIsAdminMode={setIsAdminMode}/>
      {
<<<<<<< HEAD
        isUserMode && <User />
=======
        isUserMode && <User 
        setIsUserSignedin={setIsUserSignedin}
        />
>>>>>>> 283f9524 (ti do list)
      }
      {
        isAdminMode && <Admin />
      }      
    </>
  );
}

export default App;
