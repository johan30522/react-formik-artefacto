import { useField, ErrorMessage } from 'formik';

/**
 * Interface que define las propiedades del componente
 * */

interface MyTextInputProps {
    label: string;
    name: string;
    type: 'text' | 'email' | 'password';
    placeholder: string;
    [x: string]: any;
}
/**
 * Componente que renderiza un input
 * @param props
 * @returns
 * */
export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {

    const [field] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>

            <input
                className="form-control text-input"
                {...field} // onchange, onBlur, value
                {...props} // name, id, placeholder
            />

            <ErrorMessage
                name={props.name}
                component="span"
                className="custom-span-error-class"
            />
        </>
    )
}
