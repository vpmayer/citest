var request = require('supertest');

 
var app = require('../index.js')
  
 describe('GET /', function() {
   it('displays "Hello World!"', function(done) {
     // The line below is the core test of our app.
     request(app)
     	.get('/')
     	.expect('Hello World!')
     	.end(function(err, res){
     		if(err){
     			done(err)
     			// throw done(err);
     		}

     		//console.log(done());
     		done()
     		process.exit()
     	});

   });
 });
  
process.on('unhandledRejection', (e) => {
  console.error('Unhandled Rejection')
  console.error(e.stack)
  process.exit(1)
});