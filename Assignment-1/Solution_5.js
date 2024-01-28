let type = 'standard';

switch (type) {
    case 'standard':
        console.log("Take 3-5days 🕙")
        break;
    case 'express': 
        console.log("Take 1-2days 🕑")
        break;
    case 'overnight':
        console.log("Deliver Next Day 🕚")
        break;

    default:
        console.log("Unknown Package 🤔")
        break;
}