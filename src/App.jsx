import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {

  let [inputValue,setInputValue] = useState({
    fieldInvestment:0,
    fieldAnnual:0,
    fieldExpected:0,
    fieldDuration:12,
});

function onHandleChange(event,name){
  const {value} = event.target;
  setInputValue(prevValue =>{
      return{
          ...prevValue,
          [name]: +value//znak plus konvertuje string u broj, jer iako je input odakle dobijamo vrednost tip number javascript to gleda kao string a u funkciji ne mozemo da sabiramo stringove
      }
  });
  console.log(value);
  
  
}

let isInputCorrect = inputValue.fieldDuration > 0; //ova varijabla ce biti true ako je duration minimum 1

  return (
    <>
     <header>
      <Header/>
    </header>
    <main>
      <UserInput onHandleChangeInput={onHandleChange} isValueInput={inputValue}/>
      
      {isInputCorrect ? <Results isValueInput={inputValue} /> : <p className="center">Your duration time must be grater than zero!</p>} {/*tabelu sa rezultatima ispisujemo samo ako je isInputCorrect true ako nije ispisujemo poruku da duration time mora biti veci od 1 */}
    </main> 
    </>
   
    
  )
}

export default App
