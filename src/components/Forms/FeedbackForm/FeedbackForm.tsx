'use client'
import styles from './FeedbackForm.module.scss';
import {UniversalInput} from "@/ui-lib/inputs";
import {UniversalButton} from "@/ui-lib/buttons";
import {FormEvent} from "react";
const FeedbackForm = () => {
    const hanleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Форма')
    }
    return (
        <form
            onSubmit={hanleSubmit}
            className={styles.FeedbackForm}
        >
            <UniversalInput
                placeholder={'Ваше имя'}
                isRequired={true}
            />
            <UniversalInput
                placeholder={'Телефон'}
                isRequired={true}
            />
            <UniversalInput
                placeholder={'E-mail'}
                isRequired={false}
            />
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