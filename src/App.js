import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import getRates from "./getRates"
import "./styles/App.css"
import CurrencyForm from "./components/CurrencyForm/CurrencyForm"
import { useState } from "react"
import fx from './money.js'

function App() {
  const [userChoise, setUserChoice] = useState({
    valueFrom: 0,
    selectFrom: 'RUB',
    selectTo: 'USD'
  })

  const rates = JSON.parse(localStorage.getItem("rates"))
  const ratesMin = JSON.parse(localStorage.getItem("rates-min"))
  
  if (rates && ratesMin) {
    const oldDate = new Date(rates.Date)
    const now = new Date()
    if (now - oldDate >= 86400000) {
      getRates()
    }
  } else {
    getRates()
  }

  const valute = []
  for (let i in rates.Valute) {
    valute.push(rates.Valute[i])
  }
  valute.push({
    ID: "customID",
    NumCode: "customNumCode",
    CharCode: "RUB",
    Nominal: 1,
    Name: "Российских рублей",
    Value: 1,
    Previous: 1
  })

  fx.base = "RUB"
  fx.rates = {...ratesMin.rates, RUB: 1}
  
  function getInputTo() {
    let num
    try {
      num = fx(userChoise.valueFrom)
      .from(userChoise.selectFrom)
      .to(userChoise.selectTo);
    } catch (error) {
      console.log(error + "function error")
    }
    return num
  }
  let num = getInputTo()

 

  return (
    <div className="app">
      <Header />
      
      <CurrencyForm  
        currencies={ valute }
        userChoice={ userChoise }
        setUserChoice={ setUserChoice }
        inputTo={ num }
      />
      
      <Footer />
    </div>
  );
}

export default App;
