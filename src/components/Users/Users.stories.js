import React from "react";
import Users from "./Users";
import ApiDoc from "./Users.md";

export default {
  component: Users,
  title: "Users",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Users />;
