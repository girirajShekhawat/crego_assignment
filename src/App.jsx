import { useState } from "react"
import InputForm from "./InputForm"
import View from "./View"
import "./stylesheet/App.css"
 
function App() {
const[data, setData]=useState({
  rules:[],
  connector:""
})

function handleDelete(index){
  const itemaAtIndex=data.rules.at(index)
  const newArray=data.rules.filter((item)=>(
    item!==itemaAtIndex
  ))
  setData({
    rules:[...newArray]
  })
}

 

  return (
     <div className=" mainBody">
<div className="Appbody">
    <InputForm setData={setData}/>
    <View data={data} onDelete={handleDelete}/>
      </div>
     </div>
       
     
  )
}

export default App
