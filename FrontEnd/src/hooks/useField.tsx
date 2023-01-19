import { ChangeEvent, useState } from "react"

interface FieldType{
    type: string
}

const useField = ( {type}: FieldType ) => {
    
    const [value, setValue] = useState('')
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
    }
    const optionChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        setValue(evt.target.value)
    }
    const clearInput = () => {
        setValue('')
    }

    return {
        type,
        value,
        handleChange,
        optionChange,
        clearInput
    }
}

export { useField }