import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  }

  return ( 
    <div className="blog-details">
      { loading && <div><h2>Loading...</h2></div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button
            className="btn btn-danger"
            onClick={handleDelete}>
            Delete blog
          </button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;