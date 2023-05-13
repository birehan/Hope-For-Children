const useStyles = () => {
  return {
    projectContainer: {
      margin: { xs: "50px auto", lg: "220px auto 80px" },
      alignItems: "center",
    },
    projectText: {
      color: "#00b1f4",
      fontWeight: "bold",
      fontSize: { lg: "3rem" },
      marginBottom: "30px",
    },
    projectListContainer: {
      background: "#E6EFFA",
      width: "100%",
      padding: "50px 0px 30px",
      alignItems: "center",
    },
    container: {
      "flex-direction": { xs: "row" },
      width: { xs: "90%", xl: "80%" },
      margin: { xs: "50px auto", lg: "0px auto" },
      gap: { xs: "30px", lg: "50px" },
      position: { xs: "relative", lg: "absolute" },
      bottom: { xs: "0", lg: "-200px" },
      zIndex: 100,
      left: 0,
      right: 0,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
      justifyContent: "center",
      background: "#FFFFFF",
      boxShadow: "none",
      borderRadius: "15px",
      // height: "550px",
      border: "2px solid rgba(102, 102, 102, 0.08)",
    },
    media: {
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "top center",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#00b1f4",
    },
    description: {
      marginBottom: "20px",
    },
    button: {
      borderRadius: "50px",
      padding: "10px 30px",
      color: "#00b1f4",
      border: "1px solid #00b1f4",
      "&:hover": {
        backgroundColor: "#00b1f4",
        color: "white",
        border: "1px solid white",
      },
    },
  };
};

export default useStyles;
