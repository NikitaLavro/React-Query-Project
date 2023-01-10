import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const DependentQueriesPage = ({ email }) => {
  const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
  };

  const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/users/${channelId}`);
  };

  const { data: user } = useQuery(["user, email"], () =>
    fetchUserByEmail(email)
  );

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });

  const channelId = user?.data.channelId;

  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
