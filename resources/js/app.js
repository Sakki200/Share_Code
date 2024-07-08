import sendLSCode from './localToBDD.js'
document.addEventListener('DOMContentLoaded', () => {
  //Récupération de l'URL
  function getCurrentURL() {
    return window.location.href
  }
  const urlID = getCurrentURL().slice(-3)
  const savedCode = localStorage.getItem(urlID)

  let codeUser = ''
  const codeTextarea = document.getElementById('code')

  //Fonction recup de l'URL
  function restoreTextareaContent() {
    if (savedCode) {
      codeTextarea.value = savedCode
    }
  }
  restoreTextareaContent()

  codeTextarea.addEventListener('input', () => {
    codeUser = codeTextarea.value
    localStorage.setItem(urlID, codeUser)
  })

  sendLSCode(urlID, savedCode)
})
