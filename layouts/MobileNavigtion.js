import React from "react";
import { Badge } from "@mui/material";
import useWindowSize from "@/helpers/hooks/useWindowSize";

import Icons from "@/components/icons";
import { StyledNavLink, Wrapper, iconStyle } from "@/components/styled-components";

export default function MobileNavigtion() {
  const width = useWindowSize();

  return width <= 900 ? (
    <Wrapper>
      {list.map((item) => (
        <StyledNavLink href={item.href} key={item.title}>
          <item.icon sx={iconStyle} fontSize="small" />
          {item.title}
        </StyledNavLink>
      ))}
    </Wrapper>
  ) : null;
}

const list = [
  {
    title: "Dashboard",
    icon: Icons.Category,
    href: "/dashboard",
  },
  {
    title: "Home",
    icon: Icons.Home,
    href: "/",
  },
  {
    title: "Account",
    icon: Icons.User,
    href: "/profile",
  },
];
