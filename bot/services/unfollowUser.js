/**
 * Function to unfollow a user.
 * 
 * Attempts to unfollow a user by sending a DELETE request to the corresponding API endpoint.
 * 
 * @param {string} username - The username of the user to unfollow.
 * @throws {Error} If an error occurs during the process.
 */
async function unfollowUser(username) {
  
  try {
    
    const apiUrl = url_flwing + "/" + username;
    
    const response = await UrlFetchApp.fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + loadAccessToken()
      }
    });

    if (response.getResponseCode() !== 204) {
      throw new Error('Error unfollowing user: ' + username + '. Response code: ' + response.getResponseCode());
    }
    
  } catch (error) {
    Logger.log('Error unfollowing user ' + username + ': ' + error);
    throw error;
  }
}
