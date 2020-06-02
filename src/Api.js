import axios from 'axios';


const baseUrl = "https://opentdb.com/api.php"

const getUrl = (endPoint) => {
    return `${baseUrl}?${endPoint}`
}
export const getQuestions = async ({numberOfQuestions, category, difficulty}) => {
    let url = getUrl(`&amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
    let response = await axios.get(url);
    return response.data;
}

export const getCategories = async () => {
    try {
        let response = await axios.get("https://opentdb.com/api_category.php");
        return response.data;
    } catch (error) {
        throw new Error("Unable to fetch categories", error);
    };
}