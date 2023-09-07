async function * inOrderRequests (urls) {
  for (const url of urls) {
    const response = await fetch(url)
    const text = await response.text()
    yield text
  }
}
async function pageText (urls) {
  for await (const responseText of inOrderRequests(urls)) {
    console.log(responseText)
  }
}
pageText(['https://otus.ru', 'https://github.com'])
