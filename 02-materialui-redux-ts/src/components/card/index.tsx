import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Divider,
	Button,
} from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { addToCart } from '../../store/slices';
import { setItem } from '../../helpers';

type CardComponentProps = {
	image: string;
	name: string;
	status: string;
	species: string;
	id: number;
};

const CardComponent: FC<CardComponentProps> = ({
	image,
	name,
	status,
	id,
	species,
}) => {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const onAddToCart = () => {
		dispatch(
			addToCart({
				id,
				image,
				info: status,
				name,
			})
		);
	};

	const cartUpdated = useAppSelector(state => state.cart);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		setDisabled(cartUpdated.cart.some(item => item.id === id));
		setItem('cart', cartUpdated);
	}, [id, cartUpdated]);

	return (
		<Card>
			<CardMedia component={'img'} height='194' image={image} />
			<CardContent>
				<Typography variant='h4' sx={{ mb: 1.5 }}>
					{name}
				</Typography>
				<Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
				<Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
				<Divider />
			</CardContent>
			<CardActions>
				<Button
					fullWidth
					size='small'
					variant='contained'
					onClick={() => {
						navigate(`/character/${id}`);
					}}
				>
					Learn More
				</Button>
				<Button
					fullWidth
					variant='outlined'
					size='small'
					onClick={onAddToCart}
					disabled={disabled}
				>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
};

export default CardComponent;
