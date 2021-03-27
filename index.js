document.querySelector('.button').addEventListener('click', function (){
    const cal = document.getElementById('input').value * 10.5
    const rem = (cal - Math.floor(cal)) // gets all the decimal values after the age
    const month = Math.floor(rem * 12) // 10 parts need to be converted to 12 parts for months
    const nd = (rem * 10) - Math.floor((rem * 10)) // we need to work with the next decimal now
    const days = Math.floor(nd * 30) // 10 parts need to be converted to 30 parts for days
    document.getElementById('result').innerHTML = `Your age in dog years is ${Math.floor(cal)} years ${month} months and ${days} days!`
})
