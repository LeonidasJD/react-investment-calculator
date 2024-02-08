

export default function UserInput({onHandleChangeInput,isValueInput}){

    return(
        
        <section id="user-input">
            <div className="input-group">
             <p>
                <label>Initial investment</label>
                <input name="fieldInvestment" 
                type="number" 
                value={isValueInput.fieldInvestment} 
                required 
                placeholder="0" 
                onChange={(event)=>onHandleChangeInput(event,"fieldInvestment")}/>
            </p>

            <p>
                <label>Annual investment</label>
                <input name="fieldAnnual"
                 type="number" 
                 value={isValueInput.fieldAnnual}
                 required 
                 placeholder="0" 
                 onChange={(event)=>onHandleChangeInput(event,"fieldAnnual")}/>
            </p>
            
            </div>

            <div  className="input-group">
                <p>
                <label>Expected return</label>
                <input name="fieldExpected"
                 type="number" 
                 value={isValueInput.fieldExpected} 
                 required 
                 placeholder="0" 
                 onChange={(event)=>onHandleChangeInput(event,"fieldExpected")}/>
            </p>
           
           <p>
                <label>Duration</label>
                <input name="fieldDuration" 
                 type="number" 
                 value={isValueInput.fieldDuration} 
                 required 
                 placeholder="0" 
                 onChange={(event)=>onHandleChangeInput(event,"fieldDuration")}/>
           </p>
           
            </div>
            
            
        </section>

       
    );
}