import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useSession } from "next-auth/react";

import LayoutNavigationDashboardUser from "./LayoutNavigationDashboardUser";
import Layout from "./Layout";
import { useRouter } from "next/router";

export default function LayoutDashboardUser({ children }) {
  const router = useRouter();
  const [roleId, setRoleId] = useState(1);
  const { data: session, status } = useSession();
  if (!session && status === "unauthenticated") {
    router.push("/");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setRoleId(user?.user?.role_id);
    }
  }, []);

  return (
    <>
      {session && status === "authenticated" && (
        <Layout>
          <Container sx={{ my: "2rem" }}>
            <Grid container spacing={3}>
              <Grid
                item
                lg={3}
                xs={12}
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <LayoutNavigationDashboardUser />
              </Grid>
              <Grid item lg={9} xs={12}>
                {children}
              </Grid>
            </Grid>
          </Container>
        </Layout>
      )}
    </>
  );
}
