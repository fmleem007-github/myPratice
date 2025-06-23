import React, { useDeferredValue, useState } from 'react';

import { DB_NAMES, VIEWS } from './const';
const todos = [];
const users = [];
const Sayings = [];

// DB구조

// let user = {
//                 id: "gildong",
//                 pw: "1234",
//                 email: "aa@a.a",
//                 phone: "010-1234-5678",
//                 todolist: [{calendar: "20250611", iscomplete: false, txt: "안녕하세요"}],
//                 memo: {txt: "메모1",isVisible: true},
//                 schedule: [{calendar: "20250506", name:"친구야속"}]
// };

export const getUsersDB = () => { return localStorage.getItem(DB_NAMES.USER_DB_NAME); };

export const setUsersDB = (user) => { localStorage.getItem(DB_NAMES.USER_DB_NAME); };
export const initDb = () => {
    let dbStr = localStorage.getItem(DB_NAMES.SAYING_DB_NAME);
    if (dbStr === null) {
        sayingarr.map((text, idx) => {
            sayingDb.Push(idx, text);
            localStorage.setItem(DB_NAMES.SAYING_DB_NAME, JSON.stringify(sayingDb));
        });
    }
    else {
        sayingDb = JSON.parse(dbStr);
    }
}

const getSaying = () => {
    let idx = Math.floor(Math.random() * N); // N은 범위의 끝

    return sayingDb[idx]


}

