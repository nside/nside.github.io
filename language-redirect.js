// Get the user's browser language
function getBrowserLanguage() {
  return (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();
}

// Redirect based on browser language
function redirectToLanguage() {
  // Get current page path
  const currentPath = window.location.pathname;
  
  // Don't redirect if already on a language-specific page
  if (currentPath.includes('index.fr.html')) {
    return;
  }
  
  // If we're on the root index.html or / path, check language and redirect if needed
  if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('nside.github.io/')) {
    const lang = getBrowserLanguage();
    
    // Redirect to French version if browser language is French
    if (lang === 'fr') {
      window.location.href = 'index.fr.html';
    }
  }
}

// Run the redirect function when the page loads
document.addEventListener('DOMContentLoaded', redirectToLanguage); 