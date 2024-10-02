interface IProps{
    msg: string
}

function ErrorMsg({msg, ...rest}:IProps){
    return(
       msg ? <span className="text-red-600 block font-semibold text-sm " {...rest}> {msg}</span> :null
    )
}

export default ErrorMsg;