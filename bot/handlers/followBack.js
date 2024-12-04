/**
 * Follows back followers who aren't already followed.
 *
 * Retrieves the list of followers, extracts usernames, and checks if any are not already followed.
 * Follows any unfollowed user and logs the success or encountered error.
 * Throws errors for handling at a higher level.
 *
 * @throws {Error} If an error occurs during the process.
 */
async function followBack() {
  
  try {
    
    const followersData = await GithubRestApp.getFollowers(GH_TOKEN);
    
    if (followersData === null || followersData.length === 0) {
      Logger.log('No followers found.');
      return;
    }
    
    const followers = followersData.map(follower => follower.login);

    // Use filter to find usernames of users who aren't followed
    const unfollowedUsers = followers.filter(async (follower) => {
      const isFollowedResult = await GithubRestApp.isFollowedUser(follower, GH_TOKEN);
      return !isFollowedResult.success; // Filter based on success property
    });

    // Wait for all unfollowed user checks to complete before following
    const usersToFollow = await Promise.all(unfollowedUsers);

    // Follow each unfollowed user and log success or error
    for (const user of usersToFollow) {
      try {
        await GithubRestApp.followUser(user, GH_TOKEN);
        Logger.log(`Followed user: ${user}`);
      } catch (error) {
        Logger.log(`Error following user: ${user} ` + error);
      }
    }
    
  } catch (error) {
    Logger.log('Error following back followers: ' + error);
  }
  
}
