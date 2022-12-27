import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Image Processing API');
});

app.listen(port, () => {
  console.log(`server started at localhost: ${port}`);
});

export default app;