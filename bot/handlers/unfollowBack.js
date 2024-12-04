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
    
    // Retrieving and processing followers
    const followersData = await GithubRestApp.getFollowers(GH_TOKEN);

    if (followersData === null || followersData.length === 0) {
      Logger.log('No followers found.');
      return;
    }
    
    const allFollowers = followersData.map(follower => follower.login);

    // Retrieving and processing following
    const followingData = await GithubRestApp.getFollowing(GH_TOKEN);
 
    if (followingData === null || followingData.length === 0) {
        Logger.log('No following found.');
        return;
    }
    
    const followingUsers = followingData.filter(user => user.type === 'User');
    
    const allFollowing = followingUsers.map(user => user.login);

    // Unfollow processed data
    const unfollowCandidates = allFollowing.filter(user => !allFollowers.includes(user) && !excludedUsers.includes(user));

    await Promise.all(unfollowCandidates.map(user => GithubRestApp.unfollowUser(user, GH_TOKEN)));
    
  } catch (error) {
    Logger.log('Error unfollowing back users:' + error);
  }

}
