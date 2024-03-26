const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const solarSystem = document.querySelector(".solarSystem");

function createPlanet(name, backgroundColor) {
    const planetElement = document.createElement("div");
    planetElement.className = "planet";
    planetElement.textContent = name;
    planetElement.style.backgroundColor = backgroundColor;
    solarSystem.appendChild(planetElement);
}

planets.forEach((planet, index) => {
    const backgroundColor = index % 2 === 0 ? "orange" : "blue"; // Example alternate background colors
    createPlanet(planet, backgroundColor);

    for (let i = 0; i < index + 1; i++) {
        const moonElement = document.createElement("div");
        moonElement.className = "moon";
        moonElement.textContent = "Moon " + (i + 1);
        solarSystem.appendChild(moonElement);
    }
});
