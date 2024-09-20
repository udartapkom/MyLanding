import {UniversalInput} from "@/ui-lib/inputs";
import {ComponentPropsWithoutRef, FC, useEffect, useState} from "react";
interface ITelphoneInput extends ComponentPropsWithoutRef<'input'> {
    id: string
    isRequired: boolean
    label: string
}
const TelphoneInput: FC<ITelphoneInput> = ({id='telephone', isRequired = true, label = ''}) => {
    const [telValue, setTelValue] = useState('+7(');
    const telHandler = (event: any) => {
        setTelValue(event.target.value)
    }
    useEffect(() => {
        console.log(telValue)
    }, [telValue]);
    return(
        <UniversalInput
            id={id}
            pattern={"\\+7\\([0-9]{3}\\)[0-9]{3}-[0-9]{2}-[0-9]{2}"}
            placeholder={'+7(___)___-__-__'}
            isRequired={isRequired}
            type={'tel'}
            value={telValue}
            onChange={telHandler}
            label={label}
        >
        </UniversalInput>
    )
}
export default TelphoneInput