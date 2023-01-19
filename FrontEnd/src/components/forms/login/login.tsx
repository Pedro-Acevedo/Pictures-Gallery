import {useState, ChangeEvent, FormEvent} from 'react'
import { useField } from '../../../hooks/useField'
import loginService from '../../../services/login'
import { RenderLogin } from './render-login'
const Login = () => {
    
    
    const userName = useField({type: 'text'})
    const password = useField({type: 'password'})

    const sendLogin = async(event: FormEvent) => {
        event.preventDefault()

        try{
            
            const data = await loginService({
                userName,
                password
            })
            console.log(data);
            userName.clearInput()
            password.clearInput()
        } catch (err) {
            console.log(err)
        }
    }
    return<>
        <RenderLogin 
            userName = {userName}
            password = {password}
            sendForm = {sendLogin}
        />

    </>
}

export default Login