import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color: string
}


function CircleColor({color, ...rest}:IProps){
    return(
        <span style={{background:color}} className={`block h-5 w-5 rounded-full cursor-pointer`} {...rest} />
    )
}

export default CircleColor;