import {
	Container,
	Button,
	Box,
	CircularProgress,
	Grid,
	Pagination,
} from '@mui/material';
import { useState, useEffect, ChangeEvent } from 'react';
import { characters } from '../../api';
import { HeaderComponent } from '../../components';
import { Character } from '../../shared/interfaces';
import CardComponent from '../../components/card/index';

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [totalPages, setTotalPages] = useState(0);
	const [allCharacters, setAllCharacters] = useState<Character[] | null>(null);

	const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		setLoading(true);
		characters
			.getAll({ page: currentPage })
			.then(response => {
				setTotalPages(response.data.info.pages);
				// cargados solo en la primera pagina
				setAllCharacters(response.data.results);
			})
			.finally(() => {
				setTimeout(() => setLoading(false), 1500);
			});
	}, [currentPage]);

	return (
		<Container maxWidth='xl'>
			<HeaderComponent
				description='Cards'
				title='Imagenes'
				element={
					<Button fullWidth variant='contained'>
						Ver mas imagenes
					</Button>
				}
			/>
			{loading ? (
				<>
					<Box sx={{ display: 'grid', placeItems: 'center', mt: 4 }}>
						<CircularProgress size={50} />
					</Box>
				</>
			) : (
				<>
					<div>
						{allCharacters?.length !== 0 ? (
							<Grid container spacing={2} direction={'row'}>
								{allCharacters?.map(character => (
									<Grid key={character.id} item xs={3}>
										<CardComponent
											id={character.id}
											image={character.image}
											name={character.name}
											status={character.name}
											species={character.species}
										/>
									</Grid>
								))}
							</Grid>
						) : (
							'No data'
						)}
					</div>
					<Box
						sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
					>
						<Pagination
							variant='outlined'
							color='primary'
							count={totalPages}
							page={currentPage}
							sx={{ mb: 3 }}
							onChange={handleChangePage}
							size='large'
						/>
					</Box>
				</>
			)}
		</Container>
	);
}
