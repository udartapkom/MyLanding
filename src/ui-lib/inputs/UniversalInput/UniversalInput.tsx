import styles from './UniversalInput.module.scss';
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
}
const UniversalInput: FC<IUniversalInput> = (
    {
        type = 'text',
        id,
        placeholder= '',
        icon = null,
        label= '',
        errorMessage = '',
        ...rest
    }) => (
    <div className={styles.UniversalInput}>
        <label className={styles.UniversalInput_label} htmlFor={id}>{label}</label>
         <div className={styles.UniversalInput_container}>
             <input
                className={styles.UniversalInput_input}
                id={id}
                placeholder={placeholder}
                type={type}
                {...rest}
             />
             {icon && icon}
         </div>
        {errorMessage && <p className={styles.UniversalInput_text}>{errorMessage}</p>}
    </div>
)
export default UniversalInput;
