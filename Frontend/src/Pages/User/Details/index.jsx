import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useContext } from 'react';
import { favoriteContext } from '../../../Context/FavoritesContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let {favorite,setFavorite}=useContext(favoriteContext)

  function GetData() {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(response => {
        setProduct(response.data.data);
        setLoading(false);
      });
  }

  function handleAddFavorite(product){
    let findFavorite= favorite.find(item=>item._id==product._id)

    if(findFavorite){
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Already in your Wishlist!"
      });
    }else{
       setFavorite([...favorite,product])

       
       const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Added to Wishlist!"
      });
    }
 }

  useEffect(() => {
    GetData();
  }, [id]);

  if (loading) {
    return <div className="details-container">Loading...</div>;
  }

  if (!product) {
    return <div className="details-container">Product not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{product ? `${product.name} | Immigration Details` : 'Product Details'}</title>
        <meta name="description" content={product ? `Learn about immigration requirements for ${product.name}. Detailed information about ${product.country} immigration process.` : 'Immigration requirement details'} />
        <meta name="keywords" content={`${product?.name}, ${product?.country}, immigration details, requirements`} />
      </Helmet>

      <div className="details-container">
        <div className="details-card">
          <div className="details-image">
            <img srcSet={product.image} alt={product.name} />
          </div>
          <div className="details-content">
            <h1>{product.name}</h1>
            <h3>{product.country}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleAddFavorite(product)}><FaHeart/></button>
            <button onClick={() => navigate('/')}>Go Back</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;