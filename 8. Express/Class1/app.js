const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const port = 3000;

app.engine('html', mustacheExpress(__dirname + '/views/partials'));

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/student/:id', (req, res) => {
    res.render('student',{ 
        title: 'Student',
        id: req.params.id
    })
});

app.listen(port, () => {
    console.log(`Example server listening on http://localhost:${port}`);
});