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
async function followBack() {
  
  try {
    
    const allFollowers = await getFollowers();

    if (allFollowers === null || allFollowers.length === 0) {
      Logger.log('No followers found.');
      return;
    }

    // Create an array of promises to check if each follower is already followed
    const isFollowedPromises = allFollowers.map(async (follower) => {
      return await isFollowed(follower);
    });

    // Wait for the result of all checks
    const isFollowedResults = await Promise.all(isFollowedPromises);

    // Iterate over followers and corresponding results
    for (let i = 0; i < allFollowers.length; i++) {
      
      const follower = allFollowers[i];
      
      if (!isFollowedResults[i]) {
        await followUser(follower);
        Logger.log('Followed user: ' + follower);
      }
      
    }
    
  } catch (error) {    
    Logger.log('Error following back followers: ' + error);
    throw error;
  }
  
}
