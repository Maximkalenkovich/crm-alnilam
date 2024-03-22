import React, {FormEvent, useState} from "react";
import {Box, Button, Container, TextField} from "@mui/material";
import {Typography} from "@material-ui/core";

export const RegistrationPage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер или выполнения других действий после отправки формы
        console.log('Submitted:', { username, email, password });
    };

    return (
        <Container maxWidth="sm" >
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
                        Register
                    </Button>
                </Box>
            </Box>

        </Container>
    );
};
