import axios from "axios";
import {InfoArticleModel} from "@/types/types";

const getArticlesFromApi = async () => {
    const apiUrl: string = 'https://newsapi.org/v2/everything?q=ocean%20pollution%20AND%20beach%20pollution&sortBy=popularity&language=en&apiKey=fa4baf2e95f1460990af81f2551ffe2d';

    try {
        const response = await axios.get(apiUrl);
        const articles: InfoArticleModel[] = response.data.articles.map((article: any) => ({
            sourceName: article.source.name,
            title: article.title,
            imageUrl: article.urlToImage,
            articleUrl: article.url
        }));
        return articles;
    } catch (error) {
        console.log('Error while fetching articles', error);
        return [];
    }
};

export default getArticlesFromApi;