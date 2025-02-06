import { useController, useForm } from "react-hook-form"

export const Input = (props) => {
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm()

    const { field, fieldState } = useController(props)

    return <>
        <input
            {...field}
            placeholder={props.name}
            className={props.className}
        />
        {fieldState.error?.type == "required" && <p>Campo Obrigatorio</p>}
        {fieldState.error?.type == "min" && <p>Valor Minimo exigido</p>}
        {fieldState.error?.type == "max" && <p>Valor Minimo ultrapassado</p>}
    </>
 
} 