import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Signup from './member/Signup';
import Signin from './member/Signin';
import Modify from './member/Modify';
import TodoWrite from './todolist/TodoWrite';
import TodoList from './todolist/TodoList';
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import TodoModOrDel from "./todolist/TodoModOrDel";

const Wrap = () => {

    // hooks
    const [isSignined, setIsSignined] = useState(false);

    useEffect(() => {

        let signinedId = sessionStorage.getItem('signinedId');
        if (signinedId !== null && signinedId !== '') {
            setIsSignined(true);
        }

    });

    return (
        <BrowserRouter>
            <Header />
            <Menu
                isSignined={isSignined}
                setIsSignined={setIsSignined} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/member/signup' element={<Signup />} />
                <Route path='/member/signin' element={<Signin setIsSignined={setIsSignined} />} />
                <Route path='/member/modify' element={<Modify />} />
                <Route path='/todolist/write' element={<TodoWrite />} />
                <Route path='/todolist/list' element={<TodoList />} />
                {/* <Route path='/todolist/modordel' element={<TodoModOrDel />} /> */}
                <Route path='/todolist/modordel/:id/:txt/:expireddate' element={<TodoModOrDel />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Wrap;