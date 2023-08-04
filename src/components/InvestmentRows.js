const InvestmentRows = ({props}) => {
const data = props
    return (
            <tr>
                <td>{data.year}</td>
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.yearlyContribution}</td>
                <td>{data.capital}</td>
            </tr>
        )
    }
export default InvestmentRows