import React, { useEffect } from "react";
import FirebaseApp from "./base";

const useFetchData = currentList => {
  const [list, setList] = React.useState([]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    FirebaseApp.database()
      .ref(currentList)
      .once("value")
      .then(snap => {
        setList(Object.values(snap.val()));
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  }, [currentList]);

  return { list, error };
};
export default useFetchData;
