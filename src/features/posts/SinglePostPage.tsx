import { Link, useParams } from 'react-router-dom'
import { selectPostById } from './postsSlice'
import { useAppSelector } from '@/app/hooks'
import { PostAuthor } from './PostAuthor'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useAppSelector(state => selectPostById(state, postId!))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}, <PostAuthor userId={post.user} /></h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}