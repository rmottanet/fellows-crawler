/**
 * Retrieves a list of usernames of the authenticated user's followers asynchronously.
 *
 * @returns {Promise<Array|null>} - A promise that resolves to a list of usernames of the followers, or null if an error occurs.
 */
async function getFollowers() {
  
  try {
    
    const followersData = await fetchGitHubData(url_flwers);

    if (!followersData) {
      Logger.log('Error retrieving followers.');
      return null;
    }

    const followers = followersData.map(follower => follower.login);
    
    return followers;
    
  } catch (error) {
    Logger.log('Error retrieving followers:', error);
    return null;
  }
  
}
