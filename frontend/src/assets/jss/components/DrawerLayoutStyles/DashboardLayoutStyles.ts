import theme from "../../../../theme";

const styles = {
  container: {
    flexGrow: 1,
    paddingTop: theme.mixins.toolbar.minHeight,
    borderTop: "1px solid #000",
    marginBottom: {
      xs: "4rem",
      sm: "4rem",
      md: "0",
    },
  },
  leftButton: {
    color: "#FFF",
    backgroundColor: "primary.light",
  },
  menuIcon: {
    color: ["#000", "#000", "#FFF", "#FFF"],
    paddingRight: "1rem",
  },
};

export default styles;
