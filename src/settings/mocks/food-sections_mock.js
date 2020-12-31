import { foodItems } from "./food-items_mock";

const sections = foodItems.reduce((res, item) => {
    if (!res[item.section]) {
        res[item.section] = [];
    }
    
    res[item.section].push(item);
    return res;
}, {});

// Returns an array of key/values of the enumerable properties of an object
export const foodSections = Object.entries(sections);
