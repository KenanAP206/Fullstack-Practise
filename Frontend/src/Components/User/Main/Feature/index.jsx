import React, { useState, useEffect } from 'react'
import './Feature.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet';

function index() {
  let [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = () => {
    SetProducts(prevProducts => {
      const sortedProducts = [...prevProducts].sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return isAscending ? comparison : -comparison;
      });
      setIsAscending(!isAscending);
      return sortedProducts;
    });
  };

  function GetData() {
    axios.get('http://localhost:3000/products')
    .then(response => {
      SetProducts(Array.isArray(response.data) ? response.data : []); 
      setLoading(false);
    })}

  useEffect(() => {
    GetData()
  }, []);

  function HandleDelete(id){
    axios.delete('http://localhost:3000/products/'+id)
    .then(data =>  SetProducts(prevProducts => prevProducts.filter(product => product._id !== id)))
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Immigration Requirements & Services | Home</title>
        <meta name="description" content="Discover immigration requirements and services. Find detailed information about immigration opportunities in different countries." />
        <meta name="keywords" content="immigration, requirements, services, dream planning, consultancy" />
      </Helmet>
      <div>
        <section id='request'>
          <h3 className="req-left">
            Start <span>planning</span> your
            New <span>Dream</span>
          </h3>
          <div className="req-mid">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </div>
          <button>Request Free Consultancy</button>
        </section>
        <section id='featim'>
          <div className="sec-head">
            <h2>Requirements to be Immigrants</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="add">
            <NavLink to='/addform'><button>ADD NEW</button></NavLink>
            <button onClick={handleSort}>
              SORT {isAscending ? 'A-Z' : 'Z-A'}
            </button>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <div className="f-cards">
            {loading ? (
              <div>Loading...</div>
            ) : (
              filteredProducts.map((product) => (
                <NavLink to={`/${product._id}`} key={product._id} className="card-link">
                  <div className="f-card">
                    <div className="c-img">
                      <FaRegTrashAlt onClick={(e) => {
                        e.preventDefault(); 
                        HandleDelete(product._id);
                      }} />
                      <img alt="" src={product.image} />
                    </div>
                    <span>{product.country}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </NavLink>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default index
