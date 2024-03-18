/**
 * Function to check if a specific user is being followed.
 * 
 * @param {string} username - The username of the user to check.
 * @returns {boolean} - True if the user is followed, false otherwise.
 */
function isFollowed(username) {
	
  try {

    var apiUrl = url_flwing + "/" + username;

    var response = UrlFetchApp.fetch(apiUrl, {
      headers: {
        "Authorization": "Bearer " + loadAccessToken()
      },
      muteHttpExceptions: true 
    });

    return response.getResponseCode() === 204;
    
  } catch (error) {
	  
    Logger.log('Error checking if user is followed:', username, error);
    return false; 
    
  }
}
