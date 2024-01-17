import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { useState } from "react";
import MainContext from "./context";
import toast from "react-hot-toast";
function App() {
const routes=createBrowserRouter(Router)

const[data,setData]=useState([])
const [error,setError]=useState('')
const[search,setSearch]=useState('')
const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []);


const addToWishlist = (id) => {
  let item = data.find(item => item._id === id);

  if (item && !wishlist.some(existingItem => existingItem._id === id)) {
    setWishlist([...wishlist, item]);
    localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));
  
    toast.success(`${item.name} added to wishlist!`);
  } else if (item) {
    toast.error(`${item.name} is already in your wishlist!`);
  } else {
    console.error(`Item with id ${id} not found.`);
  }
};

const handleDelete = (id) => {
  let wishlistdelete = wishlist.find(item => item._id === id);

  if (wishlistdelete) {
    const updatedWishlist = wishlist.filter(item => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.error(`Product deleted from wishlist!`);
  } else {
    console.error(`Item with id ${id} not found in the wishlist.`);
  }
};

const searchItems=data.filter(product=>product.name.toLowerCase().trim()
  .includes(search.toLowerCase().trim()))


const item={
  data,setData,
  error,setError,
  wishlist, setWishlist,
  search,setSearch,
  addToWishlist,handleDelete,
  searchItems
}
  return (
    <MainContext.Provider value={item}>
   <RouterProvider router={routes}/>
   </MainContext.Provider>
  );
}

export default App;
