// Компонент не используется
import {UniversalInput} from "@/ui-lib/inputs";
import {ComponentPropsWithoutRef, FC, useState} from "react";
interface IEmailInput extends ComponentPropsWithoutRef<'input'> {
    id: string
    label: string
}
const EmailInput: FC<IEmailInput> = ({id = 'email', label=''}) => {
    const [mailValue, setMailValue] = useState('');
    const mailHandler = (event: any) => {
        setMailValue(event.target.value)
    }
    return(
        <UniversalInput
            id={id}
            type='email'
            placeholder={'E-mail'}
            isRequired={false}
            value={mailValue}
            onChange={mailHandler}
            label={label}
        ></UniversalInput>
    )
}
export default EmailInput