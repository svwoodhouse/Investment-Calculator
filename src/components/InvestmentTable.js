import InvestmentRows from "./InvestmentRows"

const InvestmentTable = ({props}) => {
const userData = props
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {userData.length > 0 && userData.map((data) => { 
        return <InvestmentRows props={data} key={data.year}/>                })
      }
        </tbody>
      </table>
    )
}
export default InvestmentTable