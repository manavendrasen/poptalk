import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Link,
  Avatar,
  MenuItem,
  Stack,
  Menu,
  Button,
  Divider,
  ListItemIcon,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
  Slide,
} from "@mui/material";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  IoSettingsOutline,
  IoLogOutOutline,
  // IoPersonCircleOutline,
  // IoMenu,
} from "react-icons/io5";
import { AppBar } from "./StyledAppBar";
import styles from "../../assets/jss/components/DrawerLayoutStyles/HeaderStyles";
// import { RootState } from "../../app/rootReducer";
// import { logout } from "../../slices/authSlice";

interface IHeaderProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ handleDrawerOpen, open }) => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const trigger = useScrollTrigger();

  const slideIn = matches || !trigger;

  // const { name } = useSelector((state: RootState) => {
  //   return {
  //     name: state.auth.name,
  //   };
  // }, shallowEqual);

  const name = "Somil Gupta";

  return (
    <Slide in={slideIn}>
      <AppBar position='fixed' open={open}>
        <Toolbar
          sx={{
            ...styles.nav,
            ...(open && styles.navOpen),
            ...(trigger && styles.navTrigger),
          }}
        >
          <Typography sx={styles.heading} noWrap component='h6'>
            POPTALK!
          </Typography>
          {/* <Box sx={styles.navLinks}>
            <IconButton
              sx={{
                borderRadius: 1,
              }}
              id='basic-button'
              aria-controls={avatarMenuOpen ? "basic-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={avatarMenuOpen ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography
                variant='body2'
                sx={{
                  color: "primary.main",
                }}
              >
                {name}
              </Typography>
              <Avatar sx={styles.avatar}>{name[0]}</Avatar>
            </IconButton>

            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={avatarMenuOpen}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <IoSettingsOutline />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <IoLogOutOutline />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
