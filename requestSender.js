const http = require('http');

http.get('http://localhost:3000/api', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    try {
      const student = JSON.parse(data);
      console.log('Name:', student.name);
      console.log('ID:', student.id);
    } catch (err) {
      console.error('Error parsing response:', err.message);
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err.message);
});
