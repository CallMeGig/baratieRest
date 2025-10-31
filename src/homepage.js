import baratieBanner from "./baratieBanner.png";
import baratieAtSea from "./baratie-to-sea.jpg";

export default function loadHomePage() {
    const content = {
        welcomeText: "Welcome to the Baratie",
        descText: "The Ocean-Going Restaurant"
    }

    const contentBox = document.querySelector("#content");
    contentBox.innerHTML="";
    const homepageDiv = document.createElement('div');
    homepageDiv.classList.add("homepageDiv");

    // Left side of homepage
    const textBox = document.createElement("div");
    const descEl = document.createElement("p");
    descEl.textContent = content.descText;
    
    // LS logo image
    const img = document.createElement("img");
    img.src = baratieBanner;
    img.classList.add("logoImg");
    textBox.classList.add("LSHomepage")

    const welcomeEl = document.createElement('p');
    welcomeEl.textContent = content.welcomeText;
    
    textBox.appendChild(img);
    // textBox.appendChild(descEl);
    // textBox.appendChild(welcomeEl);

    homepageDiv.appendChild(textBox);

    // Right side of homepage

    const imagebox = document.createElement("div");
    const image = document.createElement("img");
    image.src = baratieAtSea;
    imagebox.classList.add("imagebox");
    // imagebox.appendChild(image);
    homepageDiv.appendChild(imagebox);
    contentBox.append(homepageDiv);
}

loadHomePage(); 