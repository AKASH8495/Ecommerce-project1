import { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);


    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

    }
    catch(error){
        console.log('Error!!');
        setPosts([]);
    }

    setLoading(false);
  }


  // Function call
  useEffect(() => {
    fetchProductData();
  },[]);



  return (
    <div className="flex justify-center items-center lg:mx-auto sm:mx-auto">
      {loading ? (
        <h1 className="text-2xl font-bold mt-[250px]">Loading...</h1>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-col-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:max-w-6xl sm:max-w-[500px] lg:p-2 lg:mx-auto sm:mx-auto space-x-5 space-y-10">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="mt-[250px] font-bold text-gray-700 text-2xl">No Post Found!!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
