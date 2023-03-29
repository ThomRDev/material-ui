import { Drawer, Box, Stack, Divider, Typography } from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../store';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { HorizontalCardComponent } from '../components';

type CartProps = {
	open: boolean;
	handleStateViewDrawer: () => void;
};

export const Cart: FC<CartProps> = ({ open, handleStateViewDrawer }) => {
	const { cart } = useAppSelector(state => state.cart);

	return (
		<Drawer anchor='right' open={open}>
			<Box sx={{ width: '25em', p: 2 }}>
				<Stack
					direction={'row'}
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography variant='h5'>Cart</Typography>
					<IconButton color='primary' onClick={handleStateViewDrawer}>
						<CloseRoundedIcon />
					</IconButton>
				</Stack>
				<Divider sx={{ my: 1.5 }} />
				{cart.length ? (
					<>
						{cart.map(({ id, image, name, info }) => (
							<HorizontalCardComponent
								key={id}
								id={id}
								image={image}
								name={name}
								info={info}
							/>
						))}
					</>
				) : (
					'Vacio'
				)}
			</Box>
		</Drawer>
	);
};
