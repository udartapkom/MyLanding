'use client'
import React, {useState, useRef, useEffect, SyntheticEvent} from 'react';
import styles from "./ActionTime.module.scss";
const ActionTime = () => {
    const Ref =useRef(null);
    const [timer, setTimer] = useState(
        {
        'total': 0,
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0})
   // const date = new Date(Date.now())
    const getTimeRemaning = (endTime: any) => {
        let t = Date.parse(endTime)  - Date.now();
        let seconds = Math.floor( (t/1000) % 60 );
        let minutes = Math.floor( (t/1000/60) % 60 );
        let hours = Math.floor( (t/(1000*60*60)) % 24 );
        let days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function initializeClock(endtime: any){

        let timeinterval = setInterval(function(){
            let t = getTimeRemaning(endtime);
            setTimer(t)
            console.log(timer.seconds)
            if(t.total<=0){
                clearInterval(timeinterval);
            }
        },1000);
    }

    useEffect(() => {
        initializeClock('2025-01-01');
    }, []);


    return (
        <section className={styles.actionTime}>
            <p className={styles.actionTime_text}>
                Сделай заказ сейчас и получи один дополнительный блок бесплатно!
            </p>
            <h2>{timer.hours}</h2>
        </section>
    )
}
export default ActionTime;