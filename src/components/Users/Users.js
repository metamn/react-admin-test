import React from "react";
import PropTypes from "prop-types";
import { List, Datagrid, TextField, EmailField } from "react-admin";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

/**
 * Displays the component
 */
const Users = props => {
  return <div className="Users">Users</div>;
};

Users.propTypes = propTypes;
Users.defaultProps = defaultProps;

export default Users;
export {
  UserList,
  propTypes as UsersPropTypes,
  defaultProps as UsersDefaultProps
};
