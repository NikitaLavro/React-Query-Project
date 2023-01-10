import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperHeroData";

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onFetchSuccess, onFetchError);

  function onFetchSuccess(data) {
    console.log("Perfrom side effect after data fetch", data);
  }

  function onFetchError(error) {
    console.log("Perform side effect after data fetch", error);
  }

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
      {/*data?.data.map((hero) => (
        <div key={hero.id}>{hero.title}</div>
      ))*/}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
