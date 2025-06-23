import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const COMPONENT_NAME = '[TodoModOrDel] ';

const TodoModOrDel = () => {

    // hooks 
    // const [searchParams] = useSearchParams();

    const { id, txt, expireddate } = useParams();

    const [todoId, setTodoId] = useState('');
    const [todoTxt, setTodoTxt] = useState('');
    const [todoExpiredDate, setTodoExpiredDate] = useState('');

    useEffect(() => {
        console.log(`${COMPONENT_NAME}useEffect()`);

        let signinedId = sessionStorage.getItem('signinedId');
        if (signinedId === null || signinedId === '') {
            navigate('/');
            return;
        }

        // console.log('id: ', searchParams.get('id'));
        // console.log('todoTxt: ', searchParams.get('todoTxt'));
        // console.log('todoExpiredDate: ', searchParams.get('todoExpiredDate'));
        console.log('id: ', id);
        console.log('todoTxt: ', txt);
        console.log('todoExpiredDate: ', expireddate);

        setTodoId(id);
        setTodoTxt(txt);
        setTodoExpiredDate(expireddate);
    }, []);

    const navigate = useNavigate();

    // handler

    const todoChangeHandler = (e) => {
        console.log(`${COMPONENT_NAME}  todoChangeHandlerHandler()`);

        switch (e.target.name) {
            case 'todoTxt':
                setTodoTxt(e.target.value);
                break;
            case 'todoExpiredDate':
                setTodoExpiredDate(e.target.value);
                break;
            default:
                break;
        }
    }

    const modBtnClickHandler = () => {
        console.log(`${COMPONENT_NAME}  modBtnClickHandler()`);

        let signinedId = sessionStorage.getItem('signinedId');

        let todos = JSON.parse(localStorage.getItem('todos'));
        let myTodos = todos[signinedId];
        myTodos[todoId] = {
            todoTxt, todoExpiredDate,
        }
        localStorage.setItem('todos', JSON.stringify(todos));
        alert('MODIFY SUCCESS!!');
        navigate('/todolist/list');
    }

    const delBtnClickHandler = () => {
        console.log(`${COMPONENT_NAME}  delBtnClickHandler()`);
        let signinedId = sessionStorage.getItem('signinedId');

        let todos = JSON.parse(localStorage.getItem('todos'));
        let myTodos = todos[signinedId];
        delete myTodos[todoId];

        localStorage.setItem('todos', JSON.stringify(todos));
        alert('DELETE SUCCESS!!');
        navigate('/todolist/list');
    }

    return (
        <div className="todo-mod-del-wrap">
            <div className="wrap">
                <h4>TODO MODIFY or DELETE</h4>
                <input
                    type="text"
                    name="todoTxt"
                    value={todoTxt}
                    onChange={todoChangeHandler} />
                <input
                    type="datetime-local"
                    name="todoExpiredDate"
                    value={todoExpiredDate}
                    onChange={todoChangeHandler}
                    style={{ width: 'initial' }} />
                <button onClick={modBtnClickHandler}>MOD</button>
                <button onClick={delBtnClickHandler}>DEL</button>
            </div>
        </div>
    )
}

export default TodoModOrDel;