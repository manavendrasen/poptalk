const styles = {
  root: {
    height: "100%",
    paddingY: "14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    color: "background.default",
    paddingLeft: {
      xs: "0px",
      md: "8px",
    },
  },
  itemActiveTitle: {
    fontWeight: "500",
    color: "secondary.main",
  },
  itemActiveIcon: {
    color: "secondary.main",
    marginLeft: "-4px",
  },
  listItem: {},

  itemActiveLink: {
    borderLeft: "4px solid",
    borderColor: "secondary.main",
  },

  navOpen: {
    paddingLeft: ["2rem", "2rem", "32px", "32px"],
  },
  navLinks: {
    display: "flex",
    // flexGrow: "1",
    justifyContent: "center",
    gap: "0.5rem",
    alignItems: "center",
  },
  heading: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    color: "primary.light",
    fontWeight: "500",
  },

  avatar: {
    backgroundColor: "primary.light",
    width: {
      xs: 32,
      md: 48,
    },
    height: {
      xs: 32,
      md: 48,
    },
  },
};

export default styles;
