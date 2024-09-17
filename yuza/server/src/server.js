const app = require('./app');
const PORT = process.env.PORT || 3001;


console.log("test...........");

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
});

// 에러 처리
server.on('error', (error) => {
    console.error('Server error:', error);
});

module.exports = server;