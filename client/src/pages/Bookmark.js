import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function Bookmark({ cart, setCart} ) {
  const { id } = useParams();
  console.log(typeof(id));

  const [club, setClub] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9000/clubs/${id}`)
      .then(async (res) => {
        const club = await res.json();
        console.log(club)
        setClub(club[0])
      }
    );
  },[]);

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((club) => club !== productToRemove)
    );
  };

  const clearCart = () => {
    setCart([]);
    console.log("works")
  }

  const Bookmarks  = cart.map((club) => (
    <div className="club">
      <h3>{club.name}</h3>
      console.log(club.name)
      <button onClick={() => removeFromCart(club)}>
        Remove
      </button>
      
    </div>
  ))
  
  return (
<Layout>
      <Container>
        <br />
        <button onClick={clearCart}>Clear Cart</button>
        {Bookmarks}
    </Container>
</Layout>
  );
}