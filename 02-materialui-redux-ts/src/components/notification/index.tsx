import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import { FC } from 'react';

type NotificationProps = {
	open: boolean;
	msg: string;
	handleClose: () => void;
	// type
	severity?: AlertColor | null;
};

const Notification: FC<NotificationProps> = ({
	open,
	msg,
	handleClose,
	severity,
}) => {
	return (
		<Snackbar
			// posiciones de la notificacion
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			autoHideDuration={4000}
			open={open}
			onClose={handleClose}
		>
			<Alert severity={severity ?? undefined} onClose={handleClose}>
				<Typography>{msg}</Typography>
			</Alert>
		</Snackbar>
	);
};

export default Notification;
