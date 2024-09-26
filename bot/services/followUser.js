/**
 * Follows a specified user on GitHub if they are not already being followed.
 *
 * @param {string} username - The username of the user to follow.
 * @throws {Error} If an error occurs during the process.
 */
async function followUser(username) {
  
  try {
    
    if (!await isFollowed(username)) {
      
      const apiUrl = url_flwing + "/" + username;
      
      const response = await UrlFetchApp.fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Authorization": "Bearer " + loadAccessToken()
        }
      });

      if (response.getResponseCode() !== 204) {
        throw new Error('Error following user: ' + username + '. Response code: ' + response.getResponseCode());
      }
      
    } else {
      Logger.log('User ' + username + ' is already followed.');
    }
    
  } catch (error) {
    Logger.log('Error following user ' + username + ': ' + error);
    throw error;
  }
  
}
