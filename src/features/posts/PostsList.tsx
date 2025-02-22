import { Link } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks'
import { selectAllPosts } from './postsSlice'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        <PostAuthor userId={post.user} />
      </h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}