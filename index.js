const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

const categories = require('./data/catagories.json');
const News = require('./data/News.json');


app.get('/', (req, res) => {
    res.send('news api running');
})
app.get('/news-categories', (req, res) => {
    res.send(categories);
})
app.get('/news-news', (req, res) => {
    res.send(News);
})

app.listen(port, () => {
    console.log("News are coming from ", port);
})