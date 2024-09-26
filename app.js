const adviceEl = document.querySelector(".advice");
const numberEl = document.querySelector(".number");
const btnEl = document.querySelector("button");
const endpoint = "https://api.adviceslip.com/advice";

function handleDisplay(data) {
	adviceEl.textContent = data?.slip?.advice;
	numberEl.textContent = data?.slip?.id;
}

async function getData() {
	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Response Error: ${response.status}`);
		}

		const data = await response.json();
		handleDisplay(data);
	} catch (error) {
		console.log(error);
	}
}

getData();

btnEl.addEventListener("click", getData);
