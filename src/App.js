import Header from './components/Header';
import InvestmentForm from './components/InvestmentForm';
import InvestmentTable from './components/InvestmentTable';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([])
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const userOb = { year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        initialInvestment: userInput['current-savings'],
        yearlyContribution: yearlyContribution}
      setUserData(prevState => [...prevState, userOb])
    }
  };
  return (
    <div>
      <Header/>
      <InvestmentForm handleSubmit={calculateHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
       {userData.length > 0 ? <InvestmentTable userData={userData}/> : <p style={{textAlign: 'center'}}>no data is available</p>}
    </div>
  );
}

export default App;
