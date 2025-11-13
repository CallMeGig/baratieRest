export default function menuLoad() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';
    const menuDiv = document.createElement('div');
    const menuContentDiv = document.createElement('div');
    
    // object to hold all the pages information
    const page = {
        appetizerH: "Appetizers",
        appetizerItems: [
            ["A Pirate's Hospitality Fried Rice", 55, "A classic seafood fried rice packed with stir-fried shrimp, squid, and diced vegetables. Inspired by Sanji's compassion, it's a dish guaranteed to fill a pirate's belly."],
            ["The Sea King's Bite", 65, "Pan-seared sea king (tuna) slices served with a spicy pepper jelly, evoking the powerful monsters of the Grand Line."],
            ["Red-Leg Zeff's Fisherman's Chowder", 55, " A rich and creamy chowder with a variety of fresh East Blue fish and shellfish, a tribute to the Baratie's gruff owner."],
            ["Mihawk's Dracule Wings", 55, "Spicy grilled chicken wings glazed with a fiery chilli sauce."],
            ["Arlong Park's Shark's Bite", 45, "A simple yet delicious dish featuring tender, seared shark meat (or a substitute), served with a tangy lemon-butter sauce."],
        ],
        mainCourseH: "Main course",
        mainCourseItems: [
            ["The All Blue Seafood Paella", 105, "The Baratie's signature dish, celebrating Sanji's lifelong dream. This paella features a mix of exotic and East Blue seafood. It's a grand dish, perfect for sharing among the crew."],
            ["Luffy's Meat-Lover's Feast", 130, "A massive, bone-in shoulder roast of beef, served with a hearty pirate's banquet sauce and a side of warm lentil salad."],
            ["Don Krieg's Last Meal", 110, "Grilled fillet of bluefin tuna with a zesty ginger sauce, inspired by the meal Sanji served to the defeated pirate fleet."],
            ["Zoro's Spicy Noodles", 95, "A fiery seafood pasta dish with a spicy chilli sauce, topped with your choice of shrimp or calamari."],
            ["The Cook's Legacy", 125, "A hearty dish of chuck beef roast with a pirate's banquet sauce, served with warm lentil salad, commemorating the defeat of Arlong."],
            ["Nami's Navigational Roast", 145, "A succulent roast with a side of citrus-infused vegetables, inspired by Nami's navigational skills."],
        ],
        dessertH: "Desserts",
        dessertItems: [
            ["Nami's Mandarin Orange Jelly", 60, "A light, citrusy, and refreshing jelly, perfect for a sunny day on the deck."],
            ["A Gentleman's Panna Cotta", 55, "A beautiful and elegant dessert made with a creamy panna cotta and fresh fruit macédoine, shaped like Sanji's iconic heart-shaped eyes."],
            ["Devil Fruit-Style Apple Tart", 45, "A playful dessert featuring an apple custard cream tart shaped to resemble a Devil Fruit. Disclaimer: Does not confer special powers."],
            ["Going Merry's Last Voyage", 55, "A rich chocolate lava cake with a scoop of vanilla ice cream, representing the ship's final journey."],
        ],
        drinksH: "Drinks",
        drinksItems: [
            ["East Blue Iced Tea", 35, "A refreshing blend of tropical fruit juices and iced tea."],
            ["Grand Line Cooler", 30, "A sparkling soda with a splash of blueberry and lime, representing the vast, endless sea."],
            ["The Barrel of Sake", 55, "A small barrel of high-quality sake, perfect for toasting to a new adventure."],
            ["Nami's 'Navigational' Juice", 40, "A tall glass of fresh-squeezed orange juice."],
        ],       
    }
    
    const menuSec1 = document.createElement('div'); // Appetizers
    const menuSec2 = document.createElement('div'); // Main Course
    const menuSec3 = document.createElement('div'); // Desserts
    const menuSec4 = document.createElement('div'); // Drinks
    
    const menu1H = document.createElement('div');
    const menu2H = document.createElement('div');
    const menu3H = document.createElement('div');
    const menu4H = document.createElement('div');

    menu1H.textContent = page.appetizerH;
    menu2H.textContent = page.mainCourseH;
    menu3H.textContent = page.dessertH;
    menu4H.textContent = page.drinksH;

    menuDiv.classList.add("menuDiv");
    menuContentDiv.classList.add("menuContentDiv");
    menuSec1.classList.add('menuSec', 'menuContent');
    menu1H.classList.add('menuH', 'menuContent');
    menuSec2.classList.add('menuSec', 'menuContent');
    menu2H.classList.add('menuH', 'menuContent');
    menuSec3.classList.add('menuSec', 'menuContent');
    menu3H.classList.add('menuH', 'menuContent');
    menuSec4.classList.add('menuSec', 'menuContent');
    menu4H.classList.add('menuH', 'menuContent');
    
    
    for (let item in page.appetizerItems) {
        addMenuItem(menuSec1, page.appetizerItems[item]);
    };

    for (let iteml in page.mainCourseItems) {
        addMenuItem(menuSec2, page.mainCourseItems[iteml]);
    };

    for (let iteml in page.dessertItems) {
        addMenuItem(menuSec3, page.dessertItems[iteml]);
    };

    for (let iteml in page.drinksItems) {
        addMenuItem(menuSec4, page.drinksItems[iteml]);
    };

    menuContentDiv.appendChild(menu1H);
    menuContentDiv.append(menuSec1);
    menuContentDiv.appendChild(menu2H);
    menuContentDiv.append(menuSec2);
    menuContentDiv.appendChild(menu3H);
    menuContentDiv.append(menuSec3);
    menuContentDiv.appendChild(menu4H);
    menuContentDiv.append(menuSec4);
    menuDiv.append(menuContentDiv);
    contentDiv.append(menuDiv);


    function addMenuItem(parentElement, content){
        const itemDiv = document.createElement('div');
        const name = document.createElement('p');
        const price = document.createElement('p');
        const contents = document.createElement('p');

        itemDiv.classList.add('menuItem');
        name.classList.add('itemName');
        price.classList.add('itemPrice');
        contents.classList.add('itemContent');

        name.textContent = content[0];
        price.textContent = content[1];
        contents.textContent = content[2];

        itemDiv.appendChild(name);
        itemDiv.appendChild(price);
        itemDiv.appendChild(contents);
        parentElement.appendChild(itemDiv)
    }

    
}