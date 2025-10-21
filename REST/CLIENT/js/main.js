console.log('sunt aici!');

const API_BASE_URL = 'https:localhost:5000'
const productsContainer = document.getElementById('products')

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
        displayData(response)
    }
    catch(error){
        console.log(error)
    }

}

getItems()