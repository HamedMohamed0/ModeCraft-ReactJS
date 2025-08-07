import { useEffect, useState } from "react";
import { fetchApi } from "./fetchApi.js";
import Swal from "sweetalert2";
const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const styles = `
  .custom-overlay {
    background-color: #1A51AB !important; /* Set custom overlay color */
  }

  .custom-popup {
    border-radius: 15px; /* Optional: Add popup customizations */
  }
`;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
  useEffect(() => {
    const fetchDate = async () => {
      try {
        // Loadding...
        setLoading(true);
        // Requesting...
        const res = await fetchApi.get(endPoint);
        setData(res.data.data);
      } catch (error) {
        // Error...
        setError(error);
      }
      // Close loading...
      setLoading(false);
    };
    fetchDate();
  }, [endPoint]);
  return { data, error,loading };
};
export default useFetch;
