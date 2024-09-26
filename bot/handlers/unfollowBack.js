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
async function unfollowBack() {
  
  try {
    
    const allFollowers = await getFollowers();
    const allFollowing = await getFollowing();

    if (allFollowing.length === 0) {
      Logger.log('No following found.');
      return;
    }

    const unfollowCandidates = allFollowing.filter(user => !allFollowers.includes(user) && !excludedUsers.includes(user));

    await Promise.all(unfollowCandidates.map(unfollowUser));
    
  } catch (error) {
    Logger.log('Error unfollowing back users:' + error);
    throw error;
  }
  
}
