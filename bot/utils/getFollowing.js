/**
 * Function to retrieve all users that the authenticated user is following.
 * 
 * Returns a list of usernames of the users being followed.
 * 
 * @returns {Array|null} - List of usernames of the users being followed, or null if an error occurs.
 */
function getFollowing() {
	
  try {

    var followingData = fetcherData(url_flwing);

    if (!followingData) {
      Logger.log('Error retrieving following.');
      return null;
    }

    var followingUsers = followingData.filter(function(user) {
      return user.type === 'User';
    });

    var following = followingUsers.map(function(user) {
      return user.login;
    });

    return following;
    
  } catch (error) {
		
    Logger.log('Error retrieving following:', error);
    return null;
    
  }
}
