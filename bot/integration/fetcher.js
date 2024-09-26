/**
 * Fetches data from a GitHub API endpoint, handling pagination and potential errors.
 *
 * @param {string} url - The URL of the GitHub API endpoint to fetch data from.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of data objects, or rejects with an error if the request fails.
 */
async function fetchGitHubData(url) {

  const accessToken = loadAccessToken();

  const allData = [];
  
  let page = 1;

  while (true) {
    
    const pageUrl = `${url}?page=${page}`;
    
    const response = await UrlFetchApp.fetch(pageUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (response.getResponseCode() !== 200) {
      throw new Error(`API request failed with status ${response.getResponseCode()}: ${response.getContentText()}`);
    }

    const data = JSON.parse(response.getContentText());
    
    if (data.length === 0) {
      break;
    }

    allData.push(...data);
    page++;
    
  }
  
  return allData;
  
}
