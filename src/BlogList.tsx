import { Link } from 'react-router-dom';
import { Blog } from './interfaces';
type Props ={
  blogs:Blog[]
}
const BlogList:React.FC<Props> = (props:Props) => {
  const {blogs}=props
  return (
    <div className="blog-list">
      {blogs.map((blog:Blog) => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;