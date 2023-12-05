import React from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavDropdown = props => (
  <UncontrolledDropdown nav inNavbar id={props.id} data-cy={props['data-cy']}>
    <DropdownToggle nav caret className="d-flex align-items-center" style={{ color: '#012C78' }}>
      <FontAwesomeIcon icon={props.icon} style={{ color: '#012C78' }} />
      <span>{props.name}</span>
    </DropdownToggle>
    <DropdownMenu end style={{ ...props.styles, backgroundColor: '#FFF', borderColor: '#FFF' }}>
      {props.children}
    </DropdownMenu>
  </UncontrolledDropdown>
);
