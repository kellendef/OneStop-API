async function routes(app, options){
	var orderSource = app.mongo.db.collection('Orders')
app.get('/os-api', async(req, res) => {
	return { hello: 'world' }
});

app.get('/os-api/menu', async(req, res) => {
	var orderCollection = await orderSource.find().toArray();
	console.log(orderCollection);
	res.send(orderCollection);
});

}

module.exports = routes