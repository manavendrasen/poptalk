import React, { useState, ReactNode } from "react";
import {
  Box,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Navigator } from "./Navigator";
import { Drawer } from "./StyledDrawer";
import { DrawerHeader } from "./StyledDrawerHeader";
import { HOME, LOGIN } from "../../constants/routes";
import styles from "../../assets/jss/components/DrawerLayoutStyles/DashboardLayoutStyles";
import { Header } from "./Header";

interface IDashboardMenu {
  children: ReactNode | any | null;
}

export const DashboardMenu: React.FC<IDashboardMenu> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const pathsToExclude: string[] = [HOME, LOGIN];

  if (!pathsToExclude.includes(pathname)) {
    return (
      <Box sx={{ display: "flex" }}>
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />

        <Drawer
          sx={{
            backgroundColor: "primary.main",
          }}
          variant='permanent'
          open={open}
        >
          {matches && (
            <>
              <DrawerHeader>
                <Box>
                  {open ? (
                    <IconButton
                      sx={styles.leftButton}
                      onClick={handleDrawerClose}
                    >
                      <IoMenu />
                    </IconButton>
                  ) : (
                    <IconButton
                      color='inherit'
                      aria-label='open drawer'
                      onClick={handleDrawerOpen}
                      edge='start'
                      sx={styles.menuIcon}
                    >
                      <IoMenu />
                    </IconButton>
                  )}
                </Box>
              </DrawerHeader>
              <Divider />
            </>
          )}
          <Navigator />
        </Drawer>
        <Box component='main' sx={styles.container}>
          {children}
        </Box>
      </Box>
    );
  }
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};
