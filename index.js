const app = require('./server/server');
require('dotenv').config()

console.log('in', process.env.PORT);
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('Listening');
});
