import { Box, Grid, Typography, Divider } from '@mui/material';
import { ReactNode, FC } from 'react';

type HeaderComponentProps = {
	title: string;
	description: string;
	element?: ReactNode | null;
};

const HeaderComponent: FC<HeaderComponentProps> = ({
	title,
	description,
	element,
}) => {
	return (
		<div>
			<Box sx={{ width: '100%', height: '350px' }}>
				<Grid
					container
					justifyContent={'center'}
					alignItems={'center'}
					sx={{ height: '100%' }}
				>
					<Grid item xs={5}>
						<Grid
							container
							direction={'column'}
							justifyContent={'center'}
							alignItems={'center'}
							sx={{ height: '100%' }}
						>
							<Grid item>
								<Typography variant='h1'>{title}</Typography>
							</Grid>
							<Grid item sx={{ mt: 2 }}>
								<Typography>{description}</Typography>
							</Grid>
							{element != null && (
								<Grid sx={{ mt: 4, width: '100%' }} item>
									{element}
								</Grid>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Divider />
		</div>
	);
};

export default HeaderComponent;
