import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/layouts/Layout";
import moment from "moment";
import "moment/locale/id";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Button,
  CircularProgress,
  Stack,
  Avatar,
} from "@mui/material";
import { H2, H6 } from "@/components/Typography";

import { useRouter } from "next/router";
import SectionTabScholar from "./SectionTabScholar";
import { getDetailScholarsBySLug } from "@/utils/__api__/scholarships";

export default function Slug() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [scholar, setScholar] = useState();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      let params = {
        slug,
      };

      getDetailScholarsBySLug(params).then((res) => {
        setScholar(res.result);
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
              <Box
                sx={{
                  display: "inline-block",
                  width: "max-content",
                  p: 0.5,
                  borderRadius: "20px",
                }}
              ></Box>
              <Box sx={{ px: 1, mt: 2 }}>
                <H2>{scholar?.scholar?.name}</H2>
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
                        image={scholar?.scholar?.logo ?? ''}
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
                        <Stack direction={"row"} spacing={1}>
                        {scholar?.scholar?.diploma && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 1,
                                fontWeight: 100,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              Diploma
                            </Avatar>
                          )}
                          {scholar?.scholar?.strata_1 && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 1,
                                fontWeight: 100,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              S1
                            </Avatar>
                          )}
                          {scholar?.scholar?.strata_2 && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 1,
                                fontWeight: 100,
                                fontSize: "12px",
                              }}
                              className={""}
                            >
                              S2
                            </Avatar>
                          )}
                          {scholar?.scholar?.strata_3 && (
                            <Avatar
                              sx={{
                                backgroundColor: "#00897b",
                                width: 25,
                                height: 25,
                                p: 1,
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
                          {moment(scholar?.scholar?.mulai_pendaftaran).format(
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
                          {moment(scholar?.scholar?.akhir_pendaftaran)
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
                          href={`${scholar?.scholar?.website}`}
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
                    <SectionTabScholar scholar={scholar} />
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
