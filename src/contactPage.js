import snailImage from "./transponderSnail.jpeg";

export default function loadContactPage() {

    const pageContent = {
        locationText: "The Baratie is permanently dock in the Sambas region of the East Blue",
        cTA: "Get to us by snail.",
        phoneNum: '123-456-7891',
        email: 'info@thebaratie.op',
        location: 'Sambas region, East Blue',
    }

    const contentBox = document.querySelector("#content");
    contentBox.innerHTML = '';

    // add divs for page structure

    const outerContainer = document.createElement('div');
    outerContainer.classList.add("outerContact");
    // temp
    const ctaBox = document.createElement('section'); 
    const blueBox = document.createElement('div'); 
    const greenBox = document.createElement('div'); 

    ctaBox.classList.add('red');
    blueBox.classList.add('blue');
    greenBox.classList.add('green');

    const ctaImage = document.createElement('img');
    ctaImage.classList.add('imgSnail');
    ctaImage.src = snailImage;

    const callToActionHeader = document.createElement('h1')
    callToActionHeader.classList.add("cTA");
    callToActionHeader.textContent = pageContent.cTA;

    const phoneP = document.createElement('p');
    const emailP = document.createElement('p');
    const locationP = document.createElement('p');
    
    phoneP.textContent = pageContent.phoneNum; 
    emailP.textContent = pageContent.email;
    locationP.textContent = pageContent.location;

    contentBox.append(outerContainer);
    outerContainer.append(ctaBox);
    ctaBox.append(ctaImage);

    const ctaContainer = document.createElement('section');
    ctaContainer.classList.add('ctaContainer');
    ctaContainer.append(callToActionHeader);
    ctaContainer.append(phoneP);
    ctaContainer.append(emailP);
    ctaContainer.append(locationP);
    ctaBox.append(ctaContainer);

    outerContainer.append(blueBox);
    outerContainer.append(greenBox);
    
}