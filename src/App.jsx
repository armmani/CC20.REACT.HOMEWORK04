import { useEffect, useState } from 'react'
import Button from "./components/Button"
import Product from "./components/Product"
import Modal from "./components/Modal"

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [text, setText] = useState("ALL");
  const [isShowed, setIsShowed] = useState(false);
  
  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setCategory(data);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const arrCategory = category.reduce((prev, curr) => {
    if (!prev.includes(curr.category)) {
      prev.push(curr.category)
    }
    return prev
  }, [])

  const hdlCallCategory = (cate) => {
    if (cate === "all") {
      setProducts(category);
    } else {
      setProducts(category.filter((el) => el.category === cate));
    }
      setText(cate)
  };

  const showModal = () => {
    setIsShowed(true)
  }

  const closeModal = () => {
    setIsShowed(false)
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl mb-4">Products Fetch & Filter</h1>
        <hr className="my-2" />
        <p className="text-center mb-4"> Current Category : {text}</p>
        <div className="flex justify-around">
          {arrCategory.map((el, index) => (
            <Button key={index} item={el} hdlCallCategory={hdlCallCategory} />
          ))}
          <button className="btn" onClick={() => {hdlCallCategory("all")}}>ALL</button>
        </div>
        <hr className="my-2" />
        <Product products={products} showModal={showModal} />
        {isShowed && <Modal closeModal={closeModal} />}
      </div>
    </>
  )
}

export default App
