/**
 * Function to follow back followers.
 * 
 * Retrieves the list of followers.
 * Checks if the list of followers is empty.
 * Iterates over each follower.
 * Checks if the follower is already being followed.
 * Follows the follower if not already followed.
 * Logs any errors that occur during the process.
 * Throws the error to be handled at a higher level if necessary.
 */

function followBack() {

  try {

    var followers = getFollowers();

    if (followers.length === 0) {
      Logger.log('No followers found.');
      return;
    }

    for (var follower of followers) {
		
      try {

        if (!isFollowed(follower)) {
          followUser(follower);
          Logger.log('Followed user: ' + follower);
        }
        
      } catch (error) {
		  
        Logger.log('Error following user: ' + follower + " " + error);
        continue;
        
      }
    }
    
  } catch (error) {
	  
    Logger.log('Error following back followers: ' + error);
    throw error; 

  }
}
