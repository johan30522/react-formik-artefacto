import { useField } from 'formik'

/**
 * Interface que define las propiedades del componente
 * */
interface MySelectProps {
    label: string;
    name: string;
    [x: string]: any;
}
/**
 * Componente que renderiza un select
 * @param props
 * @returns
 * */

export const MySelect = ({ label, ...props }: MySelectProps) => {

    //Utiliza el hook useField de formik para manejar el estado del select
    const [field, meta] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>

            <select
                {...field} // onchange, onBlur, value
                {...props} // name, id, placeholder
            />

            {
                meta.touched && meta.error && (
                    <span
                        className="error"
                    >{meta.error}</span>
                )

            }
        </>
    )
}
