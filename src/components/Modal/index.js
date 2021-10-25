import * as React from 'react'
import axios from 'axios'

import * as modalCSS from './modal.module.scss'
import Currencies from "./Currencies";
import Rate from "./Rate";

const Modal = ({closeModal}) => {
  const [currency, setCurrency] = React.useState({top: '', bottom: ''})
  const [count, setCount] = React.useState({top: '', bottom: '', rate: ''})

  React.useEffect(() => {
    const getData = async () => {
      if (currency.top && currency.bottom && count.top) {
        try {
          const response = await axios.get(`https://v6.exchangerate-api.com/v6/c2904969898e9838cc06acd6/pair/${currency.top}/${currency.bottom}/${count.top}`)

          const {conversion_rate, conversion_result} = response.data
          setCount({...count, bottom: conversion_result, rate: conversion_rate})
        } catch (e) {
          console.log(e)
        }
      }
    }

    getData()

    const intervalId = setInterval(() => {
      getData()
    }, 15000)

    return () => clearInterval(intervalId)
  }, [currency, count.top])

  const changeCurrencies = () => {
    const lastTop = currency.top
    setCurrency({top: currency.bottom, bottom: lastTop})
  }

  return (
    <div className={modalCSS.wrapper}>
      <div className={modalCSS.window}>
        <Currencies currency={currency} setCurrency={setCurrency} type="top" />
        <div className={modalCSS.inputField}>
          <input type="text" value={count.top} onInput={(e) => setCount({top: e.target.value, bottom: count.bottom})}/>
          <Rate currency={currency} count={count} />
        </div>
        <div className={modalCSS.arrows} onClick={changeCurrencies}>ARROWS</div>
        <Currencies currency={currency} setCurrency={setCurrency} type="bottom" />
        <div className={modalCSS.inputField}>
          <input type="text" value={count.bottom} readOnly/>
          <Rate currency={currency} count={count} />
        </div>
        <button className={modalCSS.btn} onClick={closeModal}>Закрыть</button>
      </div>
    </div>
  )
}

export default Modal
