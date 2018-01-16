module.exports = {
    HOST: 'http://localhost',
    PORT: 3000,
    MONGODBURL: process.env.MONGO_URI || 'mongodb://localhost/VBEX'
    //andere:'mongodb://username:password@localhost/usersDB?options...');
};