import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css';
import { useNavigate } from 'react-router-dom';
function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function GetData() {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(response => {
        setProduct(response.data.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    GetData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <img srcSet={product.image} alt={product.name} />
        </div>
        <div className="details-content">
          <h1>{product.name}</h1>
          <h3>{product.country}</h3>
          <p>{product.description}</p>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default Details;