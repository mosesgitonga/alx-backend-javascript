import { group } from "console";

function groceriesList() {
    const groceries = [
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5]
    ]

    const groceriesMap = new Map(groceries)
    return groceriesMap;
}

export default groceriesList;