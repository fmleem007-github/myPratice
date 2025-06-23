import { useEffect, useState } from 'react';
import '../../../style/user/todolist.css';
import { SESSIONS } from '../../session/session';
import { getId } from '../../../util/util';

const TodoList = () => {

    // hooks
    const [todoTxt, setTodoTxt] = useState('');
    const [todoExpiredDate, setTodoExpiredDate] = useState('');
    const [myTodos, setMyTodos] = useState([]);

    useEffect(() => {
        console.log('[TodoList] useEffect()');
        let todos = localStorage.getItem('todos');
        if (todos !== null) {
            todos = JSON.parse(todos);  // String -> Object
            let myTodos = todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            if (myTodos !== undefined) {
                let keys = Object.keys(myTodos); // [1750124464, 1750124499]
                let mts = keys.map(key => {
                    myTodos[key].id = key;
                    return myTodos[key];
                });
                setMyTodos(mts.reverse());
            }

        }
    }, []);

    // handler
    const todoTxtChangeHandler = (e) => {
        console.log('[TodoList] todoTxtChangeHandler()');
        setTodoTxt(e.target.value);
    }
    const todoExpiredDateChangeHandler = (e) => {
        console.log('[TodoList] todoExpiredDateChangeHandler()');
        setTodoExpiredDate(e.target.value);
    }
    const registBtnClickHandler = () => {
        console.log('[TodoList] registBtnClickHandler()');

        let todos = localStorage.getItem('todos');
        if (todos === null) {
            let newTodo = {
                [SESSIONS.USER_SESSION.GET_SIGNINEDID()]: {
                    [getId()]: {
                        todoTxt, todoExpiredDate
                    }
                }
            }
            localStorage.setItem('todos', JSON.stringify(newTodo));

        } else {
            todos = JSON.parse(todos); // String -> Object
            let myTodos = todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            if (myTodos === undefined) {
                todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()] = {};
                myTodos = todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            }
            myTodos[getId()] = {
                todoTxt, todoExpiredDate
            }
            localStorage.setItem('todos', JSON.stringify(todos));

        }

        alert('REGIST SUCCESS!!');
        setTodoTxt('');
        setTodoExpiredDate('');

        todos = localStorage.getItem('todos');
        if (todos !== null) {
            todos = JSON.parse(todos);  // String -> Object
            let myTodos = todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            if (myTodos !== undefined) {
                let keys = Object.keys(myTodos); // [1750124464, 1750124499]
                let mts = keys.map(key => {
                    myTodos[key].id = key;
                    return myTodos[key];
                });
                setMyTodos(mts.reverse());
            }

        }

    }
    const todoTxtForModifyChangeHandler = (id, newTodoTxt) => {
        console.log('[TodoList] todoTxtForModifyChangeHandler()');

        let modifiedMyTodos = myTodos.map((myTodo) => {
            if(myTodo.id === id)
                myTodo.todoTxt = newTodoTxt;
            return myTodo;
        });

        setMyTodos(modifiedMyTodos);

    }
    const todoModifyBtnClickHandler = (id) => {
        console.log('[TodoList] todoModifyBtnClickHandler()');

        let todosAtDB = JSON.parse(localStorage.getItem('todos'));
        let myTodosAtDB = todosAtDB[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
        let myTodoAtDB = myTodosAtDB[id];

        for (let i = 0; i < myTodos.length; i++) {
            if (String(myTodos[i].id) === String(id)) {
                myTodoAtDB.todoTxt = myTodos[i].todoTxt;
                break;
            }
        }
        localStorage.setItem('todos', JSON.stringify(todosAtDB));

    }
    const todoDelBtnClickHandler = (id) => {
        console.log('[TodoList] todoDelBtnClickHandler()');

        let todos = JSON.parse(localStorage.getItem('todos'));
        let myTodos = todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
        delete myTodos[id];
        localStorage.setItem('todos', JSON.stringify(todos));
        alert('DELETE SUCCESS!!');

        /*
        todos = localStorage.getItem('todos');
        if (todos !== null) {
            todos = JSON.parse(todos);  // String -> Object
            let myTodos = todos[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            if (myTodos !== undefined) {
                let keys = Object.keys(myTodos); // [1750124464, 1750124499]
                let mts = keys.map(key => {
                    myTodos[key].id = key;
                    return myTodos[key];
                });
                setMyTodos(mts.reverse());
            }
        }
        */

        let keys = Object.keys(myTodos);
        let mts = keys.map(key => {
            myTodos[key].id = key;
            return myTodos[key];
        });
        setMyTodos(mts.reverse());

    }

    return(
        <div className="todolist-wrap">
            <h4>TODO LIST</h4>
            <input value={todoTxt} onChange={todoTxtChangeHandler} type="text" placeholder="Input new todo"/><br />
            <input value={todoExpiredDate} onChange={todoExpiredDateChangeHandler} type="datetime-local" style={{width: 'initial'}} />
            <button onClick={registBtnClickHandler}>REGIST</button>
            <br /><br />
            {
                myTodos.map((myTodo, idx) => {
                    return(
                        <div key={idx}>
                            <input 
                            type='text' 
                            value={myTodo.todoTxt} 
                            onChange={(e) => {
                                todoTxtForModifyChangeHandler(myTodo.id, e.target.value);
                            }}/>
                            <input 
                            type='datetime-local' 
                            style={{width: 'initial'}} 
                            value={myTodo.todoExpiredDate}/>
                            <button onClick={() => {todoModifyBtnClickHandler(myTodo.id)}}>MOD</button>
                            <button onClick={() => {todoDelBtnClickHandler(myTodo.id)}}>DEL</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList;