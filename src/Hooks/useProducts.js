import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = () => {   
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../furnitureData.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { products, loading, error };
};

export default useProducts;

// const useProducts = () => {   
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axios("../furnitureData.json")
//         .then((res) => setProducts(res.data)
//         .catch((err) => setError(err))
//         .finally(() => setLoading(false))
//     );
//   }, []);
//   return { products, loading, error };
// };

// export default useProducts;
