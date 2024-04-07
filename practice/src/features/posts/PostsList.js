import { selectAllPosts } from './postsSlice'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  // omit component contents
}