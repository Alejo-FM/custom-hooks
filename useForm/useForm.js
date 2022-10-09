import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({target}) =>{
        const { name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value //Cuidado porque si esribo una prop q no exista la creo
        })
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
