import React, { useRef, useState, useEffect, useTransition } from "react";
import Layout from "@/layouts/Layout";

import { KeyboardArrowDownOutlined, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Container,
  MenuItem,
  TextField,
  Typography,
  styled,
  Stack,
  useTheme,
  Button,
  CircularProgress,
} from "@mui/material";

import { FlexBox } from "@/components/flex-box";
import { SearchResultCard } from "@/components/styled-components";
import Link from "next/link";
import { Roboto } from "next/font/google";
import SectionListJalurMasuk from "./SectionListJalurMasuk";
import { getJalurMasuk, getJalurMasukByName } from "@/utils/__api__/jalurMasuk";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const DropDownHandler = styled(FlexBox)(({ theme }) => ({
  whiteSpace: "pre",
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

const PER_PAGE = 8;
export default function Index() {
  const parentRef = useRef();
  const { breakpoints } = useTheme();
  const [_, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState("Semua Kategori");
  const [category, setCategory] = useState();
  const [resultList, setResultList] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jalurMasuk, setJalurMasuk] = useState([]);

  // HANDLE CHANGE THE CATEGORY
  // const handleCategoryChange = (cat) => () => {
  //   setCategory(cat.value);
  //   setCategoryTitle(cat.title);
  // };

  const searchJalurMasuk = async (searchText, category=null) => {
    let params = {
      page: 1,
      per_page: 10000,
      name: searchText,
    };

    const data = await getJalurMasukByName(params);
    setResultList(data.result.data);
  };

  const handleSearch = (e) => {
    startTransition(() => {
      const value = e.target?.value;
      if (!value) setResultList([]);
      else if (value && category !== "all") searchJalurMasuk(value, category);
      else searchJalurMasuk(value);
    });
  };
  const handleDocumentClick = () => setResultList([]);
  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", null);
  }, []);

  useEffect(() => {
    const params = {
      page,
      per_page: PER_PAGE,
    };
    setLoadingLoadMore(true);
    getJalurMasuk(params).then((res) => {
      setLoading(false);
      setLoadingLoadMore(false);
      setTotalPages(Math.ceil(res.result.total / PER_PAGE));
      setJalurMasuk([...jalurMasuk, ...res.result.data]);
    });
  }, [page]);

  // CATEGORY MENU DROPDOWN
  // const categoryDropdown = (
  //   <SantrhubMenu
  //     direction="left"
  //     sx={{
  //       zIndex: breakpoints.down("md") ? 99999 : 1502,
  //     }}
  //     handler={
  //       <DropDownHandler
  //         px={3}
  //         gap={0.5}
  //         height="100%"
  //         color="grey.700"
  //         bgcolor="grey.100"
  //         alignItems="center"
  //         component={TouchRipple}
  //       >
  //         {categoryTitle}
  //         <KeyboardArrowDownOutlined fontSize="small" color="inherit" />
  //       </DropDownHandler>
  //     }
  //   >
  //     { categories?.map((item) => (
  //       <MenuItem key={item.value} onClick={handleCategoryChange(item)}>
  //         {item.title}
  //       </MenuItem>
  //     ))}
  //   </SantrhubMenu>
  // );

  return (
    <>
      <Layout>
        <Container>
          <Box
            sx={{
              my: 2,
              textAlign: "center",
              backgroundColor: "#5e35b1",
              borderRadius: 1,
              height: 130,
            }}
          >
            <Box sx={{ color: "white" }}>
              <Typography
                variant="h3"
                className={roboto.className}
                sx={{ pt: 3, fontWeight: 700, fontSize: 40 }}
              >
                Jalur Masuk
              </Typography>
            </Box>
            <Stack
              direction={"row"}
              sx={{ mt: 1, display: "flex", justifyContent: "center" }}
            >
              <Breadcrumbs
                aria-label="breadcrumb"
                separator="-"
                sx={{ color: "white" }}
              >
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="#">
                Jalur Masuk
                </Link>
              </Breadcrumbs>
            </Stack>
          </Box>
          <Box>
            <Box
              position="relative"
              flex="1 1 0"
              // maxWidth="670px"
              mx="auto"
              {...{
                ref: parentRef,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Cari Nama Jalur Masuk"
                onChange={handleSearch}
                InputProps={{
                  sx: {
                    height: 44,
                    paddingRight: 0,
                    borderRadius: 300,
                    color: "grey.700",
                    overflow: "hidden",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                  },
                  // endAdornment: categoryDropdown,
                  startAdornment: <SearchOutlined fontSize="small" />,
                }}
              />

              {resultList.length > 0 && (
                <SearchResultCard elevation={2}>
                  {resultList?.map((item, index) => (
                    <Link href={`/jalur-masuk/${item.slug}`} key={index}>
                      <MenuItem key={index}>{item.name}</MenuItem>
                    </Link>
                  ))}
                </SearchResultCard>
              )}
            </Box>
            {loading ? (
              <Box sx={{ textAlign: "center", my: 5 }}>
                <CircularProgress sx={{ width: 10 }} />
              </Box>
            ) : (
              <Box sx={{ mt: { md: 4 } }}>
                <SectionListJalurMasuk jalurMasuk={jalurMasuk} />
                <Box mt={6} mb={5} display="flex" justifyContent="center">
                  {totalPages !== page && (
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => setPage(page + 1)}
                    >
                      {loadingLoadMore ? "Loading" : "Selengkapnya"}
                    </Button>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Layout>
    </>
  );
}

const categories = [
  // {
  //   title: "Semua Kategori",
  //   value: "all",
  // },
  // {
  //   title: "PTN",
  //   value: "Perguruan Tinggi Negeri",
  // },
  // {
  //   title: "PTKIN",
  //   value: "Perguruan Tinggi Keagamaan Islam Negeri",
  // },
  // {
  //   title: "PTS",
  //   value: "Perguruan Tinggi Swasta",
  // },
  // {
  //   title: "PTK",
  //   value: "Peguruan Tinggi Kedinasan",
  // },
  // {
  //   title: "POLTEK",
  //   value: "Politeknik Negeri",
  // },
];
