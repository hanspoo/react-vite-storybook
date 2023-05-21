import { useEffect, useState } from "react";
import axios from "axios";

import { Loader } from "semantic-ui-react";

type User = {
  id: number;
  name: string;
};

export function App() {
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState("");
  const [user, setEvento] = useState<User>();

  useEffect(() => {
    const url = `/v1/me`;
    axios
      .get(url)
      .then((response) => {
        setEvento(response.data);
        setLoading2(false);
      })
      .catch((error) => {
        setError2(error.message);
        setLoading2(false);
      });
  }, []);

  if (loading2) return <Loader />;

  if (error2) return <p>{error2}</p>;

  if (!user) return <p>Error interno, no cargó la información</p>;

  return <p>{user.name}</p>;
}


