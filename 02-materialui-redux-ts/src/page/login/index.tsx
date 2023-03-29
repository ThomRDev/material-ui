import {
	Container,
	Grid,
	Paper,
	Typography,
	Box,
	TextField,
	Button,
} from '@mui/material';
import { useFormik } from 'formik';
import { LoginValidate } from '../../helpers';
import { useNotification } from '../../hooks';

type LoginType = {
	username: string;
	password: string;
};

const LoginPage = () => {
	const { getSuccess } = useNotification();

	const formik = useFormik<LoginType>({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: LoginValidate,
		onSubmit: values => {
			getSuccess(JSON.stringify(values));
		},
	});

	return (
		<Container maxWidth='sm'>
			<Grid
				container
				direction={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				sx={{ mt: 4 }}
			>
				<Grid item>
					{/* Paper simplemente es un componente con un diseño como un papel */}
					<Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
						<Typography sx={{ mt: 1, mb: 1 }} variant='h4'>
							Iniciar Sesion
						</Typography>
						<Box component={'form'} onSubmit={formik.handleSubmit}>
							<TextField
								name='username'
								label='Username'
								autoComplete='off'
								type='text'
								fullWidth
								value={formik.values.username}
								onChange={formik.handleChange}
								error={
									formik.touched.username && Boolean(formik.errors.username)
								}
								helperText={formik.touched.username && formik.errors.username}
								sx={{ mt: 2, mb: 1.5 }}
								margin='normal'
							/>
							<TextField
								name='password'
								margin='normal'
								type='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password && Boolean(formik.errors.password)
								}
								helperText={formik.touched.username && formik.errors.password}
								fullWidth
								label='Password'
								sx={{ mt: 1.5, mb: 1.5 }}
							/>

							<Button
								fullWidth
								type='submit'
								variant='contained'
								sx={{ mt: 1.5, mb: 3 }}
							>
								Iniciar sesion
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default LoginPage;
