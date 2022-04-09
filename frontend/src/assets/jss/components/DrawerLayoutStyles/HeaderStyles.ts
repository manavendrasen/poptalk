const styles = {
  menuIcon: {
    color: ["#000", "#000", "#FFF", "#FFF"],
    paddingLeft: {
      xs: "24px",
      md: "12px",
    },
    marginRight: {
      xs: "12px",
      md: "48px",
    },
  },
  navTrigger: {
    backDropFilter: "blur(10px)",
  },
  logoutLink: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "warning.main",
    "&:hover": {
      color: "warning.dark",
    },
  },
  nav: {
    paddingLeft: ["2rem", "2rem", "104px", "104px"],
    paddingRight: ["1rem", "1rem", "1.5rem", "1.5rem"],
    backgroundColor: "background.default",
    transition: "all 0.0s ease",
  },

  navOpen: {
    paddingLeft: ["2rem", "2rem", "32px", "32px"],
  },
  navLinks: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "end",
    gap: "0.5rem",
    alignItems: "end",
  },
  heading: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    color: "primary.light",
    fontWeight: "500",
  },

  avatar: {
    backgroundColor: "primary.light",
    marginLeft: "0.5rem",
    width: {
      xs: 28,
      md: 32,
    },
    height: {
      xs: 28,
      md: 32,
    },
  },
};

export default styles;
