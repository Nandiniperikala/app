import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logoText.png" alt="Logo" style={{ marginLeft: '100px' }} />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon /> &nbsp; <span style={{ color: '#353d47' }}>TIC-App</span>
  </NavbarBrand>
);

export const Home = () => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <div style={{ width: '60px', height: '35px', borderBottom: '1px solid #012C78', textAlign: 'center' }}>
        <span style={{ color: '#012C78', fontWeight: '570' }}>
          <Translate contentKey="global.menu.home">Home</Translate>
        </span>
      </div>
    </NavLink>
  </NavItem>
);
