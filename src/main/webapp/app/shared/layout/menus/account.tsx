import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { getLoginUrl } from 'app/shared/util/url-utils';
import { NavDropdown } from './menu-components';

const accountMenuItemsAuthenticated = () => (
  <>
    <MenuItem icon="sign-out-alt" to="/logout" data-cy="logout">
      <span style={{ color: '#012C78' }}>Sign out</span>
    </MenuItem>
  </>
);

const accountMenuItems = () => (
  <>
    <DropdownItem id="login-item" tag="a" href={getLoginUrl()} data-cy="login" style={{ color: '#012C78' }}>
      <FontAwesomeIcon icon="sign-in-alt" style={{ color: '#012C78' }} />{' '}
      <Translate contentKey="global.menu.account.login">Sign in</Translate>
    </DropdownItem>
  </>
);

export const AccountMenu = ({ isAuthenticated = false }) => (
  <NavDropdown icon="user" name={translate('global.menu.account.main')} id="account-menu" data-cy="accountMenu">
    {isAuthenticated && accountMenuItemsAuthenticated()}
    {!isAuthenticated && accountMenuItems()}
  </NavDropdown>
);

export default AccountMenu;
