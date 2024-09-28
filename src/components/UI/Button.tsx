import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit"
}

function Button({children, className, width = "w-full", ...rest }:IProps){
    return(
        <button className={`${className} ${width} my-4 px-10 text-white uppercase cursor-pointer p-2 rounded-md`} {...rest}>{children}</button>
    )
}

export default Button;