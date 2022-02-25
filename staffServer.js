const app = require('fastify')({logger: true});
app.register(require('./dbConfig.js'));
app.register(require('./staffRoutes'));

//routes are registered
//database is connected and registered
//therefore, the api is ready to start

const start = async() => {
	try {
		const PORT = process.env.port || 3009;
		await app.listen(PORT) 
	}
	catch(err){
		app.log.error(err)
		process.exit(1)
	}
}

start();