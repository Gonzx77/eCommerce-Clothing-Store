import { headers } from "../components/env.js";

export const getAllProducts = async(text) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}

export const getAllProductsByCategory = async(text, category) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&category_id=${category}&product_condition=ALL`;
    console.log(url);
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}

export const getProduct = async(asin) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${asin}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}

export const getProductInfo = async(asin) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=US`;
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}

export const getAllCategorys = async() => {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=US';
    const options = {
        method: 'GET',
        headers
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}