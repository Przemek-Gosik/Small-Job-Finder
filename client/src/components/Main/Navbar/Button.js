import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
const handleLogout = () => {
  localStorage.removeItem("token")
  window.location.reload()
  }
export function Button() {
  return (
    <Link to='sign-up'>
       <button className="btn" onClick={handleLogout}>
Wyloguj się
</button>
    </Link>
  );
}