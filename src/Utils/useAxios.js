import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user.user);
  return user;
};

const useGet = (url) => {
  const user = User();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            authorized: `bearer ${user.accessToken}`,
          },
        });
        setData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(e.message);
      }
    }, 0);
  }, [url, user.accessToken]);
  return { data, loading, error };
};

const usePost = (url, payload) => {
  const user = User();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await axios.post(url, payload, {
          headers: {
            authorized: `bearer ${user.accessToken}`,
          },
        });
        setData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(e.message);
      }
    }, 0);
  }, [url, payload, user.accessToken]);
  return { data, loading, error };
};

export { useGet, usePost };
