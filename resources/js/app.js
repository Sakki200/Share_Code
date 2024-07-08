
document.addEventListener('DOMContentLoaded', () => {
    const codeTextarea = document.getElementById('code');
    const languageDetected = document.getElementById('languageDetected');
    const nightModeToggle = document.getElementById('nightModeToggle');
    const copyUrlButton = document.getElementById('copyUrlButton');

    // Restore textarea content on page load
    restoreTextareaContent();

    // Function to detect language and save content
    function detectLanguageAndSave() {
        const code = codeTextarea.value;

        // Detect language using highlight.js
        const result = hljs.highlightAuto(code, hljs.listLanguages());

        // Display detected language
        languageDetected.textContent = `Langage détecté: ${result.language || 'Unknown'}`;

        // Save textarea content
        localStorage.setItem('URL', code);
        localStorage.setItem('currentCode', code);
    }

    // Save textarea content and detect language as user types
    let debounceTimer;
    codeTextarea.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(detectLanguageAndSave, 300);
    });

    function restoreTextareaContent() {
        const savedCode = localStorage.getItem('currentCode') || localStorage.getItem('URL');
        if (savedCode) {
            codeTextarea.value = savedCode;
            detectLanguageAndSave(); // Detect language for restored content
        }
    }

    // Simplified Night mode toggle functionality
    function toggleNightMode() {
        document.body.classList.toggle('night-mode');
    }

    nightModeToggle.addEventListener('click', toggleNightMode);

          function copyPageUrl() {
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('URL copié');
        });
      }

      copyUrlButton.addEventListener('click', copyPageUrl);
});