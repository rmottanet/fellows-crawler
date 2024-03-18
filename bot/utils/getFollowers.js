/**
 * Function to retrieve the followers of the authenticated user.
 * 
 * Returns a list of usernames of the followers.
 * 
 * @returns {Array|null} - List of usernames of the followers, or null if an error occurs.
 */
 function getFollowers() {
	
  try {

    var followersData = fetcherData(url_flwers);

    if (!followersData) {
      Logger.log('Error retrieving followers.');
      return null;
    }

    var followers = followersData.map(function(follower) {
      return follower.login;
    });

    return followers;
    
  } catch (error) {
		
    Logger.log('Error retrieving followers:', error);
    return null;
    
  }
}
