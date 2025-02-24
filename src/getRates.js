const getRates = async () => {
  let response1 = await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
  if (response1.ok) {
    let json = await response1.json()
    json = JSON.stringify(json)
    localStorage.setItem("rates", json)
  }

  let response2 = await fetch("https://www.cbr-xml-daily.ru/latest.js")
  if (response1.ok) {
    let json = await response2.json()
    json = JSON.stringify(json)
    localStorage.setItem("rates-min", json)
  }
}

export default getRates