import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Mobile_nav from "./Mobile_nav";
import { bodyFont } from "../constants";
import {
  Grid,
  Box,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
const Navbar = () => {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("lg"));
  const [opened, setOpened] = useState(false)
  const headerFont = "Clash Grotesk Medium,sans-serif";
  const centerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  console.log(opened)
  return (
    <Grid
      style={centerStyle}
      minHeight="8rem"
      container
      alignItems="center"
      justifyContent="center"
      xs={12}
      md={11.5}
      className="Jobsly_Navbar"
    >
      <Grid
        style={centerStyle}
        item
        className="Jobsly_Navbar_Details"
        xs={6}
        md={8}
      >
        <Stack className="Jobsly_Navbar_Logo" alignItems="center" width={query ? "20%" : "100%"} justifyContent={query ? "flex-start" : "center"} direction="row" >
          <Box
            display="flex"
            justifyContent="flex-start"
            marginLeft
            width={query ? "100%" : "92%"}
          >
            <Link color="#000" to="/">
              <Typography
                color="var(--secondary-color)"
                variant="h3"
                fontFamily={headerFont}
                component="h4"
                style={{ zIndex: 15 }}
              >
                Jobsly
              </Typography>
              <img src="" alt="" />
            </Link>
          </Box>
        </Stack>
        {query ? (
          <Stack
            width="70%"
            gap="1rem"
            alignItems="center"
            justifyContent="flex-start"
            direction="row"
          >
            <Link className="Jobsly_Navbar_Link" to="Jobs">
              <p className="Jobsly_Navbar_Link_Text">Find Jobs</p>
            </Link>

            <Link className="Jobsly_Navbar_Link_Text" to="Companies">
              <p>Browse Companies</p>
            </Link>
          </Stack>
        ) : (
          <div></div>
        )}
      </Grid>

      <Grid
        style={centerStyle}
        item
        xs={6}
        md={4}
        className="Jobs_Navbar_Action"
      >
        {query ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="3rem"
            className="Jobs_Navbar_Action_Links_Container"
          >
            <Link to="/" className="Jobsly_Navbar_Action_Links">
              <Typography
                variant="subtitle1"
                fontFamily={"Gilroy,sans-serif"}
                fontWeight="600"
                color="var(--secondary-color)"
                className="Jobsly_Navbar_Action_Links_Text_Login"
                fontSize="1.1rem"
              >
                Login
              </Typography>
            </Link>

            <Link to="/" className="Jobsly_Navbar_Action_Links_Secondary">
              <p className="Jobsly_Navbar_Action_Links_Text">Sign Up</p>
            </Link>
          </Box>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            width="75%"
            justifyContent="flex-end"
            height="3rem"
          >
            <button style={{ zIndex: 15 }} className="nav-btn" onClick={() => { setOpened(!opened) }}> Click</button>
          </Box>
        )}
      </Grid>
      {opened && !query && <Mobile_nav font={bodyFont} opened={opened} setOpened={setOpened} />}
    </Grid>
  );
};

export default Navbar;
