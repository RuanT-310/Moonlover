import { useController, useForm } from "react-hook-form"

export const TextArea = (props) => {
    const {
        formState: { errors } 
    } = useForm()

    const { field, fieldState } = useController(props)

    return <>
        <textarea
            {...field}
            placeholder={props.name}
            className={props.className}
            rows={props.rows}
        />
        {fieldState.error?.type == "required" && <p>Campo Obrigatorio</p>}
        {fieldState.error?.type == "min" && <p>Valor Minimo exigido</p>}
        {fieldState.error?.type == "max" && <p>Valor Minimo ultrapassado</p>}
    </>
 
} 