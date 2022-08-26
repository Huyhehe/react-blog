import BlogList from "../components/BlogList";
import { useGet } from "../Utils/useAxios";
import { useDispatch } from "react-redux";
import { update } from "../redux/blogSlice";

const Home = () => {
  const url = `${process.env.REACT_APP_API_URL}/blogs`;
  const { data, loading, error } = useGet(url);
  const dispatch = useDispatch();
  dispatch(update(data));
  return (
    <div className="home">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <BlogList blogList={data}></BlogList>}
    </div>
  );
};

export default Home;
