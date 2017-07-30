const express = require('express');
const mustacheExpress = require('mustache-express');
const robotMembers =require('./robotdata.json');
const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', function(request, response){
  response.render('robot_data', { robotdata: robotMembers.users });
});

app.get('/individual_Robot', function(request, response){
  response.render('individual_Robot', { robotdata: robotMembers.users });
});

app.get('/:username', function(request, response){
  let person = robotMembers.users.find(function(member) {
    return member.username.toLowerCase() === request.params.username;
  });
  response.render('individual_Robot', { robotdata: person });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
