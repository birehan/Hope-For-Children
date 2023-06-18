import { useState } from "react";
import {
  Button,
  Stack,
  Typography,
  Input,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm, RegisterOptions } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import HelperText from "../HelperText";

const styles = {
  redText: {
    color: "red",
    textAlign: "center",
    mb: "10px",
  },
  input: {
    m: "15px 0 !important",
    padding: "4px 8px !important",
    borderRadius: "3px",
    border: "1px groove silver",
    fontSize: "16px",
    transition: "border-color 0.3s", // Add transition for a smooth effect
    "&:hover": {
      borderColor: "#00b1f4", // Change the border color on hover
    },
  },

  forgetPassword: {
    margin: "20px",
    textAlign: "center",
    color: "#00b5be",
    "&:hover": {
      cursor: "pointer",
    },
  },
  submitButtonStyle: {
    width: "100%",
    background: "#00b1f4 !important",
    color: "white",

    fontWeight: "bold",
    m: "20px auto 0",
    fontSize: "1rem",
    "&:hover": {
      background: "#00bbff !important",
      transition: "400ms all easy-in",
    },
    display: "flex",
    padding: "8px40px !important",
  },
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {},
  });

  const onSubmit = (data: any) => {};
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <Stack sx={{ width: "100%", gap: "10px", borderRadius: "10px" }}>
      {/* {loading && <SpinnerComponent />} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {message && <Typography sx={styles.redText}>{message}</Typography>} */}

        <HelperText text="Email Address" />
        <FormControl variant="outlined" fullWidth>
          <Input
            disableUnderline={true}
            sx={styles.input}
            placeholder="Enter email address"
            type="email"
            inputProps={{
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }),
            }}
            id="outlined-basic email"
          />

          {!!errors.email && (
            <FormHelperText
              sx={{
                margin: "-8px 0 0 !important",
                fontSize: "16px",
              }}
              error
              id="email-error"
            >
              {errors.email && errors.email.message}
            </FormHelperText>
          )}
        </FormControl>

        <HelperText text="Password" />
        <FormControl variant="outlined" fullWidth>
          <Input
            sx={styles.input}
            disableUnderline={true}
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            id="outlined-basic password"
          />
          {!!errors.password && (
            <FormHelperText
              sx={{
                margin: "-8px 0 0 !important",
                fontSize: "16px",
              }}
              error
              id="password-error"
            >
              {errors.password && errors.password.message}
            </FormHelperText>
          )}
        </FormControl>
        <Stack sx={{ flexDirection: "row", justifyContent: "right" }}>
          <Typography
            sx={{
              borderBottom: "1px solid white",

              "&:hover": {
                cursor: "pointer",
                borderBottom: "1px solid silver",
              },
              width: "fit-content",
              margin: "0px 0 10px",
              fontSize: "16px",
            }}
          >
            Forget password?
          </Typography>
        </Stack>

        <Button sx={styles.submitButtonStyle} type="submit">
          Login
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
