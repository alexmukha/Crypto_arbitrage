import React, { useContext } from 'react';
import { CounterContext } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { currentUser } = useContext(CounterContext);
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>This is your new navbar{' '}
    </div>
  );
};

export default Navbar;
