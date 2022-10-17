import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { Box } from "../Box.js";
import Nav from "./Nav.js";
import NavItem from "./NavItem.js";

export const Navigation = ({children, ...props}) => {
  const {data = {}} = props;

  return (
    <Box className={`divide-y divide-fire-100 ${props.class}`}>
      <Nav>
        {data.menu &&
          data.menu &&
          data.menu.items &&
          data.menu.items
            .filter((k) => !k.hidden)
            .map((item, index) => {
              return (
                <NavItem key={index} href={item.path}>
                  {item.label}
                </NavItem>
              );
            })}
      </Nav>
      {children}
    </Box>
  );
};
