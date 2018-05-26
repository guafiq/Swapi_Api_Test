let button = document.querySelector('#button')
let name = document.querySelector('#name')
let gender = document.querySelector('#gender')
let hair_color = document.querySelector('#hair_color')
let skin_color = document.querySelector('#skin_color')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')


function getdata()
{
	let randomNumber = Math.floor((Math.random() * 88) + 1)

	let ApiLink = 'https://swapi.co/api/people/' + randomNumber


	axios.get(ApiLink).then(function(response)
	{
		updateInfo(response.data)
	})
}

function updateInfo(data)
{
	name.innerText = data.name
	gender.innerText = data.gender
	hair_color.innerText = data.hair_color
	skin_color.innerText = data.skin_color
	height.innerText = data.height
	mass.innerText = data.mass
	
}

button.addEventListener('click', getdata)