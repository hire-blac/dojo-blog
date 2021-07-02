import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author};

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog created');
      history.push('/');
    })
  }

  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={ handleSubmit } action="">
        <label htmlFor="">Blog title:</label>
        <input 
          type="text"
          required
          placeholder="Title of blog..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog body:</label>
        <textarea
          rows="10"
          required
          placeholder="Type in the blog content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <label htmlFor="">Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="daniel">Daniel</option>
          <option value="carl">Carl</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
   );
}
 
export default Create;