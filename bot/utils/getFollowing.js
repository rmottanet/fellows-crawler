/**
 * Function to retrieve all users that the authenticated user is following.
 *
 * Returns a list of usernames of the users being followed, or null if an error occurs.
 *
 * @returns {Promise<Array|null>} - A promise that resolves to a list of usernames
 *                                 of the users being followed, or null if an error occurs.
 */
async function getFollowing() {
  
  try {
    
    const followingData = await fetchGitHubData(url_flwing);

    if (!followingData) {
      Logger.log('Error retrieving following.');
      return null;
    }

    const followingUsers = followingData.filter(user => user.type === 'User');
    const following = followingUsers.map(user => user.login);

    return following;
    
  } catch (error) {
    Logger.log('Error retrieving following:', error);
    return null;
  }
  
}
