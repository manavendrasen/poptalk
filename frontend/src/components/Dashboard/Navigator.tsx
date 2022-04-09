import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ListItemIcon,
  ListItem,
  List,
  ListItemText,
  Box,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { menuRoutes } from "../../constants/menuRoutes";
import styles from "../../assets/jss/components/DrawerLayoutStyles/DrawerStyles";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

interface INavigatorProps {}

export const Navigator: React.FC<INavigatorProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const avatarMenuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // dispatch(logout(navigate));
    setAnchorEl(null);
  };

  const { pathname } = useLocation();

  const name = "John Doe";
  return (
    <Box sx={styles.root}>
      <List>
        {menuRoutes.map(({ id, children }) => (
          <Box
            key={id}
            sx={{
              // borderBottom: "1px solid",
              // borderColor: "background.paper",
              marginBottom: "1rem",
            }}
          >
            {children.map(({ id: childId, icon, route }) => (
              <Link
                key={childId}
                to={route}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <ListItem
                  sx={{
                    ...styles.listItem,
                    ...(pathname.includes(route) && styles.itemActiveLink),
                  }}
                  button
                >
                  <ListItemIcon
                    sx={{
                      ...styles.icon,
                      ...(pathname.includes(route) && styles.itemActiveIcon),
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      sx={{
                        ...(pathname.includes(route) && styles.itemActiveTitle),
                      }}
                      variant='body1'
                    >
                      {childId}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </Box>
        ))}
      </List>
      <Box sx={styles.navLinks}>
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
          <Avatar sx={styles.avatar}>{name[0]}</Avatar>
        </IconButton>
        <ListItemText>
          <Typography variant='body1'>Profile</Typography>
        </ListItemText>
      </Box>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={avatarMenuOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <IoLogOutOutline />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};
