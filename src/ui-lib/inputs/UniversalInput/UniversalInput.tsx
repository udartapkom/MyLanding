import styles from './UniversalInput.module.scss';
import snowRed from '@public/any/snowRed 1.svg';
import {
    ComponentPropsWithoutRef,
    FC,
    ReactElement
   } from "react";

interface IUniversalInput extends ComponentPropsWithoutRef<'input'> {
    type?: string
    placeholder?: string
    label?: string
    icon?: ReactElement<FC> | null
    id?: string
    errorMessage?: string | null;
    isRequired?: boolean
}
const UniversalInput: FC<IUniversalInput> = (
    {
        type = 'text',
        id,
        placeholder= '',
        icon = null,
        label= '',
        errorMessage = '',
        isRequired = false,
        ...rest
    }) => (
    <div className={styles.UniversalInput}>

        <div className={styles.UniversalInput_container}>
            {isRequired
                &&
                <img
                    src={snowRed.src}
                    alt={'Снежинка'}
                    className={styles.UniversalInput_snow}
                />
            }
            <input
                className={styles.UniversalInput_input}
                id={id}
                placeholder={placeholder}
                type={type}
                required={isRequired}
                {...rest}
            />
            <label className={styles.UniversalInput_label} htmlFor={id}>{'label'}</label>
            {icon && icon}
        </div>
        {errorMessage && <p className={styles.UniversalInput_text}>{errorMessage}</p>}
    </div>
)
export default UniversalInput;
