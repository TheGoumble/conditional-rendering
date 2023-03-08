import { useState } from "react"
import Loading from "./components/Loading"
import Loaded from "./components/Loaded"
import "./App.css"

function App() {
  const [isloaded, setIsLoaded] = useState(false)
  const [objectExample, setObjectExample] = useState({ name: "name of object" })
  const [username, setUsername] = useState("")
  const numbers = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className="App">
      <h1>Username is: {username || "Guest"}</h1>

      <h1>{
        isloaded &&
        <>
          {numbers.map((num)=>{
            return num + " & "
          })}
          <Loaded />
          <h2>I have {numbers.length} numbers</h2>
        </>}
      </h1>

      <button
        onClick={() => {
          console.log("button clicked")
          setIsLoaded(!isloaded)
        }}
      >
        Change Loaded
      </button>

      <h1>{isloaded ? "Yes" : "No"}</h1>

      {isloaded ? <Loaded /> : <Loading />}

      <h1>isloaded = {String(isloaded)}</h1>
    </div>
  )
}

export default App
