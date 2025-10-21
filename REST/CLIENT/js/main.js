console.log('sunt aici!');

const API_BASE_URL = 'http://localhost:5000'
const productsContainer = document.getElementById('products')
const addProductButton = document.getElementById('add-Product')
const productNameInput = document.getElementById('name')
const productPriceInput = document.getElementById('price')


function displayData(data){
    const dataElement = document.createElement('pre')
    dataElement.textContent = JSON.stringify(data)

    productsContainer.appendChild(dataElement)
}

async function getItems(){
    console.log('fetching all items....')

    try{
        const response = await fetch(`${API_BASE_URL}/items`)
        console.log(response)
        await displayData(response.json())
    }
    catch(error){
        console.log(error)
    }

}

function addProduct(){
    let newProduct = {}
    newProduct.name = productNameInput.value
    newProduct.price = productPriceInput.value
    console.log('I want to add this product: ', newProduct)
}

addProductButton.addEventListener('click', addProduct)
getItems()