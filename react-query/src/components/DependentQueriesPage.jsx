import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const DependentQueriesPage = ({ email }) => {
  const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
  };

  const { data: user } = useQuery(["user, email"], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;

  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
