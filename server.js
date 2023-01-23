const express = require('express')
const morgan = require('morgan')
const uuid = require('uuid')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

const proxyConfig = createProxyMiddleware({
  target: 'https://63911d1e0bf398c73a9ad937.mockapi.io/todos',
  changeOrigin: true,
  pathRewrite: { '^/api/todo/': '' },
  proxyReqOptDecorator(opts) {
    opts.headers['Subscription-Key'] = uuid()
    return opts
  }
})

const baseDir = `${__dirname}/build/`

const port = 3000

app.use(cors())

app.use(morgan('combined'))

app.use('/api/todo', proxyConfig)

app.use(express.static(`${baseDir}`))

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }))

app.listen(port, () =>
  console.log(`Servidor subiu com sucesso em http://localhost:${port}`)
)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send({ error: 'An error occurred' })
})

app.use((req, res, next) => {
  if (res.statusCode === 404) {
    res.status(404).send({ error: 'Not found' })
  } else {
    next()
  }
})
