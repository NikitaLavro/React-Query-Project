import React from "react";

//RQ
import { useQuery } from "react-query";

//Axios
import axios from "axios";

const ParallelQueriesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
  };

  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
