import { useEffect, useState } from 'react';
import '../../../style/user/memo.css';
import { SESSIONS } from '../../session/session';

const Memo = () => {

    // hooks
    const [myMemo, setMyMemo] = useState('');

    useEffect(() => {
        console.log('[Memo] useEffect()');

        let memos = localStorage.getItem('memos');
        if (memos !== null) {
            memos = JSON.parse(memos);
            setMyMemo(memos[SESSIONS.USER_SESSION.GET_SIGNINEDID()]);
        }
    }, []);

    // handler
    const memoTxtChangeHandler = (e) => {
        console.log('[Memo] memoTxtChangeHandler()');
        setMyMemo(e.target.value);

        let memos = localStorage.getItem('memos');
        if (memos === null) {
            memos = {
                [SESSIONS.USER_SESSION.GET_SIGNINEDID()]: e.target.value,
            }
            localStorage.setItem('memos', JSON.stringify(memos));

        } else {
            memos = JSON.parse(memos);
            memos[SESSIONS.USER_SESSION.GET_SIGNINEDID()] = e.target.value;
            localStorage.setItem('memos', JSON.stringify(memos));

        }

    }

    return(
        <div className="memo-wrap">
            <textarea
            rows={15}
            cols={70}
            onChange={memoTxtChangeHandler} 
            value={myMemo}></textarea>
        </div>
    )
}

export default Memo;