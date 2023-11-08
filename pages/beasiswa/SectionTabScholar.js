import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { H3, H4, Paragraph } from "@/components/Typography";
import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CardJalurMasuk from "@/components/CardJalurMasuk";
import CardCampus from "@/components/CardCampus";
import Link from "next/link";
import HoverBox from "@/components/HoverBox";
import LazyImage from "@/components/LazyImage";

const TAB = [
  { value: "1", label: "Deskripsi" },
  { value: "2", label: "Persyaratan" },
  { value: "3", label: "Pendaftaran" },
  { value: "4", label: "Benefit" },
  { value: "5", label: "Berkas" },
  { value: "6", label: "Timeline" },
  { value: "7", label: "Kampus" },
];

export default function SectionTabCampus({ scholar }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState({});
  const [faculties, setFaculties] = React.useState(scholar?.faculty);
  const handleClick = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderList = (items) => {
    return items?.map((item) => (
      <React.Fragment key={item.id}>
        <ListItem onClick={() => handleClick(item.id)}>
          <ListItemText
            primary={item.name}
            sx={{
              fontWeight: "bolder",
              backgroundColor: "#f5f5f5",
              p: 1,
              color: "black",
            }}
          />
          {item.departements &&
            (open[item.id] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {item?.departements && (
          <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ color: "" }}>
              {item?.departements?.map((i, index) => (
                <Typography key={index} mx={4} sx={{ mb: 1 }}>
                  {" "}
                  {index + 1}. {i.name}
                </Typography>
              ))}
              {/* <ListItemText color="green" >{renderList(item.departements)}</ListItemText> */}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TAB.map((i, index) => (
              <Tab key={index} label={i.label} value={i.value} />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box>
            <H3>Deskripsi</H3>
            <div
              dangerouslySetInnerHTML={{ __html: scholar?.scholar.description }}
            />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box>
            <H3>Persyaratan</H3>
            <div
              dangerouslySetInnerHTML={{
                __html: scholar?.scholar?.persyaratan,
              }}
            />
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <Box>
            <H3 sx={{ mb: 3 }}>Pendaftaran</H3>
            <div
              dangerouslySetInnerHTML={{
                __html: scholar?.scholar?.cara_pendaftaran,
              }}
            />
          </Box>
        </TabPanel>
        <TabPanel value="4">
          <Box>
            <H3 sx={{ mb: 2 }}>Benefit</H3>
            <div
              dangerouslySetInnerHTML={{ __html: scholar?.scholar?.benefits }}
            />
          </Box>
        </TabPanel>
        <TabPanel value="5">
          <Box>
            <H3 sx={{ mb: 2 }}>Berkas</H3>
            <div
              dangerouslySetInnerHTML={{ __html: scholar?.scholar?.documents }}
            />
          </Box>
        </TabPanel>
        <TabPanel value="6">
          <Box>
            <H3 sx={{ mb: 2 }}>Timeline</H3>
            <div
              dangerouslySetInnerHTML={{ __html: scholar?.scholar?.timeline }}
            />
          </Box>
        </TabPanel>
        <TabPanel value="7">
          <Box>
            <H3 sx={{ mb: 2 }}>Kampus</H3>
            <Grid container spacing={2}>
              {scholar?.campus?.map((i, index) => (
                <Grid key={index} item md={4} sm={6} xs={12}>
                  <CardCampus sx={{ p: "1rem" }}>
                    <Link href={`/info-kampus/${i.slug}`}>
                      <HoverBox borderRadius={"8px"} mb={1}>
                        <LazyImage
                          src={i.logo}
                          width={500}
                          height={500}
                          alt={"logo"}
                        />
                      </HoverBox>
                      <Box
                        sx={{
                          backgroundColor: "#ffb74d",
                          opacity: 10,
                          p: 0.5,
                          borderRadius: 1,
                          mb: 1,
                        }}
                      >
                        <H4 fontWeight="500" fontSize="12px">
                          {i.category_campus_name}
                        </H4>
                      </Box>
                      <H4 fontWeight="600" fontSize="12px" mb={0.5}>
                        {i.name}
                      </H4>
                      <H4 fontWeight="600" fontSize="12px" mb={0.5}>
                        {i.city_name}, {i.province_name}
                      </H4>
                    </Link>
                  </CardCampus>
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
