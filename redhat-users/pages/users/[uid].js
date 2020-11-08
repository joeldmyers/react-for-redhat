import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

const Details = () => {
  const [user, setUser] = useState({});
  const apiEndpoint = "http://jsonplaceholder.typicode.com/users";
  const router = useRouter();
  const { uid } = router.query;

  const getUserById = (data, uid) => {
    return data.filter((user) => user.id === parseInt(uid))[0] || {};
  };

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const user = getUserById(data, uid);
        setUser(user);
      });
  }, [uid]);

  return (
    <Layout>
      {user.name && (
        <div>
          <h1>{user.name}</h1>
          <h3>Username: {user.username}</h3>
          <h4>{user.email}</h4>
          <h4>{user.website}</h4>
          <h3>
            <strong>Address: </strong>
            <br />
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </h3>
          <h3>
            <strong>Company: </strong>
            {user.company.name}
            <br />
            {user.company.catchPhrase}
            <br />
            <em>{user.company.bs}</em>
          </h3>
        </div>
      )}
    </Layout>
  );
};

export default Details;
