import React, { useEffect, useState } from "react";
import FirebaseApp from "./base";

const useFetchData = currentList => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

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
