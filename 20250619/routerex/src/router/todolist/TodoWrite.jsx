import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const COMPONENT_NAME = '[TodoWrite] ';

const TodoWrite = () => {

    // hooks
    const [isRender, setIsRender] = useState(false);
    const [todoTxt, setTodoTxt] = useState('');
    const [todoExpiredDate, setTodoExpiredDate] = useState('');

    useEffect(() => {
        console.log(`${COMPONENT_NAME}useEffect()`);

        let signinedId = sessionStorage.getItem('signinedId');
        if (signinedId === null || signinedId === '') {
            alert('Please sign in!');
            navigator('/member/signin');
            return;
        }

        setIsRender(true);

    });

    const navigator = useNavigate();

    // handler
    const todoChangeHandler = (e) => {
        console.log(`${COMPONENT_NAME}todoChangeHandler()`);

        switch(e.target.name) {
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

    return(
        <>
            {
                isRender
                ?
                <div className="todo-write-wrap">
                    <div className="wrap">
                        <h4>TODO WRITE</h4>
                        <input 
                        type="text" 
                        placeholder="Input new todo" 
                        value={todoTxt} 
                        onChange={todoChangeHandler}
                        name="todoTxt"/>
                        <input 
                        type="datetime-local" 
                        value={todoExpiredDate} 
                        onChange={todoChangeHandler} 
                        name='todoExpiredDate' 
                        style={{width: 'initial'}}/>
                        <button onClick={() => {
                            console.log(`${COMPONENT_NAME}REGIST BUTTON CLICKED!!`);
                            
                            let signinedId = sessionStorage.getItem('signinedId');

                            let todos = localStorage.getItem('todos');
                            if (todos === null) {
                                let todos = {
                                    [signinedId]: {
                                        [uuidv4()]: {
                                            todoTxt, todoExpiredDate,
                                        }
                                    }
                                }
                                localStorage.setItem('todos', JSON.stringify(todos));
                            } else {
                                todos = JSON.parse(todos);
                                let myTodos = todos[signinedId];
                                if (myTodos === undefined) {
                                    myTodos = {
                                        [signinedId]: {
                                            [uuidv4()]: {
                                                todoTxt, todoExpiredDate,
                                            }
                                        }
                                    }
                                    localStorage.setItem('todos', JSON.stringify(todos));
                                } else {
                                    myTodos[uuidv4()] = {
                                        todoTxt, todoExpiredDate,
                                    }
                                    localStorage.setItem('todos', JSON.stringify(todos));
                                }
                            }

                            alert('TODO REGIST SUCCESS!!');
                            navigator('/todolist/list');

                        }}>REGIST</button>
                    </div>
                </div>
                :
                <></>
            }
        </>
        
    );
}

export default TodoWrite;