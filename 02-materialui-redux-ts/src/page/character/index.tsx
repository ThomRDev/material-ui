import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
	Box,
	Container,
	Grid,
	CircularProgress,
	Typography,
	Divider,
	Chip,
} from '@mui/material';
import { characters } from '../../api';
import { Character } from '../../shared/interfaces';

const CharacterPage = () => {
	const { id } = useParams();

	const [loading, setLoading] = useState(true);

	const [character, setCharacter] = useState<Character | null>(null);

	useEffect(() => {
		setLoading(true);
		characters
			.getById(id as string)
			.then(response => {
				setCharacter(response.data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	return (
		<Box sx={{ width: '100%' }}>
			<Container maxWidth='xl'>
				{loading ? (
					<Box sx={{ display: 'grid', placeItems: 'center' }}>
						<CircularProgress />
					</Box>
				) : (
					<Grid sx={{ mt: 2 }} container columnSpacing={2}>
						<Grid item xs={6}>
							<Typography variant='h1'>{character?.name}</Typography>
							<Divider />
							<Typography variant='h6'>{character?.origin.name}</Typography>
							<Box sx={{ mt: 2 }}>
								<Chip
									color='primary'
									variant='outlined'
									label={character?.status}
								/>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<img
								src={character?.image}
								alt={character?.name}
								style={{ width: '100%', borderRadius: '0.5em' }}
							/>
						</Grid>
					</Grid>
				)}
			</Container>
		</Box>
	);
};

export default CharacterPage;
