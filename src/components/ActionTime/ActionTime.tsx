'use client'
import React, {useState, useRef, useEffect} from 'react';
import styles from "./ActionTime.module.scss";
import { OrderButton } from "@/ui-lib/buttons";
const ActionTime = () => {
    const date: Date = new Date(Date.now())
    let month: number | string = date.getMonth() + 1;
    let dateNow: number | string = date.getDate();
    let year: number | string = date.getFullYear();
    const currentDateNow = () => {
        if (month.toString().length == 1) {
            month = '0' + month;
        }
        if (dateNow.toString().length == 1) {
            dateNow = '0' + dateNow;
        }
        let dateCurent = month
            + '/'
            + dateNow
            + '/'
            + year
            + ' ' + '23' + ':' + '59' + ':' + '59'; // последние часы : минуты : секунды текущего дня.
        return dateCurent;
    }
    const Ref = useRef(currentDateNow());
    const [timer, setTimer] = useState(
        {
        'total': 0,
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0})
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
    const initializeClock = (endtime: any) => {
        let timeinterval = setInterval(() => {
            let t = getTimeRemaning(endtime);
            setTimer(t)
            if(t.total<=0){
                clearInterval(timeinterval);
            }
        },1000);
    }
    useEffect(() => {
        initializeClock(Ref.current);
    }, []);
    // console.log(getTimeRemaning(Ref.current))
    return (
        <section className={styles.actionTime}>
            <p className={styles.actionTime_text}>
                Сделай заказ сейчас и получи один дополнительный блок в подарок!
            </p>
            <div className={styles.actionTime_timer}>{timer.days !== 0
                &&
                <h2 className={styles.actionTime_numbers}>{('0' + timer.days).slice(-3)}
                    <span className={styles.actionTime_colon}>д &nbsp;</span></h2>
            }
                <h2 className={styles.actionTime_numbers}>{('0' + timer.hours).slice(-2)}
                    <span className={styles.blink}>:</span>
                </h2>
                <h2 className={styles.actionTime_numbers}>{('0' + timer.minutes).slice(-2)}
                    <span className={styles.blink}>:</span>
                    {/* {
                        timer.seconds%2 ? <p>:</p> : <p>&nbsp;</p>
                    }*/}
                </h2>
                <h2 className={styles.actionTime_numbers}>{('0' + timer.seconds).slice(-2)}</h2>
            </div>
            <OrderButton
                text='ЗАКАЗАТЬ'

            />
        </section>
    )
}
export default ActionTime;