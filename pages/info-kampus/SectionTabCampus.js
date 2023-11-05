import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { H3, Paragraph } from "@/components/Typography";
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
import CardScholar from "@/components/CardScholar";

const TAB = [
  { value: "1", label: "Deskripsi" },
  { value: "2", label: "Fakultas dan Jurusan" },
  { value: "3", label: "Jalur Masuk" },
  { value: "4", label: "Beasiswa" },
];
export default function SectionTabCampus({ campuse }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState({});
  const [faculties, setFaculties] = React.useState(campuse?.faculty);
  const handleClick = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderList = (items) => {
    return items.map((item) => (
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
        {item.departements && (
          <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ color: "" }}>
              {item.departements.map((i, index) => (
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
            <Paragraph my={2}>{campuse.campus.description}</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box>
            <H3>Fakultas dan Jurusan</H3>
            <List component="nav" aria-labelledby="nested-list-subheader">
              {renderList(faculties)}
            </List>
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <Grid container spacing={2}>
            {campuse.jalurMasuk.map((i, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CardJalurMasuk data={i} campus={campuse.campus} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="4">
          <Grid container spacing={2}>
            {campuse.scholars.map((i, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CardScholar data={i} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const dataDumy = [
  {
    id: 1,
    title: "Item 1",
    children: [
      {
        id: 2,
        title: "Subitem 1",
      },
      {
        id: 3,
        title: "Subitem 2",
      },
    ],
  },
  {
    id: 5,
    title: "Item 2",
    children: [
      {
        id: 2,
        title: "Subitem 1",
      },
      {
        id: 3,
        title: "Subitem 2",
      },
    ],
  },
];
