import Axios from 'axios';
import { useEffect, useState } from 'react';
import axios from 'services/axiosInstance';

const useGet = (url: string, params = {}, delay = process.env.REACT_APP_DELAY_GET_DATA) => {
  const [data, setData] = useState<any>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    let timeout: any = null;

    setShowLoading(true);

    axios
      .get(url, {
        url,
        params,
        cancelToken: source.token,
      })
      .then((response: any) => {
        timeout = setTimeout(() => {
          setShowLoading(false);
          setData(response.data);
        }, delay);
      })
      .catch((error: any) => {
        if (!Axios.isCancel(error)) {
          setShowLoading(false);
        }
      });

    return () => {
      source.cancel();
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, showLoading };
};

export default useGet;
