import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/layouts/Layout";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import { H2, H6 } from "@/components/Typography";

import apiCampuses from "@/utils/__api__/campuses";
import { useRouter } from "next/router";
import SectionTabCampus from "./SectionTabCampus";

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [campuse, setCampuse] = useState();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      let params = {
        slug,
      };
      apiCampuses.getCampusesBySlug(params).then((res) => {
        setCampuse(res.result);
        setLoading(false);
      });
    }
  }, [slug]);

  return (
    <Layout>
      <Container>
        {loading ? (
          <Box sx={{textAlign: 'center', my:25}}>
            <CircularProgress  />
          </Box>
        ) : (
          <Box>
            <Box
              position="relative"
              flex="1 1 0"
              mx="auto"
              sx={{ backgroundColor: "", p: 2 }}
            >
              <Box
                sx={{
                  backgroundColor: "#90caf9",
                  display: "inline-block",
                  width: "max-content",
                  p: 0.5,
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#009688",
                    color: "white",
                    p: 1.2,
                    borderRadius: "20px",
                    fontSize: "16px",
                  }}
                >
                  {campuse?.campus?.category}
                </Box>
              </Box>
              <Box sx={{ px: 1, mt: 2 }}>
                <H2>{campuse?.campus?.name}</H2>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "whitesmoke",
                p: 2,
                borderRadius: 3,
                mb: 3,
              }}
            >
              <Grid container spacing={2}>
                <Grid item md={3} sm={6} xs={12}>
                  <Box sx={{ backgroundColor: "white", p: 1, borderRadius: 2 }}>
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: 3,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={campuse?.campus?.logo}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Card>
                    <Box sx={{ p: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <H6>Provinsi</H6>
                        <H6>{campuse?.campus?.province}</H6>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <H6>Kota / Kabupaten</H6>
                        <H6>{campuse?.campus?.city}</H6>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          mt: 2,
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          href={`${campuse?.campus?.website}`}
                          target="_blank"
                        >
                          <Button variant="contained" color="info">
                            Website Resmi
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={9} sm={6} xs={12}>
                  <Box sx={{ backgroundColor: "white", p: 1, borderRadius: 2 }}>
                    <SectionTabCampus campuse={campuse} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Container>
    </Layout>
  );
}
