async function routes(app, options){

	var collection = app.mongo.db.collection('Foods_Main')
	var orderDest = app.mongo.db.collection('Orders')
app.get('/os-api', async(req, res) => {
	return { hello: 'world' }
});

app.get('/os-api/menu', async(req, res) => {
	var menuCollection = await collection.find().toArray();
	console.log(menuCollection);
	res.send(menuCollection);
});

app.get('/os-api/thank-you', async(req, res) => {
	return { hello: 'Thank You!' }
});

app.get('/os-api/my-orders', async(req, res) => {
	return { status: 'pending...'}
});

const mySchema = {
	type: 'object',
}

const schema = {
	body: mySchema,
}

app.post('/os-api/order', async(req, res) => {
	var obj = await req.body;
	console.log(obj);
	const result = await orderDest.insertOne(obj);
	return obj;
});

}

module.exports = routes