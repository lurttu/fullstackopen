const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'testing is easy',
    author: 'Arttu Matilainen',
    url: 'www.google.com',
    likes: 6
  },
  {
    title: "no it's not",
    author: 'Arttu Matia',
    url: 'stackoverflow.com',
    likes: 7
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb
}
