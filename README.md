# npm-package-name

A Node.js package for interacting with the dev.to API to retrieve and post blog articles.

## Installation

```bash
npm install npm-package-name
```

## Usage

```javascript
const { getBlog, postBlog } = require('npm-package-name');

// Retrieve a list of published blog articles
const apiKey = 'YOUR_API_KEY';
getBlog(apiKey)
  .then((articles) => {
    console.log(articles);
  })
  .catch((error) => {
    console.error(error);
  });

// Post a blog article

  const article: {
    body_markdown: "###  content for the body markdown. It can contain various details, sections, and formatting like headers, lists, and more.",
    description: "A brief overviecontent and its purpose",
    published: true,
    title: "Publishing Article on DevTo | by Arindam",
    canonical_url: "https://arindam1729.hashnode.dev",
    tags: ["DevTo", "Arindam", "Test","Blog"]
  }

postBlog(article, apiKey)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

## API

### `getBlog(apiKey: string): Promise<Array>`

Retrieves a list of published blog articles from the dev.to API.

- `apiKey` - The API key required to access the dev.to API.

Returns a promise that resolves to an array of blog articles.

### `postBlog(article: Object, apiKey: string): Promise<Object>`

Posts a blog article to the dev.to API.

- `article` - The article object to be posted.
- `apiKey` - The API key required to access the dev.to API.

Returns a promise that resolves to the response data from the API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.