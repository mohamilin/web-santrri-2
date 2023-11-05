import React from "react";
import useWindowSize from "@/helpers/hooks/useWindowSize";

import Icons from "@/components/icons";
import {
  StyledNavLink,
  Wrapper,
  iconStyle,
} from "@/components/styled-components";
import { AccountBalance, LocalLibrary } from "@mui/icons-material";
import WindowIcon from "@mui/icons-material/Window";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export default function MobileNavigation() {
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
    title: "Info Kampus",
    icon: AccountBalance,
    href: "/info-kampus",
  },
  {
    title: "Jalur Masuk",
    icon: LocalLibrary,
    href: "/jalur-masuk",
  },
  {
    title: "Home",
    icon: WindowIcon,
    href: "/",
  },
  {
    title: "Beasiswa",
    icon: VolunteerActivismIcon,
    href: "/beasiswa",
  },
  {
    title: "Profil",
    icon: Icons.User,
    href: "/profile",
  },
];
