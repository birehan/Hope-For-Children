const useStyles = () => {
  return {
    container: {
      "flex-direction": { xs: "row" },
      width: { xs: "95%", md: "90%", lg: "85%" },
      margin: { xs: "50px auto", lg: "0px auto" },
      gap: { xs: "30px", lg: "50px" },
      position: { xs: "relative", lg: "absolute" },
      bottom: { xs: "0", lg: "-50px", xl: "50px" },
      zIndex: 10,
      left: 0,
      right: 0,
      // border: "3px solid green",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "0px",
      alignItems: "center",
      justifyContent: "center",
      background: "#FFFFFF",
      boxShadow: "4px 4px 30px 18px rgba(0, 0, 0, 0.08)",
      borderRadius: "30px",
      // height: "300px",
      zIndex: "10",
      height: "100%",
      padding: "10px 0px",
    },
    media: {
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "top center",
    },
    title: {
      fontWeight: "bold",
    },
    description: {
      marginBottom: "10px",
    },
    button: {
      borderRadius: "50px",
      padding: "5px 30px",
      color: "#00b1f4",
      border: "1px solid #00b1f4",
      "&:hover": {
        backgroundColor: "#00b1f4",
        color: "white",
        border: "1px solid white",
      },
    },
    landingContainer: {
      height: { xs: "500px", md: "600px", lg: "100vh" },
      width: "100vw",
      position: "relative",
    },
    landingText: {
      color: "#E9ECEB",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: { xs: "30px", sm: "38px", md: "48px", lg: "56px" },
      lineHeight: { xs: "40px", md: "72px" },
      textAlign: "center",
    },
    landingDesc: {
      color: "#E9ECEB",
      fontStyle: "normal",
      fontSize: { xs: "18px", sm: "22px", md: "28px" },
      textAlign: "center",
      lineHeight: { xs: "32px", md: "72px" },
      fontWeight: "500",
    },
    swipeImage: {
      width: { xs: "80vw", md: "90vw", lg: "85vw" },
      height: { xs: "500px", md: "600px", lg: "700px" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      filter: "brightness(100%)",
      zIndex: 10,
      // margin: "0px 50px",
      // border: "3px solid green",
    },
    donateButton: {
      textDecoration: "none",
      borderRadius: "30px",
      color: "white",
      padding: { xs: "4px 12px", md: "8px 20px" },
      border: "1px solid #00B1F4",
      background: "#00B1F4 !important",

      "&:hover": {
        color: "white",
        border: "1px solid white",
        transition: "400ms all ease-in-out",
        background: "transparent !important",
      },
      fontSize: "1.1rem",
    },
    videoButton: {
      textDecoration: "none",
      borderRadius: "30px",
      padding: { xs: "4px 12px", md: "8px 20px" },

      border: "1px solid white",
      color: "white",
      background: "transparent !important",

      "&:hover": {
        background: "#00B1F4 !important",
        color: "white",
        border: "1px solid #00B1F4",
        transition: "400ms all ease-in-out",
      },
      fontSize: "1.1rem",
    },
    buttonContainer: {
      flexDirection: "row",
      gap: "30px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    },
  };
};

export default useStyles;
