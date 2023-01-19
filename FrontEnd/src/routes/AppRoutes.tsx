
import Login from "../pages/login/loginPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";


const AppRoutes = () => {
  
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    </>
}

export { AppRoutes }