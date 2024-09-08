function getGreeting() {
	const now = new Date();
	const hours = now.getHours();
	let greeting;

	if (hours >= 5 && hours < 12) {
		greeting = "Selamat Pagi!";
	} else if (hours >= 12 && hours < 17) {
		greeting = "Selamat Siang!";
	} else if (hours >= 17 && hours < 21) {
		greeting = "Selamat Sore!";
	} else {
		greeting = "Selamat Malam!";
	}

	return greeting;
}

document.addEventListener("DOMContentLoaded", () => {
	const greetingElement = document.getElementById("greeting");
	greetingElement.textContent = getGreeting();
});
