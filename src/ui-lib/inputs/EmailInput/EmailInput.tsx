import {UniversalInput} from "@/ui-lib/inputs";
import {ComponentPropsWithoutRef, FC} from "react";
interface IEmailInput extends ComponentPropsWithoutRef<'input'> {
    id: string
}
const EmailInput: FC<IEmailInput> = ({id = 'email'}) => {
    return(
        <UniversalInput
            id={id}
            type={'email'}
            placeholder={'E-mail'}
            isRequired={false}
        ></UniversalInput>
    )
}
export default EmailInput