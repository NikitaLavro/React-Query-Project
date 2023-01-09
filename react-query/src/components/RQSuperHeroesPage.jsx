import React from "react";

//React Query
import { useQuery } from "react-query";

//Axios
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    { enabled: false }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.title}</div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
