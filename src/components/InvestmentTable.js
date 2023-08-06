import InvestmentRows from "./InvestmentRows"

const InvestmentTable = (props) => {
    return (
        <table className="result">
        <thead>
          <tr>
            <th title="Year">Year</th>
            <th title="((Expected Interest/100) * Current Savings) + Yearly Contribution">Total Savings</th>
            <th title="((Expected Interest/100) * Current Savings)">Interest (Year)</th>
            <th title="End of Year Savings - Initial Investment - Yearly Contribution *Year">Total Interest</th>
            <th title="Initial Investment + Yearly Contribution * Year">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {props.userData.map((data) =>  
         <InvestmentRows props={data} key={data.year}/>                )
      }
        </tbody>
      </table>
    )
}
export default InvestmentTable