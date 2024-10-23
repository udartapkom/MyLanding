import { UniversalInput } from "@/ui-lib/inputs";
import {ComponentPropsWithoutRef, FC, useEffect, useState} from "react";
import { PatternFormat } from 'react-number-format';

interface ITelphoneInput extends ComponentPropsWithoutRef<'input'> {
    id: string
    isRequired: boolean
    label?: string
}
const TelphoneInput: FC<ITelphoneInput> = ({id='telephone', isRequired = true, label = ''}) => {
    const [telValue, setTelValue] = useState('+7(');

    const telHandler = (event: any) => {
        setTelValue(event.target.value)
    }
    useEffect(() => {
      console.log(telValue);
    }, [telValue]);
    return (
        <PatternFormat
            format="+7 (###) ###-##-##"
            allowEmptyFormatting mask="_"
            customInput={UniversalInput}
            onChange={telHandler}
            label={label}
            id={id}
        />
/*
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
                </UniversalInput>*/
    );
}
export default TelphoneInput