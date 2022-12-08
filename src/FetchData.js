import { useState, useEffect } from "react";
//Testing: https://jestjs.io/docs/asynchronous
export function FetchData() {
  // {"type":"hello","greeting":"Salam Alaykum","language":"Somali"}
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  function handleErrors(response) {
    console.log(response);
    if (!response.ok) {
      setError("Some Error");
      throw Error("Some Error");
    }
    return response;
  }

  useEffect(() => {
    fetch("https://www.greetingsapi.com/random")
      .then(handleErrors)
      .then((response) => response.json())
      .then((response) => setData(response));

    // .catch(setError);
  }, []);

  if (data) {
    return (
      <>
        <h2>{error}</h2>
        <h3>
          {data.greeting} ({data.language})
        </h3>
      </>
    );
  } else {
    return <>{<h2>No DATA</h2>}</>;
  }
}
