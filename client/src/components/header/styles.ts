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
      fontSize: { md: "18px", lg: "20px", xl: "22px" },
      flexDirection: "row",
      gap: "0px",
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

    // Drawer styles

    drawerSite: {
      color: "black",
      fontSize: { lg: "27px", md: "22px" },
      textDecoration: "none",
      p: "5px 0",
      "&:hover": {
        cursor: "pointer",
        color: "#4d99b6",
        transition: "300ms all ease-in",
      },
      width: "100%",
    },

    logoImage: {
      width: "40px",
      height: "40px",
    },
    drawerTitle: {
      fontSize: "22px",
      color: "#00b1f4",
    },
    listItem: {
      color: "black",
      fontSize: { lg: "27px", md: "22px" },
      textDecoration: "none",
      p: "5px 0",
      "&:hover": {
        cursor: "pointer",
        color: "#4d99b6",
        transition: "300ms all ease-in",
      },
      width: "100%",
    },
    listItemText: {
      fontSize: "1.2rem",
      fontWeight: "400",
    },
    // header styles
    header: {
      position: "fixed",
      top: 0,
      height: "60px",
      width: "100%",
      zIndex: 100,
      background: "rgba(70, 69, 81, 0.62)",
      backdropFilter: "blur(5px)",
    },
    smallScreenContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      height: "100%",
      width: { xs: "95%", md: "90%" },
      margin: "auto",
    },
    logoContainer2: {
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
      },
    },
    hopeText: {
      color: "#00B1F4",
      fontStyle: "normal",

      lineHeight: "42px",
      fontSize: { xs: "24px", lg: "28px" },
      fontWeight: 700,
    },

    largeLogoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      padding: { md: "0px 0px", lg: "0px 0px" },
      color: "white",
      width: { md: "90%", lg: "85%" },
      margin: "auto",
    },
    navLink: {
      fontWeight: 500,
      fontSize: { md: "18px", lg: "20px", xl: "22px" },

      "&:hover": {
        cursor: "pointer",
        color: "#00B1F4",
        transition: "all 400ms ease",
      },
    },
    donateButton: {
      textDecoration: "none",
      borderRadius: "30px",
      color: "white",
      padding: "6px 20px",
      border: "1px solid #00B1F4",
      background: "#00B1F4 !important",

      "&:hover": {
        color: "#00B1F4",
        border: "1px solid #00B1F4",
        transition: "400ms all ease-in-out",
        background: "transparent !important",
      },
    },
  };
};

export default useStyles;
