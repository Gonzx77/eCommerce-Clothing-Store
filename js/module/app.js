import { headers } from "../components/env.js";

export const getAllProducts = async({search: text} = {search: "Phone"}) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}

export const getAllCategorys = async({search: text} = {search: "Phone"}) => {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=US';
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}