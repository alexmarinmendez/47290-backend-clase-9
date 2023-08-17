import express from 'express'
import handlebars from 'express-handlebars'

const app = express()

//setear handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    //TODO: se obtiene el dato (nombre) del user
    res.render('home', {
        name: 'Emiliano',
        lastname: 'Grange'
    })
})

app.listen(8080, () => console.log('Server Up!'))