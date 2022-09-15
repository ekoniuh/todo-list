import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (!isAuth) return;

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/todo-list/about">О сайте</Link>
        <Link to="/todo-list/posts">Посты</Link>
      </div>
      <MyButton onClick={logout}>Выйти</MyButton>
    </div>
  );
};

export default Navbar;
