document.addEventListener('DOMContentLoaded', () => {
  //Récupération de l'URL
  function getCurrentURL() {
    return window.location.href
  }
  const urlID = getCurrentURL().slice(-3)

  let codeUser = ''
  const codeTextarea = document.getElementById('code')

  //Fonction recup de l'URL
  function restoreTextareaContent() {
    const savedCode = localStorage.getItem(urlID)
    if (savedCode) {
      codeTextarea.value = savedCode
    }
  }
  restoreTextareaContent()

  codeTextarea.addEventListener('input', () => {
    codeUser = codeTextarea.value
    localStorage.setItem(urlID, codeUser)
    URLCodeExport()
  })

  function URLCodeExport() {
    console.log({ url: urlID, code: codeUser })
    const object = { url: urlID, code: codeUser }
    return object
  }
})
