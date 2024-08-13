'use client'
import {FormEvent} from "react";
import {UniversalButton} from "@/ui-lib/buttons";
import styles from './FeedbackForm.module.scss';
import {
    UniversalInput,
    EmailInput,
    TelphoneInput
    } from "@/ui-lib/inputs";

const FeedbackForm = () => {
    const hanleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert('Форма')
    }
    return (
        <form
            onSubmit={hanleSubmit}
            className={styles.FeedbackForm}
        >
            <h2 className={styles.FeedbackForm_head}>Представьтесь, пожалуйста</h2>
            <UniversalInput
                placeholder={'Ваше имя'}
                isRequired={true}
            />
            <TelphoneInput
                id={'telephone'}
                isRequired={true}
            />

            <EmailInput id={'email'} />
            <UniversalInput
                placeholder={'Ник Телеграм'}
                isRequired={false}
            />

            <UniversalButton>
                <p className={styles.FeedbackForm_textButton}>Отправить</p>
            </UniversalButton>
        </form>
    )
}
export default FeedbackForm;