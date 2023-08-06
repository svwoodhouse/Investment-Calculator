const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})
const InvestmentRows = ({props}) => {
const data = props
    return (
            <tr>
                <td>{data.year}</td>
                <td>{formatter.format(data.savingsEndOfYear)}</td>
                <td>{formatter.format(data.yearlyInterest)}</td>
                <td>{formatter.format(data.savingsEndOfYear - data.initialInvestment - data.yearlyContribution * data.year)}</td>
                <td>{formatter.format(data.initialInvestment + (data.yearlyContribution * data.year))}</td>
            </tr>
        )
    }
export default InvestmentRows