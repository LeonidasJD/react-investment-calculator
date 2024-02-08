import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";


export default function Results ({isValueInput}){
    
    const resultsData=calculateInvestmentResults(isValueInput);
    console.log("results=",resultsData);
    return(

        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                
            </thead>
            <tbody>
                    {resultsData.map((result)=>(
                        <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>{/*formatter.format jeste funkcija koja formatira broj u valutu  */}
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.totalOfInterest)}</td>
                        <td>{formatter.format(result.totalOfInvested)}</td>
                        
                    </tr>
                    ))}
                </tbody>
        </table>
        
    );
    }