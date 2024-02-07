import { useState } from "react";

export default function UserInput(){

let [inputValue,setInputValue] = useState({
    fieldInvestment:0,
    fieldAnnual:0,
    fieldExpected:0,
    fieldDuration:0,
});


function onHandleChange(event,name){
    const {value} = event.target;
    setInputValue(prevValue =>{
        return{
            ...prevValue,
            [name]:value
        }
    });
    console.log(value);
    
    
}



    return(
        <section id="user-input">
            <div className="input-group">
             <p>
                <label>Initial investment</label>
                <input name="fieldInvestment" 
                type="number" 
                value={inputValue.fieldInvestment} 
                required 
                placeholder="0" 
                onChange={(event)=>onHandleChange(event,"fieldInvestment")}/>
            </p>

            <p>
                <label>Annual investment</label>
                <input name="fieldAnnual"
                 type="number" 
                 value={inputValue.fieldAnnual}
                 required 
                 placeholder="0" 
                 onChange={(event)=>onHandleChange(event,"fieldAnnual")}/>
            </p>
            
            </div>

            <div  className="input-group">
                <p>
                <label>Expected return</label>
                <input name="fieldExpected"
                 type="number" 
                 value={inputValue.fieldExpected} 
                 required 
                 placeholder="0" 
                 onChange={(event)=>onHandleChange(event,"fieldExpected")}/>
            </p>
           
           <p>
                <label>Duration</label>
                <input name="fieldDuration" 
                 type="number" 
                 value={inputValue.fieldDuration} 
                 required 
                 placeholder="0" 
                 onChange={(event)=>onHandleChange(event,"fieldDuration")}/>
           </p>
           
            </div>
            
            
        </section>
    );
}