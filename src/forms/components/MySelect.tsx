import {useField} from 'formik'


interface MySelectProps {
    label: string;
    name: string;
    [x:string]: any;
}

export const MySelect = ({label,...props}:MySelectProps) => {

    const [field,meta] = useField(props)




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
