// const { executeDbAdminCommand } = require('mongodb/lib/operations/db_ops');
const db = require('../config/connection');
const { User, Post } = require('../models');


const userData = require('./userData.json')
const postData = require('./postData.json')

db.once('open', async () => {
    await User.deleteMany({});
    await Post.deleteMany({})

    const users = await User.insertMany(userData);
    const posts = await Post.insertMany(postData)

    console.log('all done!');
    process.exit(0);
});