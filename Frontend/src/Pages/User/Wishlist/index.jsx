import React from 'react'
import { favoriteContext } from '../../../Context/FavoritesContext';
import { useContext, useEffect } from 'react'
import './Fav.css'
import { FaHeartBroken } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function Favorites() {

  let { favorite, setFavorite } = useContext(favoriteContext)
  

  function handleDeleteFavorite(id) {
    let filteredFavorite = favorite.filter(item => item._id !== id)
    setFavorite(filteredFavorite)
    console.log(favorite);
  }

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));  
  }, [favorite]); 

  return (
    <>
      <Helmet>
        <title>My Wishlist | Immigration Services</title>
        <meta name="description" content="View your saved immigration opportunities and requirements. Manage your favorite immigration options." />
        <meta name="keywords" content="wishlist, favorites, saved requirements, immigration options" />
      </Helmet>
      <section id='favlarim'>
        {favorite.length === 0 ? (
          <div className="empty-favorites">
            <h2>Wishlist boş</h2>
          </div>
        ) : (
          <div className="favorites-container">
            {favorite.map(item => (

              <div key={item._id} className="favorite-card">
                <img src={item.image} alt={item.name} className="favorite-image" />
                <div className="favorite-content">
                  <h3>{item.name}</h3>
                </div>
                <div className="favorite-actions">
                  <button onClick={() => handleDeleteFavorite(item._id)} className="remove-button">
                  <FaHeartBroken/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );


}

export default Favorites