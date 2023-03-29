import { FC } from 'react';
import {
	Card,
	CardMedia,
	Grid,
	CardContent,
	CardActions,
	Typography,
	Divider,
	IconButton,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from '../../store';
import { removeToCart } from '../../store/slices';

type HorizontalCardComponentProps = {
	id: string | number;
	image: string;
	name: string;
	info: string;
};

const HorizontalCardComponent: FC<HorizontalCardComponentProps> = ({
	id,
	image,
	name,
	info,
}) => {
	const dispatch = useAppDispatch();

	const onRemoveItemFromCart = () => {
		dispatch(removeToCart(id));
	};

	return (
		<Card sx={{ display: 'flex', my: 2 }}>
			<CardMedia component={'img'} image={image} sx={{ width: 151 }} />
			<Grid container sx={{ mx: 1 }}>
				<Grid item xs={9}>
					<CardContent>
						<Typography variant='h4'>{name}</Typography>
						<Divider />
						<Typography variant='h6'>{info}</Typography>
					</CardContent>
				</Grid>
				<Grid item xs={2}>
					<CardActions>
						<IconButton onClick={onRemoveItemFromCart}>
							<CloseRoundedIcon />
						</IconButton>
					</CardActions>
				</Grid>
			</Grid>
		</Card>
	);
};

export default HorizontalCardComponent;
