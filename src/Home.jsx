import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const { data, loading, error } = useFetch('http://localhost:8000/blogs');

  return ( 
    <div className="home"> 

      <h1>HomePage</h1> 
      { error && <div>{ error }</div> }
      { loading && <div><h3>Please Wait...</h3></div> }
      { data && <BlogList blogs={data}

        /> 
      }
    </div>
   );
}
 
export default Home;