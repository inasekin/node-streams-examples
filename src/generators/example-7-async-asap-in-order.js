async function * asapInOrderRequests (urls) {
  const requests = urls.map((url) => fetch(url))
  for await (const response of requests) {
    const text = await response.text()
    yield text
  }
}
async function pageText (urls) {
  for await (const responseText of asapInOrderRequests(urls)) {
    console.log(responseText)
  }
}

pageText(['https://otus.ru', 'https://github.com'])
