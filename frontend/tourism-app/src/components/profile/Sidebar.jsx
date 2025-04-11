import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './sidebarStyle.css';

const Sidebar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={user?.profilepic || 'https://via.placeholder.com/100'}
          alt="Profil"
          className="sidebar-profile-img"
        />
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/dashboard" className="nav-link">
            <FaTachometerAlt className="nav-icon" /> Tableau de bord
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/account-settings" className="nav-link active">
            <FaUser className="nav-icon" /> Détails du compte
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/change-password" className="nav-link">
            <FaLock className="nav-icon" /> Changer le mot de passe
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/logout" className="nav-link">
            <FaSignOutAlt className="nav-icon" /> Déconnexion
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;