import { useField, ErrorMessage } from 'formik';


interface MySelectProps {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: MySelectProps) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' })




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
