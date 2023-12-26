const express = require('express');
const router = require('./routes/routes');
const blogRouter = require('./routes/blogroutes');

const app = express();

app.use('/user', router); 
app.use('/blog', blogRouter);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening server on port: ${PORT}`);
});
