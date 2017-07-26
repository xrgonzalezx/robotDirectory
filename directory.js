const express = require('express');
const mustacheExpress = require('mustache-express');
const robotMembers =require('./robotdata.json');
const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/individual_Robot', function(request, response){
  response.render('individual_Robot', { robotdata: robotMembers.users });
});

app.get('/robot_data', function(request, response){
  response.render('robot_data', { robotdata: robotMembers.users });
});


app.get('/robot_data/:name', function(request, response){
  let person = robotMembers.find(function(member) {
    return member.name.toLowerCase() === request.params.name;
  })
  response.render('robot_data', person);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
