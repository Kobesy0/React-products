import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{}

function Input({...rest}:IProps){
    return(
        <input className="border-[1px] w-full 
        shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md p-3 mb-2 border-gray-400" {...rest} />
    )
}

export default Input;