import * as React from 'react'
import * as modalCSS from "../modal.module.scss";

const Currencies = ({currency, setCurrency, type}) => {
  return (
    <div className={modalCSS.currencies}>
      <div className={`${modalCSS.currencies__item} ${currency[type] === 'RUB' && modalCSS.active}`} onClick={() => setCurrency({...currency, [type]: 'RUB'})}>RUB</div>
      <div className={`${modalCSS.currencies__item} ${currency[type] === 'USD' && modalCSS.active}`} onClick={() => setCurrency({...currency, [type]: 'USD'})}>USD</div>
      <div className={`${modalCSS.currencies__item} ${currency[type] === 'EUR' && modalCSS.active}`} onClick={() => setCurrency({...currency, [type]: 'EUR'})}>EUR</div>
    </div>
  )
}

export default Currencies
