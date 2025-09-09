// Load redirect map from JSON
fetch('dinamic.json')
  .then(response => response.json())
  .then(redirectMap => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'web';
    const targetURL = redirectMap[id] || redirectMap['web'];
    redirectTo(targetURL);
  })
  .catch(error => {
    console.error('Failed to load redirect map:', error);
    // Fallback to default
    window.location.href = "https://cyberofficialwebstore.blogspot.com/";
  });

// Redirection logic
function redirectTo(url) {
  try {
    const newWindow = window.open(url, '_system');
    if (!newWindow) {
      window.location.href = url;
    }
  } catch (e) {
    window.location.href = url;
  }

  // Update fallback link in case redirect fails
  const fallbackLink = document.getElementById("fallbackLink");
  if (fallbackLink) fallbackLink.href = url;
}
