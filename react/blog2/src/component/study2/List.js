import { useEffect, useState } from "react";

function List() {
  const [products, setProducts] = useState([]);
  const [chan, setChan] = useState("이뻐");

  useEffect(() => {
    fetch("http://localhost:3001/products") // GET
      .then((res) => res.json())
      .then((data) => {
        console.log("products 데이터:", data);
        setProducts(data);
      })
      .catch((err) => console.error(err));

    setChan("너무이뻐");
  }, []);

  const chanChange = () => {
    setChan("천재");
  };

  return (
    <div>
      <h1>상품 목록</h1>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} / {item.price}원
          </li>
        ))}
      </ul>

      <span onClick={chanChange} style={{ cursor: "pointer" }}>
        클릭해봐
      </span>
      <br></br>
      {chan}
    </div>
  );
}

export default List;
