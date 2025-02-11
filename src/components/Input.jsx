import { useController, useForm } from "react-hook-form"

export const Input = ({ name, control, rules, className, placeholder }) => {
    const { field, fieldState } = useController({ name, control, rules })

    return <>
        <input
            {...field}
            placeholder={placeholder}
            className={className}
        />
        {fieldState.error?.type === "required" && <p>Campo Obrigatório</p>}
        {fieldState.error?.type === "minLength" && <p>Valor mínimo exigido</p>}
        {fieldState.error?.type === "maxLength" && <p>Valor máximo ultrapassado</p>}
    </>
 
} 