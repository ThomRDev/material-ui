import {
	Box,
	AppBar,
	Toolbar,
	Container,
	Grid,
	Stack,
	Typography,
	IconButton,
	Button,
	Badge,
	Switch,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks';
import { useAppSelector } from '../store';
import { Cart } from './Cart';
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export const NavBar = () => {
	const navigate = useNavigate();
	const { toggleChangeTheme } = useTheme();
	const { cart } = useAppSelector(state => state.cart);

	const [openCartMenu, setOpenopenCartMenu] = useState<boolean>(false);

	const handleStateViewDrawer = () => {
		setOpenopenCartMenu(state => !state);
	};

	return (
		<Box>
			<AppBar position='sticky'>
				<Toolbar>
					<Container maxWidth='xl'>
						<Grid
							container
							direction={'row'}
							justifyContent={'space-between'}
							alignItems={'center'}
						>
							<Grid item>
								<Typography>Thom&apos;s Software</Typography>
							</Grid>
							<Grid item>
								{/* spacing = gap en material ui */}
								<Stack direction={'row'} spacing={2}>
									<IconButton color='primary' onClick={handleStateViewDrawer}>
										{/* este badge sera la notificacion con el badgeContent con un numero */}
										<Badge color='error' badgeContent={cart.length}>
											<ShoppingCartOutlinedIcon />
										</Badge>
									</IconButton>
									<Button
										variant='contained'
										onClick={() => navigate('/login')}
									>
										Login
									</Button>
									<Button variant='outlined'>Register</Button>
									<Switch
										{...label}
										defaultChecked
										color='default'
										onChange={toggleChangeTheme}
									/>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
			<Cart open={openCartMenu} handleStateViewDrawer={handleStateViewDrawer} />
		</Box>
	);
};
