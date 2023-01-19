import axios from "axios"

interface CredentialTypes{
    type: string
}
const loginURL = 'http://localhost:4000/login'

const login = async(credentials: Promise<CredentialTypes>)  => {
    const {data} = await axios.post(loginURL, credentials)    
    return data
}

export default login