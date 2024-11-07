import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export default function LoginRegister() {
  const [isRegister, setIsRegister] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if (isRegister) {
      const username = data.get('username');
      const email = data.get('email');
      const password = data.get('password');
      const confirmPassword = data.get('confirmPassword');

      if (password !== confirmPassword) {
        alert("Passwörter stimmen nicht überein");
        return;
      }

      // Registrierungslogik hier einfügen
      console.log("Registrierung erfolgreich:", { username, email, password });
      
    } else {
      const email = data.get('email');
      const password = data.get('password');

      // Login-Logik hier einfügen
      console.log("Login erfolgreich:", { email, password });
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: 'auto',
        padding: 20,
        borderRadius: 2,
        boxShadow: 3,
        mt: 5,
      }}
    >
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        {isRegister ? "Register" : "Login"}
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {isRegister && (
            <TextField
              label="Username"
              variant="outlined"
              name="username"
              required
              fullWidth
            />
          )}
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            required
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            required
            fullWidth
          />
          {isRegister && (
            <TextField
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              type="password"
              required
              fullWidth
            />
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            {isRegister ? "Register" : "Login"}
          </Button>
        </Stack>
      </form>
      
      <Box mt={2} textAlign="center">
        <Link href="#" onClick={toggleForm}>
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </Link>
      </Box>
    </Box>
  );
}
