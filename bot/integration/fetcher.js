/**
 * Generic function to make requests to the GitHub API.
 * Receives a specific GitHub API URL as a parameter.
 * Returns the response data from the request.
 */
function fetcherData(url) {
	
  try {

    var accessToken = loadAccessToken();
    
    var allData = [];

    var page = 1;

    while (true) {

      var pageUrl = url + "?page=" + page;

      var response = UrlFetchApp.fetch(pageUrl, {
        headers: {
          "Authorization": "Bearer " + accessToken
        }
      });

      if (response.getResponseCode() !== 200) {
        throw new Error('Erro ao fazer solicitação à API do GitHub. Código de resposta: ' + response.getResponseCode());
      }

      var data = JSON.parse(response.getContentText());

      if (data.length === 0) {
        break;
      }

      allData = allData.concat(data);

      page++;
    }

    return allData;
    
  } catch (error) {

    Logger.log('Erro ao fazer solicitação à API do GitHub:', error);
    return null; 
    
  }
}
