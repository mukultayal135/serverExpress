const express = require('express');
const app = express();
const port = 3000;
const taskRouter= require('./src/routes/taskRoutes');
app.use(express.json());

app.use('/tasks',taskRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});