
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var index = require('./controllers/pageController')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', index.home);
app.get('/home', index.home);
app.get('/about', index.about);
app.get('/aboutDirection', function (req, res) {
	res.redirect('/about')
})
app.get('/contact', index.contact);
app.get('/contactDirection', function (req, res) {
	res.redirect('/contact')
})
app.get('/projects', index.projects);
app.get('/projectsDirection', function (req, res) {
	res.redirect('projects')
})
app.get('/homeDirection', function (req, res) {
	res.redirect('home')
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
