const { generateMeta, generateImage } = require('./controllers/openaiController')
const express = require('express');

const app = express()

app.listen(4000, () => console.log('Server running on port 4000'))

app.use(express.json())
app.use(express.static('public'))

app.post('/generate/meta', generateMeta)
app.post('/generate/image', generateImage)