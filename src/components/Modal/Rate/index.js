import * as React from 'react'

const Rate = ({currency, count}) => {
  return <span>{currency.top && `1 ${currency.top} =`} {count.rate} {currency.bottom}</span>
}

export default Rate
