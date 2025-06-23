import '../../../style/user/calender.css';

const Calender = () => {
    return(
        <div className="calender-wrap">
            <input 
            type='date'
            style={{ width: 'initial' }}/>
            <input type='text' placeholder='Input new plan'/>
            <button>ADD PLAN</button>

            <br/><br/>

            <button>&#60;&#60;PRE</button>
            <select>
                <option value="">-- SELECT YEAR --</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
            </select>
            <select>
                <option value="">-- SELECT MONTH --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>
            <button>NEX&#62;&#62;</button>
            <br/>
            <input 
            type='text' 
            value="리액트 시험"/>
            <button>MOD or DEL</button>
            <br />
            <input 
            type='text' 
            value="리액트 시험"/>
            <button>MOD or DEL</button>
            <br />
        </div>
    )
}

export default Calender;