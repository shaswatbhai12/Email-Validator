console.log("This is my script")

let result = {
"tag": "",
"free": false,
"role": false,
"user": "shaswat",
"email": "shaswat@starliftandcontroller.xyz",
"score": 0.8,
"state": "deliverable",
"domain": "starliftandcontroller.xyz",
"reason": "low_deliverability",
"mx_found": true,
"catch_all": null,
"disposable": false,
"smtp_check": true,
"did_you_mean": "",
"format_valid": true
}

submitBtn.addEventListener("click",  async (e) => {
    e.preventDefault()
    console.log("clicked")
    resultCont.innerHTML = `<img width="123px" src="img/loading.svg" alt="">`
    let key = "ema_live_5L0nS2bP2RYPinvYshQX2CcyetPqq7pVsh4nL63M"
    let email = document.getElementById("email").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)){
        if (result[key] !== "" && result[key]!== " ") { 
            str = str + `<div>${key} : ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})