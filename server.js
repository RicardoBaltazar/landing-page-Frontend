const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function(req, res){
    res.json({
        'api': 'funcionando'
    })
})

app.get('/:id', function(req, res){
    let id = req.params.id
    res.json({
        'id': id  
    })
})

app.post('/', function(req, res){
    res.json(req.body)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
    console.log('API RODANDO NA PORTA ' + PORT)
})
