const useStyles = () => {
  return {
    stackSmallScreen: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "left",
      "&:hover": {
        cursor: "pointer",
        color: "#00B1F4",
        transition: "all 400ms ease",
      },
    },
    listItemSmallScreen: {
      width: "fit-content",
    },
    stackLargeScreen: {
      fontWeight: 450,
      fontSize: { md: "20px", lg: "22px", xl: "24px" },
      flexDirection: "row",
      gap: "5px",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
        color: "#00B1F4",
        transition: "all 400ms ease",
      },
    },
    stackMenu: {
      width: "130px",
      padding: "10px 0 10px",
      color: "#00B1F4",
    },
    menuItem: {
      fontWeight: 400,
      fontSize: "1.1rem",
    },
    divider: {
      marginTop: "8px",
    },
    drawerSite: {
      color: "black",
      textDecoration: "none",
      p: "5px 0",
      width: "100%",
      fontSize: { lg: "27px", md: "22px" },
      "&:hover": {
        cursor: "pointer",
        color: "#4d99b6",
        transition: "300ms all ease-in",
      },
    },
    drawerHeader: {
      textDecoration: "none",
      color: "#078989",
      fontSize: "24px",
      fontWeight: "bold",
    },
    logo: {
      width: "40px",
      height: "40px",
    },
    logoTitle: {
      color: "#00B1F4",
      fontStyle: "normal",
      lineHeight: "42px",
      fontSize: "28px",
      fontWeight: 700,
    },
    title: {
      fontSize: "22px",
      color: "#00b1f4",
      fontWeight: 500,
    },
    link: {
      color: "black",
      textDecoration: "none",
      width: "100%",
      fontSize: { lg: "27px", md: "22px" },
      "&:hover": {
        cursor: "pointer",
        color: "#00B1F4",
        transition: "300ms all ease-in",
      },
    },
    listItem: {
      flexDirection: "column",
    },

    header: {
      position: "absolute",
      top: 0,
      height: "75px",
      width: "100%",
      zIndex: "10",
      background: "rgba(70, 69, 81, 0.62)",
      backdropFilter: "blur(5px)",
    },
    stackContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      padding: { md: "0px 20px", lg: "0px 100px" },
      color: "white !important",
    },
    logoContainer: {
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
    },

    navLinksContainer: {
      flexDirection: "row",
      gap: { md: "15px", lg: "20px", xl: "50px" },
    },
    navLink: {
      fontWeight: 450,
      fontSize: { md: "20px", lg: "22px", xl: "24px" },
      "&:hover": {
        cursor: "pointer",
        color: "#00B1F4 !important",
        transition: "all 400ms ease",
      },
      color: "white !important",
    },
    donateButton: {
      background: "#00B1F4",
      textDecoration: "none",
      borderRadius: "30px",
      color: "white",
      padding: "10px 20px",
      border: "1px solid #00B1F4",
      "&:hover": {
        color: "#00B1F4",
        border: "1px solid #00B1F4",
        transition: "400ms all ease-in-out",
      },
      fontWeight: 500,
    },
    drawerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    drawerLink: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      display: "flex",
      textDecoration: "none",
    },
  };
};

export default useStyles;
