/**
 * Function to follow a user.
 * 
 * Attempts to follow a user only if they are not already being followed.
 * 
 * @param {string} username - The username of the user to follow.
 * @throws {Error} If an error occurs during the process.
 */
function followUser(username) {
	
  try {

    if (!isFollowed(username)) {
      var apiUrl = url_flwing + "/" + username;
      var response = UrlFetchApp.fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Authorization": "Bearer " + loadAccessToken()
        }
      });

      if (response.getResponseCode() !== 204) {
        throw new Error('Error following user: ' + username + '. Response code: ' + response.getResponseCode());
      }

      
    } else {
      Logger.log('User', username, 'is already followed.');
    }
    
  } catch (error) {
	  
    Logger.log('Error following user:', username, error);
    throw error; 
    
  }
}

