import { useSelector  } from 'react-redux'
import {posts} from './postSlice'
function PostList() {

    const posts = useSelector((state) => state.postsReducer.post)
   console.log(posts);
  return (
    <div>
        <section>
            {
                posts.map(post => {
                    <article>
                        <h3>{post.title}</h3>
                        <p>post.body</p>
                    </article>
                })
            }
        </section>
    </div>
  )
}

export default PostList