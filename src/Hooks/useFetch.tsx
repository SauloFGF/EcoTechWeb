import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


  const request = React.useCallback(async (url: string, options: any) => {
    let response;
    let json;

    try {
      setLoading(true)
      setError(null)
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
        setError(null)
        setLoading(true);
    } catch (err) {
        json = null;
    } finally {
      setData(json);
      setLoading(false);
      return {response, json}
    }
  }, [])

  return {
    data,
    loading,
    error,
    request
  }
}

export default useFetch;
