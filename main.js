const customer = customers[0]
const output = document.querySelector('.root')

for (let customer of customers) {
// New Div for Customer Cards
    const custCard = document.createElement('div')
    custCard.classList.add('customer-card')
    output.appendChild(custCard)
// Customer Image
    const custImage = document.createElement('img')
    custImage.src = customer.picture.large
    custCard.appendChild(custImage)
// Customer Name
    const custName = document.createElement('h1')
    custName.innerText = customer.name.first + " " + customer.name.last 
    custCard.appendChild(custName)
// Customer Email
    const custEmail = document.createElement('p')
    custEmail.innerText = customer.email
    custCard.appendChild(custEmail)
// Customer Address
    const custAddr = document.createElement('h2')
    custAddr.innerText = customer.location.street.number + " " + customer.location.street.name
    custCard.appendChild(custAddr)
// Customer Town
    const custTown = document.createElement('h2')
    custTown.innerText = customer.location.city + ",  " + nameToAbbr(customer.location.state) + " " + customer.location.postcode
    custCard.appendChild(custTown)
// Customer Date of Birth
    const dateOfBirth = document.createElement ('h2')
    dateOfBirth.innerText = "DOB:" + " " + moment(customer.dob.date).format("MMM D, YYYY")
    custCard.appendChild(dateOfBirth)
// Customer Registration
    const custReg = document.createElement('h2')
    custReg.innerText = "Customer since:" + " " + moment(customer.registered.date).format("MMM D, YYYY")
    custCard.appendChild(custReg)
}

