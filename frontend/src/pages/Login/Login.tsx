import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { supabase } from "../../supabaseClient";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [loading, setLoading] = useState(false);

  const handleTwitterLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({
        provider: "twitter",
      });

      if (error) throw error;
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 20,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sizes='large'
            sx={{ m: 4, bgcolor: "secondary.main", width: 80, height: 80 }}
          >
            <AccountCircleIcon sx={{ width: 100, height: 100 }} />
          </Avatar>
          <Typography component='h1' variant='h5'>
            SignIn
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleTwitterLogin}
            sx={{ mt: 1 }}
          >
            <Button
              type='submit'
              fullWidth
              color='primary'
              variant='contained'
              sx={{ mt: 4, mb: 2 }}
            >
              {loading ? (
                "Loading..."
              ) : (
                <>
                  LogIn thorugh Twitter
                  <TwitterIcon sx={{ m: 0.5 }} />
                </>
              )}
            </Button>
            <Grid container>
              <Grid item>
                <Link sx={{ m: 3 }} href='https://twitter.com/' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
