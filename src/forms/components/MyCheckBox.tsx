import { useField, ErrorMessage } from 'formik';


interface MySelectProps {
    label: string;
    name: string;
    [x: string]: any;
}
/**
 * Componente que renderiza un checkbox 
 * @param props 
 * @returns 
 */

export const MyCheckbox = ({ label, ...props }: MySelectProps) => {

    //Utiliza el hook useField de formik para manejar el estado del checkbox
    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label>


                <input
                    type="checkbox"
                    className="text-input"
                    {...field} // onchange, onBlur, value
                    {...props} // name, id, placeholder
                />
                {label}

            </label>

            <ErrorMessage
                name={props.name}
                component="span"
                className="custom-span-error-class"
            />
        </>
    )
}
