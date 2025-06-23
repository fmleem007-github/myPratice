import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoModOrDel from "./TodoModOrDel";

const COMPONENT_NAME = '[TodoList] ';

const TodoList = () => {

    // hooks
    const [isRender, setIsRender] = useState(false);
    const [myTodos, setMyTodos] = useState([]);

    useEffect(() => {
        console.log(`${COMPONENT_NAME}useEffect()`);

        let signinedId = sessionStorage.getItem('signinedId');
        if (signinedId === null || signinedId === '') {
            alert('Please sign in!');
            navigate('/member/signin');
            return;
        }

        setIsRender(true);

        let todos = localStorage.getItem('todos');
        if (todos !== null) {
            todos = JSON.parse(todos);
            let myTodos = todos[signinedId];
            if (myTodos !== undefined) {
                if (myTodos !== undefined) {
                    let keys = Object.keys(myTodos);
                    let mts = keys.map(key => {
                        myTodos[key].id = key;
                        return myTodos[key];
                    });
                    setMyTodos(mts.reverse());
                }
            }
        }


    }, []);

    const navigate = useNavigate();

    //handler

    const todoModOrDelBtnClickHandler = (e, id, todoTxt, todoExpiredDate) => {
        console.log(`${COMPONENT_NAME} todoModOrDelBtnClickHandler()`);

        console.log('e: ', e);
        console.log('id: ', id);
        console.log('todoTxt: ', todoTxt);
        console.log('todoExpiredDate: ', todoExpiredDate);

        // 1. 쿼리 파라미터
        // // navigate(`todolist/modordel?id=${id}&todoTxt=${todoTxt}&todoExpiredDate=${todoExpiredDate}`);
        // const params = new URLSearchParams({
        //     id, todoTxt, todoExpiredDate
        // });
        // navigate(`/todolist/modordel?${params.toString()}`);

        // 2. URL 파라미터
        navigate(`/todolist/modordel/${id}/${todoTxt}/${todoExpiredDate}`);
    }

    return (
        <>
            {
                isRender
                    ?
                    <div className="todo-list-wrap">
                        <div className="wrap">
                            <h4>TODO LIST</h4>
                            {
                                myTodos.map((myTodo, idx) => {
                                    return (
                                        <div>
                                            <input
                                                name="todoTxt"
                                                value={myTodo.todoTxt}
                                                type="text"
                                                readOnly />
                                            <input
                                                name="todoExpiredDate"
                                                value={myTodo.todoExpiredDate}
                                                type="datetime-local"
                                                readOnly
                                                style={{ width: 'initial' }} />
                                            <button onClick={(e) => {
                                                todoModOrDelBtnClickHandler(
                                                    e,
                                                    myTodo.id,
                                                    myTodo.todoTxt,
                                                    myTodo.todoExpiredDate,

                                                );
                                            }
                                            }>MOD or DEL</button>

                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    );
}

export default TodoList;