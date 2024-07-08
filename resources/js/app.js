
document.addEventListener('DOMContentLoaded', () => {
  const codeTextarea = document.getElementById('code');

  // Restore textarea content on page load
  restoreTextareaContent();

  // Save textarea content as user types
  codeTextarea.addEventListener('input', () => {
    localStorage.setItem('URL', codeTextarea.value);
  });

  function restoreTextareaContent() {
    const savedCode = localStorage.getItem('currentCode');
    if (savedCode) {
      codeTextarea.value = savedCode;
    }
  }
});
