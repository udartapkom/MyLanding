import {UniversalInput} from "@/ui-lib/inputs";
import {ComponentPropsWithoutRef, FC} from "react";
interface ITelphoneInput extends ComponentPropsWithoutRef<'input'> {
    id: string
    isRequired: boolean
}
const TelphoneInput: FC<ITelphoneInput> = ({id='telephone', isRequired = true}) => {
    return(
        <UniversalInput
            id={id}
            pattern={"\\+7\\([0-9]{3}\\)[0-9]{3}-[0-9]{2}-[0-9]{2}"}
            placeholder={'+7(___)___-__-__'}
            value={'+7(___)___-__-__'}
            isRequired={isRequired}
            type={'tel'}
        >
        </UniversalInput>
    )
}
export default TelphoneInput