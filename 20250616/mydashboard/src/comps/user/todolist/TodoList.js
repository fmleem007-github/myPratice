import '../../../style/user/todolist.css';

const TodoList = () => {
    return(
        <div className="todolist-wrap">
            <h4>TODO LIST</h4>
            <input type="text" placeholder="Input new todo"/><br />
            <input type="datetime-local" style={{width: 'initial'}} />
            <button>REGIST</button>
            <br /><br />
            <div>
                <input type='text' value="대 청소하자!" />
                <input type='datetime-local' style={{width: 'initial'}} />
                <button>MOD</button>
                <button>DEL</button>
            </div>
            <div>
                <input type='text' value="식사 하자!" />
                <input type='datetime-local' style={{width: 'initial'}} />
                <button>MOD</button>
                <button>DEL</button>
            </div>
        </div>
    )
}

export default TodoList;