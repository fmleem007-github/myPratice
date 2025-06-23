import { useEffect, useState } from 'react';
import '../../../style/user/calender.css';
import { SESSIONS } from '../../session/session';
import { getId } from '../../../util/util';

const Calender = () => {

    // hooks
    const [planDate, setPlanDate] = useState('');
    const [planTxt, setPlanTxt] = useState('');
    const [myPlansAtCurMonth, setMyPlansAtCurMonth] = useState([]);

    const [curYear, setCurYear] = useState('');
    const [curMonth, setCurMonth] = useState('');
    
    useEffect(() => {
        console.log('[Calender] useEffect()');

        // 1. 보고 싶은 연월 in system
        let today = new Date();
        let curYear = today.getFullYear();
        let curMonth = today.getMonth() + 1;
        setCurYear(curYear);
        setCurMonth(curMonth);

        // 2. 일정(plan)가져오기
        let targetMonth = `${curYear}-${String(curMonth).padStart(2, '0')}`;
        let plans = localStorage.getItem('plans');
        if (plans !== null) {
            plans = JSON.parse(plans);
            let myPlans = plans[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            
            // 3. 해당 월의 데이터만 필터링하기!
            const filteredEntries = Object.entries(myPlans).filter(([key, value]) => {
                return value.planDate.startsWith(targetMonth);

            });

            // 4. 오름차순(ASC) 정렬(이전 날짜가 먼저)
            const sortedByAsc = filteredEntries.sort((a, b) => {
                return new Date(a[1].planDate) - new Date(b[1].planDate);

            });
            console.log('sortedByAsc: ', sortedByAsc);
            setMyPlansAtCurMonth(sortedByAsc);

        }

    },[]);

    // handler
    const planDateChangeHandler = (e) => {
        console.log('[Calender] planDateChangeHandler()');
        setPlanDate(e.target.value);

    }
    const planTxtChangeHandler = (e) => {
        console.log('[Calender] planTxtChangeHandler()');
        setPlanTxt(e.target.value);

    }
    const addPlanBtnClickHandler = () => {
        console.log('[Calender] addPlanBtnClickHandler()');

        let newPlan = {
            planTxt, planDate,
        }

        let plans = localStorage.getItem('plans');
        if (plans === null) {
            plans = {
                [SESSIONS.USER_SESSION.GET_SIGNINEDID()]: {
                    [getId()]: newPlan,
                }
            }

        } else {
            plans = JSON.parse(plans);
            let myPlans = plans[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            myPlans[getId()] = newPlan;

        }

        localStorage.setItem('plans', JSON.stringify(plans));
        alert('ADD NEW PLAN SUCCESS!!');
        setPlanTxt('');
        setPlanDate('');


        // 1. 보고 싶은 연월 in system
        // let today = new Date();
        // let curYear = today.getFullYear();
        // let curMonth = today.getMonth() + 1;
        // setCurYear(curYear);
        // setCurMonth(curMonth);

        // 2. 일정(plan)가져오기
        let targetMonth = `${curYear}-${String(curMonth).padStart(2, '0')}`;
        plans = localStorage.getItem('plans');
        if (plans !== null) {
            plans = JSON.parse(plans);
            let myPlans = plans[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
            
            // 3. 해당 월의 데이터만 필터링하기!
            const filteredEntries = Object.entries(myPlans).filter(([key, value]) => {
                return value.planDate.startsWith(targetMonth);

            });

            // 4. 오름차순(ASC) 정렬(이전 날짜가 먼저)
            const sortedByAsc = filteredEntries.sort((a, b) => {
                return new Date(a[1].planDate) - new Date(b[1].planDate);

            });
            
            setMyPlansAtCurMonth(sortedByAsc);

        }

    }
    const curYearChangeHandler = (e) => {
        console.log('[Calender] curYearChangeHandler()');
        setCurYear(e.target.value);
    }
    const curMonthChangeHandler = (e) => {
        console.log('[Calender] curMonthChangeHandler()');
        setCurMonth(e.target.value);
    }

    return(
        <div className="calender-wrap">
            <input 
            type='date'
            style={{ width: 'initial' }} 
            value={planDate} 
            onChange={planDateChangeHandler}/>
            <input 
            type='text' 
            placeholder='Input new plan'
            value={planTxt} 
            onChange={planTxtChangeHandler}/>
            <button onClick={addPlanBtnClickHandler}>ADD PLAN</button>

            <br/><br/>

            <button 
            onClick={() => {
                let preYear = curYear;
                let preMonth = curMonth;

                if (curMonth <= 1) {
                    if(preYear === 2025) {
                        alert('캘린더 서비스는 2025부터 제공됩니다.');
                        return;
                    }
                    preYear--;
                    preMonth = 12;
                    setCurYear(preYear);
                    setCurMonth(preMonth);

                } else {
                    preMonth--;
                    setCurMonth(preMonth);

                }

                // 1. 보고 싶은 연월 in system
                // let today = new Date();
                // let curYear = today.getFullYear();
                // let curMonth = today.getMonth() + 1;
                // setCurYear(curYear);
                // setCurMonth(curMonth);

                // 2. 일정(plan)가져오기
                let targetMonth = `${preYear}-${String(preMonth).padStart(2, '0')}`;
                let plans = localStorage.getItem('plans');
                if (plans !== null) {
                    plans = JSON.parse(plans);
                    let myPlans = plans[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
                    
                    // 3. 해당 월의 데이터만 필터링하기!
                    const filteredEntries = Object.entries(myPlans).filter(([key, value]) => {
                        return value.planDate.startsWith(targetMonth);

                    });

                    // 4. 오름차순(ASC) 정렬(이전 날짜가 먼저)
                    const sortedByAsc = filteredEntries.sort((a, b) => {
                        return new Date(a[1].planDate) - new Date(b[1].planDate);

                    });
                    console.log('sortedByAsc: ', sortedByAsc);
                    setMyPlansAtCurMonth(sortedByAsc);

                }
                
            }}>&#60;&#60;PRE</button>
            <select 
            value={curYear} 
            onChange={curYearChangeHandler}>
                <option value="">-- SELECT YEAR --</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
            </select>
            <select 
            value={curMonth} 
            onChange={curMonthChangeHandler}>
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
            <button onClick={() => {
                let nextYear = curYear;
                let nextMonth = curMonth;

                if (curMonth >= 12) {
                    if(nextYear === 2029) {
                        alert('캘린더 서비스는 2029까지 제공됩니다.');
                        return;
                    }
                    nextYear++;
                    nextMonth = 1;
                    setCurYear(nextYear);
                    setCurMonth(nextMonth);

                } else {
                    nextMonth++;
                    setCurMonth(nextMonth);

                }

                // 2. 일정(plan)가져오기
                let targetMonth = `${nextYear}-${String(nextMonth).padStart(2, '0')}`;
                let plans = localStorage.getItem('plans');
                if (plans !== null) {
                    plans = JSON.parse(plans);
                    let myPlans = plans[SESSIONS.USER_SESSION.GET_SIGNINEDID()];
                    
                    // 3. 해당 월의 데이터만 필터링하기!
                    const filteredEntries = Object.entries(myPlans).filter(([key, value]) => {
                        return value.planDate.startsWith(targetMonth);

                    });

                    // 4. 오름차순(ASC) 정렬(이전 날짜가 먼저)
                    const sortedByAsc = filteredEntries.sort((a, b) => {
                        return new Date(a[1].planDate) - new Date(b[1].planDate);

                    });
                    console.log('sortedByAsc: ', sortedByAsc);
                    setMyPlansAtCurMonth(sortedByAsc);

                }

            }}>NEX&#62;&#62;</button>
            <br/>
            {
                myPlansAtCurMonth.map((myPlan) => {
                    return (
                        <>
                            <input 
                            type='text' 
                            value={myPlan[1].planTxt} 
                            onChange={() => {
                                console.log(`id: ${myPlan[0]}`);
                            }}/>
                            <button
                            onClick={() => {
                                console.log(`id: ${myPlan[0]}`);
                            }}>MOD or DEL</button>
                            <br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Calender;