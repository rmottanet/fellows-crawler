/**
 * Function to load the access token stored in the environment.
 * Returns the access token.
 */
function loadAccessToken() {
  
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  
  if (!token) {
    throw new Error('Token de acesso não encontrado. Certifique-se de configurar o token de acesso antes de usar este script.');
  }
  
  return token;
}
