import { useReducer, useEffect } from "react";
import { weatherReducer } from "../reducers/weatherReducer";

function useAsync(callback) {
  const initialState = {
    loading: false,
    data: null,
    error: false,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
}

export default useAsync;
