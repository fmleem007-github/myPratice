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

    return (
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
                                name="todoTxt" />
                            <input
                                type="datetime-local"
                                value={todoExpiredDate}
                                onChange={todoChangeHandler}
                                name='todoExpiredDate'
                                style={{ width: 'initial' }} />
                            <button onClick={() => {
                                console.log(`${COMPONENT_NAME}REGIST BUTTON CLICKED!!`);

                                let signinedId = sessionStorage.getItem('signinedId');
                                if (!signinedId) {
                                    console.error("No signinedId in sessionStorage");
                                    return; // 또는 적절한 에러 처리
                                }

                                let todoid = uuidv4(); // 또는 다른 ID 생성 방식
                                let todo = {
                                    todoTxt: todoTxt || "", // 기본값 처리
                                    todoExpiredDate: todoExpiredDate || new Date().toISOString(), // 기본값 처리
                                };

                                let todosStr = localStorage.getItem('todos');
                                let todos;

                                try {
                                    if (todosStr === null) {
                                        // 데이터가 없는 경우 → 새로 생성
                                        todos = {
                                            [signinedId]: { [todoid]: todo },
                                        };
                                    } else {
                                        // 데이터가 있는 경우 → 파싱 후 업데이트
                                        todos = JSON.parse(todosStr);
                                        if (!todos[signinedId]) {
                                            // 현재 사용자의 할 일 목록이 없는 경우
                                            todos[signinedId] = { [todoid]: todo };
                                        } else {
                                            // 현재 사용자의 할 일 목록이 있는 경우
                                            todos[signinedId][todoid] = todo;
                                        }
                                    }
                                    localStorage.setItem('todos', JSON.stringify(todos));
                                } catch (error) {
                                    console.error("Error processing todos:", error);
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