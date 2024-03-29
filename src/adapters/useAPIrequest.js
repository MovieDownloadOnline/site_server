import axios from "axios";
import { useEffect, useState } from "react";

const useAPIrequest = (APIconString) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    makeGETRequest(APIconString, source);

    return () => {
      source.cancel();
    };
  }, [APIconString]);

  const makeGETRequest = async (con, source) => {
    setTimeout(() => {
      source.cancel("Response timed out");
    }, 20000);

    await axios
      .get(con, { cancelToken: source.token }, { timeout: 20000 })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((e) => {
        setError(e);
      });
  };

  return { response, error };
};

export default useAPIrequest;
