/**
 * Function to load the access token stored in the environment.
 * Returns the access token.
 */
function loadAccessToken() {
  
  const token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  
  if (!token) {
    throw new Error('Access token not found. -Make sure you configure the access token before using this script.');
  }
  
  return token;
}
