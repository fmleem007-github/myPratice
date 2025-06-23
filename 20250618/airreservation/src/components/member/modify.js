import React, {useState} from "react";

export const Modify = ({setView}) => {
   // hooks
        const   [uId, setUId] = useState('');
       const [uPw, setUPw] = useState('');
       const [uConfirm, setConfirm] = useState('');
       const [uMail, setUMail] = useState('');
       const [uPhone, setuPhone] = useState('');

       // handler
        return(
        <div className="modify-wrap">
       <input type="text" name="uPw" value={uId} placeholder="Input New ID" />
        <br />
        <input type="password" name="uConfirm" value={uConfirm} placeholder="Input New ID" />
        <br />
        <input type="password" name="uMail" value={uPw} placeholder="Input New ID" />
        <br />
        <input type="email" name="uPhone" value={uMail} placeholder="Input New ID" />
        <br />
        <input type="tel" name="uId" value={uPhone} placeholder="Input New ID" />
        <br />
       <button>저장</button>
        </div>
);
}