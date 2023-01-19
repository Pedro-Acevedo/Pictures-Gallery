import { ChangeEvent, ChangeEventHandler, FormEventHandler } from "react"

interface LoginType{
    userName: {
        value: string,
        handleChange: ChangeEventHandler
    },
    password: {
        value: string,
        handleChange: ChangeEventHandler
    },
    sendForm: FormEventHandler<HTMLFormElement>
    
}

const RenderLogin = ({userName, password, sendForm}: LoginType) => {
    
    return<>
        <form onSubmit={sendForm}>
            <input  
                value = { userName.value} 
                onChange = { userName.handleChange } 
                name = 'userName' 
            />
            <input 
                value = { password.value}
                onChange = { password.handleChange }
            />
            <button>Send </button>
        </form>
    </>
}

export { RenderLogin }