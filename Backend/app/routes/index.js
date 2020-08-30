const express = require('express')
const app = express.Router()
const Post = require('./post/post.routes')
const User = require('./user/user.routes')
const Comment = require('./comment/comment.routes')
const Tag = require('./tag/tag.routes')

app.use('/post', Post)
app.use('/user',User)
app.use('/comment',Comment)
app.use('/tag',Tag)

module.exports = app