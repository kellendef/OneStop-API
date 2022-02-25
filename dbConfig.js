const plugin = require('fastify-plugin')


async function connector(app, options){
	app.register(require('fastify-mongodb'), {
		url: 'mongodb://127.0.0.1:27017/Product_Info'
	})
}

	
module.exports = plugin(connector)

