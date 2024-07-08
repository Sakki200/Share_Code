function getCurrentURL() {
  return window.location.href
}
const urlID = getCurrentURL().slice(-3)
const savedCode = localStorage.getItem(urlID)

export default async function sendLSCode(url, savedCode) {
  const URLCode = { url: url, code: savedCode }
  try {
    const response = await fetch('../tmp/db.sqlite3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ URLCode }),
    })

    const data = await response.json()
    console.log('Success:', data)
  } catch (error) {
    console.error('Error:', error)
  }
}
