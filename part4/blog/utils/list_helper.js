const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.likes,
    0
  )
}

const favouriteBlog = blogs => {
  return blogs.reduce(
    (prev, current) => (prev.likes > current.likes ? prev : current),
    -Infinity
  )
}

const mostBlogs = input => {
  const authors = Object.entries(
    input.reduce((authors, current) => {
      authors[current.author] = authors[current.author] || []
      authors[current.author].blogs = authors[current.author].blogs + 1 || 1
      return authors
    }, {})
  ).map(item => {
    const currentAuthor = {
      author: item[0],
      blogs: item[1].blogs
    }
    return currentAuthor
  })

  return authors.reduce(
    (prev, current) => (prev.blogs > current.blogs ? prev : current),
    -Infinity
  )
}

const mostLikes = input => {
  const authors = Object.entries(
    input.reduce((authors, current) => {
      authors[current.author] = authors[current.author] || []
      authors[current.author].likes =
        authors[current.author].likes + current.likes || current.likes
      return authors
    }, {})
  ).map(item => {
    const currentAuthor = {
      author: item[0],
      likes: item[1].likes
    }
    return currentAuthor
  })

  return favouriteBlog(authors)
}

module.exports = { dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes }
