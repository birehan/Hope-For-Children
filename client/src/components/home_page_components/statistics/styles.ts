const useStyles = () => {
  return {
    statContainer: {
      height: { xs: "fit-content", md: "450px" },
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: { xs: "30px", md: "50px" },
      width: {
        xs: "95vw",
        md: "90vw",
        lg: "85vw",
      },
      position: "relative",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(40%)",
      borderRadius: "10px",
    },
    statListContainer: {
      width: "90%",
      height: "90%",
      zIndex: 10,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "20px",
      margin: { xs: "20px 0", sm: "50px 0" },
    },
  };
};

export default useStyles;
