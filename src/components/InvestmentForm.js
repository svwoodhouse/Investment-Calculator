import { useState } from "react"

const InvestmentForm = (props) => {
    const [currentSavings, setCurrentSavings] = useState(0)
    const [yearlyContributions, setYearlyContributions] = useState(0)
    const [expectedReturn, setExpectedReturn] = useState(0)
    const [years, setYears] = useState(0)

    const submitHandler = (event) => {
      event.preventDefault();
      const userInput = {
        'current-savings': +currentSavings,
        'yearly-contribution': +yearlyContributions,
        "expected-return": +expectedReturn,
        "duration": +years,
      }
      props.handleSubmit(userInput)
      onResetHandler(event)
    }

    const onChangeHandler = (event) => {
      event.preventDefault()
      if(event.target.id === "current-savings"){
        setCurrentSavings(event.target.value)
      } else if (event.target.id === "yearly-contribution"){
        setYearlyContributions(event.target.value) 
      } else if (event.target.id === "expected-return"){
        setExpectedReturn(event.target.value)
      } else {
        setYears(event.target.value)
      }
    }

    const onResetHandler = (event) => {
      event.preventDefault()
      setCurrentSavings(0)
      setExpectedReturn(0)
      setYearlyContributions(0)
      setYears(0)
    }

    return (
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} onChange={onChangeHandler} min={1}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlyContributions} onChange={onChangeHandler} min={1}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedReturn} onChange={onChangeHandler} min={1}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={years} onChange={onChangeHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}
export default InvestmentForm