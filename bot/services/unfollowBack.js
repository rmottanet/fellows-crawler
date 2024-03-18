/**
 * Function to unfollow users who do not follow back.
 * 
 * Retrieves the list of users following me.
 * Retrieves the list of users I am following.
 * Checks if the list of users I am following is empty.
 * Filters out users who follow me and are on the exclusion list.
 * Unfollows each user in the filtered list.
 * Logs any errors that occur during the process.
 * Throws the error to be handled at a higher level.
 */
function unfollowBack() {
	
  try {

    var followers = getFollowers();

    var following = getFollowing();

    if (following.length === 0) {
      Logger.log('No following found.');
      return;
    }

    var unfollowCandidates = following.filter(function(user) {
      return !followers.includes(user) && !excludedUsers.includes(user);
    });

    for (var user of unfollowCandidates) {
      unfollowUser(user);
      Logger.log('Unfollowed user: ' + user);
    }
    
  } catch (error) {
	  
    Logger.log('Error unfollowing back users: ' + error);
    throw error; 
    
  }
}
