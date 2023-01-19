import { useEffect, useState } from 'react'
import { AppRoutes } from './routes/AppRoutes'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('')
  
  // useEffect(() => {
  //   fetch("http://localhost:3000/users")
  //     .then(
  //       response => response.json())
  //       .then(
  //       res => {
  //         // setData(res)
  //         console.log(res);
  //       }
  //     )
  // },[])
  return <>
    <div className="App">
      <div>
        <p>Hello FrontEnd</p>
        {(data)}
      </div>  
    </div>
    <AppRoutes/>
    </>
}

export default App
