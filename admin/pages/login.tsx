import React, { useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Logo from "../../../assets/logo.png";
import LoginForm from "../src/components/Auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
const styles = {
  container: {
    height: "100vh",
    position: "relative",
    width: { xs: "95%", sm: "450px" },
    margin: "auto",
  },
  contentContainer: {
    flex: "55",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    gap: "20px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
    width: "100%",
    border: "none rgb(230, 235, 241)",
    borderRadius: "10px",
  },
  contentInnerBox: {
    padding: "20px 40px 30px",
    gap: "20px",
  },
  logoImage: {
    width: "50px",
    height: "50px",
    "&:hover": {
      cursor: "pointer",
    },
    margin: "auto",
  },
  appTitle: {
    fontSize: "20px",
    color: "#078989",
    textAlign: "center",
  },
  pageTitle: {
    mt: "10px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#000000",
    textAlign: "center",
    fontSize: { xs: "28px", md: "32px", lg: "32px" },
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

    lineHeight: "0px",
    fontSize: { xs: "20px", lg: "24px" },
    fontWeight: 600,
  },
};

const LoginPage = () => {
  //   const { currentUser } = useSelector((state) => state.users);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (currentUser) {
  //       navigate("/");
  //     }
  //   }, [currentUser, navigate]);

  return (
    <Stack>
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <Stack sx={styles.logoContainer2}>
          <Image
            src="/assets/images/logo2.png"
            alt="log"
            height="25"
            width="25"
          />
          <Typography sx={styles.hopeText}>HFC</Typography>
        </Stack>
      </Link>

      <Stack sx={styles.container}>
        <Stack sx={styles.contentContainer}>
          <Stack sx={styles.contentBox}>
            <Stack sx={styles.contentInnerBox}>
              <Typography sx={styles.pageTitle}>Login</Typography>
              <LoginForm />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
