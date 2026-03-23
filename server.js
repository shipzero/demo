const { createServer } = require('node:http')
const { readFileSync } = require('node:fs')
const { join } = require('node:path')

const html = readFileSync(join(__dirname, 'index.html'))

const server = createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end(html)
}).listen(3000, () => console.log('Listening on :3000'))

process.on('SIGTERM', () => server.close(() => process.exit(0)))