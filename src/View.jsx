import { Button } from 'react-bootstrap';
import  "./stylesheet/view.css"

function View(props){

    const {data, onDelete}=props
   
 
    


  return (
    <div   className='result  '>
    
     
        {
            data.rules.map((item,index)=>(
                <div className='  resultCard  ' key={index}> 
           
      <div className='resultBox'>
      <p className='h6'>Rule</p>
      <p className='value'> {item.key}</p> 
       
        </div>
        
        <div  className='resultBox'>
      <p className='h6'>Operator</p>
      <p className='value'> {item.output.operator} </p>
          </div>
      
        <div  className='resultBox'>
      <p className='h6'>Score</p>
      <p className='value'>{item.output.score}  </p> 
         </div>
       
       <div  className='resultBox'>
      <p className='h6'>value</p>
     <p className='value'>{item.output.value}  </p> 
     </div>
      <Button  className='button' onClick={()=>onDelete(index)}>Delete</Button>
      </div>
            ))
            
        }
       
    </div>
  );
}

  

export default View