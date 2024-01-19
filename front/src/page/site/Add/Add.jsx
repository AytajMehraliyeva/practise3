import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context';
import './Add.scss'
const Add = () => {
  const{setData,setError,data,searchItems,search,setSearch}=useContext(MainContext)

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      img:'',
      desc:''
    },
    onSubmit: values => {
      if (!values.name || !values.price || !values.img) {
        toast.error('Please fill out all fields.');
        return;
      }


      axios.post('https://backend-aytaj.onrender.com/datas', { ...values })
        .then(res => {
          console.log(res);
          toast.success('Product added successfully!');
        refresh()
        })
        .catch(error => {
       
          toast.error('An error occurred while adding the product.');
        })


        
    }
  });

  useEffect(()=>{
    axios.get("https://backend-aytaj.onrender.com/datas")
    .then(res=>{
      setData(res.data);
      console.log(res.data)
    })
    .catch(err=>{
      setError(err)
    })
  },[])

  const deleteHandler = (id) => {
    axios.delete(`https://backend-aytaj.onrender.com/datas/${id}`)
      .then(() => {
        const updatedData = data.filter(product => product._id !== id);
        setData(updatedData);
        toast.success('Product deleted!');
      })
      .catch(err => {
        console.error('Error deleting product:', err);
        toast.error('Error deleting product');
      });
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
    <form className='formAdd' onSubmit={formik.handleSubmit}>
      
       <label htmlFor="name">Name</label> <br />
       <input
         id="name"
         name="name"
         placeholder='Name...'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       /> <br />
        <label htmlFor="price">Price</label> <br />
       <input
         id="price"
         name="price"
         placeholder='Price...'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       /> <br />
        <label htmlFor="desc">Description</label> <br />
       <input
         id="desc"
         name="desc"
         placeholder='Description...'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.desc}
       /> <br />
  <label htmlFor="img">Image</label> <br />
       <input
         id="img"
         name="img"
         type="text"
         placeholder='Img url...'
         onChange={formik.handleChange}
         value={formik.values.img}
       /> <br />
       <button className='formAdd_btn' type="submit">Submit</button>
       <Toaster/>
     </form>
     <input
        type="text"
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
     <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {searchItems.map((item, index) => (
             <tr key={index}>
             <td>{item.name}</td>
             <td>{item.price} Azn</td>
             <td><button className='deleteBtn' onClick={() => deleteHandler(item._id)}>Delete</button></td>
        <Toaster/>
           </tr>
            ))}
          </tbody>
        </table>


     </>


  )
}

export default Add