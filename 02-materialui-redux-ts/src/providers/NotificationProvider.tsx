import { NotificationContext } from '../contexts';
import { ReactNode, FC, useState, useCallback } from 'react';
import { AlertColor } from '@mui/material';
import { Notification } from '../components';

type NotificationProviderProps = {
	children: ReactNode;
};

type State = {
	open: boolean;
	msg: string;
	severity?: AlertColor | null;
};

export const NotificationProvider: FC<NotificationProviderProps> = ({
	children,
}) => {
	const [state, setState] = useState<State>({
		msg: '',
		open: false,
		severity: null,
	});

	const getError = useCallback((msg: string) => {
		setState(prev => ({
			...prev,
			msg,
			open: true,
			severity: 'error',
		}));
	}, []);
	const getSuccess = useCallback((msg: string) => {
		setState(prev => ({
			...prev,
			msg,
			open: true,
			severity: 'success',
		}));
	}, []);

	const handleClose = () => {
		setState(prev => {
			return {
				...prev,
				open: false,
			};
		});
		setTimeout(() => {
			setState({
				msg: '',
				open: false,
				severity: null,
			});
		}, 500);
	};

	return (
		<NotificationContext.Provider
			value={{
				getError,
				getSuccess,
			}}
		>
			<Notification
				handleClose={handleClose}
				open={state.open}
				severity={state.severity}
				msg={state.msg}
			/>
			{children}
		</NotificationContext.Provider>
	);
};
