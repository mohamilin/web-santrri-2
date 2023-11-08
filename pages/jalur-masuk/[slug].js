import { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import "moment/locale/id";

import Layout from "@/layouts/Layout";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Button,
  CircularProgress,
  Avatar,
  Stack,
} from "@mui/material";
import { H2, H6 } from "@/components/Typography";

import { useRouter } from "next/router";
import SectionTabCampus from "../beasiswa/SectionTabScholar";
import { getDetailJalurMasukBySlug } from "@/utils/__api__/jalurMasuk";
import SectionTabJalurKampus from "./SectionTabJalurKampus";

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [jalurMasuk, setJalurMasuk] = useState();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      let params = {
        slug,
      };

      getDetailJalurMasukBySlug(params).then((res) => {
        setJalurMasuk(res.result);
        setLoading(false);
      });
    }
  }, [slug]);

  return (
    <Layout>
      <Container>
        {loading ? (
          <Box sx={{ textAlign: "center", my: 25 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Box
              position="relative"
              flex="1 1 0"
              mx="auto"
              sx={{ backgroundColor: "", p: 2 }}
            >
              <Box sx={{ px: 1, mt: 2 }}>
                <H2>{jalurMasuk?.name}</H2>
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
                        image={
                          jalurMasuk?.logo ??
                          "/assets/images/background-template-jalur-masuk.jpg"
                        }
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
                          mb: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <H6>Jenjang</H6>
                        <Stack direction={"row"} spacing={0.5}>
                          {jalurMasuk?.diploma && (
                            <Box
                              sx={{
                                backgroundColor: "#00897b",
                                color: 'white',
                                width: 55,
                                height: 30,
                                p: 0.6,
                                fontWeight: 100,
                                borderRadius:2,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              Diploma
                            </Box>
                          )}
                          {jalurMasuk?.strata_1 && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 2,
                                fontWeight: 100,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              S1
                            </Avatar>
                          )}
                          {jalurMasuk?.strata_2 && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 2,
                                fontWeight: 100,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              S2
                            </Avatar>
                          )}
                          {jalurMasuk?.strata_3 && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 2,
                                fontWeight: 100,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              S3
                            </Avatar>
                          )}
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          mb: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <H6>Pendaftaran</H6>
                        <H6>
                          {moment(jalurMasuk?.mulai_pendaftaran).format(
                            "DD MMMM YYYY"
                          )}
                        </H6>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          color: "red",
                          justifyContent: "space-between",
                        }}
                      >
                        <H6>Berakhir</H6>
                        <H6>
                          {moment(jalurMasuk?.akhir_pendaftaran)
                            .locale("id")
                            .format("DD MMMM YYYY")}
                        </H6>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          mt: 2,
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          href={`${jalurMasuk?.website}`}
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
                    <SectionTabJalurKampus jalurMasuk={jalurMasuk} />
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
