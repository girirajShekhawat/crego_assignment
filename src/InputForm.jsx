
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./stylesheet/InputForm.css"

function InputForm(props) {
    const intialState={key:"",
    output:{
        value:"",
        operator:"",
        score:""
    }}
    const[formData, setFormData]=useState(intialState)

const[connector,setConnector]=useState("AND")   
const {setData}=props

 

function handleChangeConnector(e){
    setConnector(e.target.value)
}

function handleSubmit(e){
e.preventDefault();
// check for any field empty 
if(!formData.key||!formData.output.operator){
    window.alert("set the key rule and operator field properly")
    return
}
if(!connector){
    window.alert("select the connector field")
}
setData((predata)=>({
    ...predata,
    rules:[...predata.rules,
          formData],
    connector:connector
}))
setFormData(intialState)
console.log(formData)
console.log(connector)
}

    return (
  
<div className='body'>
  <Card className="bg-light text-black     w-100">
    <Card.Body className="w-100 cardBody ">
      <Form onSubmit={handleSubmit} className=" w-100   ">
      <Row>
      <Form.Group as={Col}  className=" col-2 mr-1">
      <label htmlFor='Rule' className="form-label">Rule</label>
          <select name="key" id="key" onChange={(e) => setFormData((preData) => ({ ...preData, key: e.target.value, output: { ...preData.output } }))} value={formData.key} className="form-select">
            <option value="age">Age</option>
            <option value="CreditScore">Credit Score</option>
            <option value="AccountBalance">Account Balance</option>
          </select>
     </Form.Group>

        <Form.Group as={Col} className=" col-2 mr-1">
          <label htmlFor='operator' className="form-label">Operator</label>
          <select name="operator" id="operator" onChange={(e) => setFormData((preData) => ({ ...preData, output: { ...preData.output, operator: e.target.value } }))} value={formData.output.operator} className="form-select m-0">
          <option value=">">{">"}</option>
              <option value="<">{"<"}</option>
              <option value=">=">{">="}</option>
               <option value="<=">{"<="}</option>              
               <option value="=">{"="}</option>
          </select>
         </Form.Group>
          
         <Form.Group as={Col} className="col-2 mr-2">
        <label htmlFor='connector' className="form-label">Connector</label>
          <select name="connector" id='connector' onChange={handleChangeConnector} value={connector.value} className="form-select">
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
          </Form.Group>
          <Form.Group as={Col} className="col-2 mr-2  ">
          <label htmlFor="score" className="form-label">Score</label>
          <input id="score" type="number" placeholder="Score" required name="score" onChange={(e) => setFormData((preData) => ({ ...preData, output: { ...preData.output, score: e.target.value } }))} value={formData.output.score} className="form-control" />
        </Form.Group>

        <Form.Group as={Col} className="col-2 mr-2  ">
          <label htmlFor="value" className="form-label">Value</label>
          <input id="value" type="number" placeholder="Value" required name="value" onChange={(e) => setFormData((preData) => ({ ...preData, output: { ...preData.output, value: e.target.value } }))} value={formData.output.value} className="form-control" />
        </Form.Group>

        <Button type="submit" className="btn btn-primary col-1 mt-4 ms-5">Submit</Button>
        </Row>
         
         
        
      </Form>
    </Card.Body>
  </Card>
</div>




    )
}

export default InputForm;



