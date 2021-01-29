import React, { useState } from "react";
import useStyles from "./styles";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";

const Auth = () => {
	const classes = useStyles();
	const [isSignup, setIsSignup] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = () => {};

	const handleChange = () => {};

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		handleShowPassword(false);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
				<form onSubmit={handleSubmit} className={classes.form}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								></Input>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								></Input>
							</>
						)}
						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						></Input>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleShowPassword={handleShowPassword}
						></Input>
						{isSignup && (
							<Input
								name="confirmPassword"
								label="Repeat password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignup ? "Sign Up" : "Sign In"}
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? "Already have an account? Sign In"
									: " Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
