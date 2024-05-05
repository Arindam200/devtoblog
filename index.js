const axios = require('axios');

/**
 * Retrieves a list of published blog articles from the dev.to API.
 * 
 * @param {string} ApiKey - The API key required to access the dev.to API.
 * @returns {Promise<Array>} - A promise that resolves to an array of blog articles.
 */
async function getBlog(ApiKey){
    try {
        const response = await axios.get(
            "https://dev.to/api/articles/me/published",
            {
              headers: {
                "Content-Type": "application/json",
                "api-key": ApiKey,
              },
            }
          );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Posts a blog article to the dev.to API.
 *
 * @param {Object} article - The article object to be posted.
 * @param {string} ApiKey - The API key required to access the dev.to API.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
 */

async function postBlog(article, ApiKey){
    try {
        const response = await axios.post(
            "https://dev.to/api/articles",
            {
              article,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "api-key": ApiKey,
              },
            }
          );
          return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getBlog, postBlog };