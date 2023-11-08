import { styled, Box, Stack, Avatar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { H4 } from "./Typography";

// styled components
const StyledCard = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "auto",
  borderRadius: 0,
  overflow: "hidden",
  position: "relative",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
    "& .css-1i2n18j": {
      display: "flex",
    },
    "& .controlBox": {
      display: "flex",
      bottom: 0,
    },
  },
}));

export default function CardScholar({ data }) {
  return (
    <StyledCard>
      <Link href={`/beasiswa/${data.slug}`}>
        <Box sx={{ overflow: "hidden", position: "relative" }}>
          <Image
            src={data.logo}
            width={500}
            height={500}
            alt="logo"
            style={{
              height: 190,
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ p: 1.5 }}>
          <Stack direction={"row"} spacing={1} sx={{ mb: -1, mt: -1.5 }}>
            {data.strata_1 && (
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

            {data.strata_2 && (
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

            {data.strata_3 && (
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
          {!data.strata_3 && !data.strata_2 && !data.strata_1 ? (
            <Box sx={{ p: 1, mt: 1 }} />
          ) : null}
          <H4 mt={3}>{data.name}</H4>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: -4,
              color: "#0d47a1",
              fontWeight: 500,
            }}
          >
            <p>Pendaftaran</p>
            <p>{data.mulai_pendaftaran}</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "red",
              fontWeight: 400,
            }}
          >
            <p>Berakhir</p>
            <p>{data.akhir_pendaftaran}</p>
          </Box>
        </Box>
      </Link>
    </StyledCard>
  );
}
