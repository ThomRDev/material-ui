import { createContext } from 'react';

type NotificationContextProps = {
	getSuccess: (msg: string) => void;
	getError: (msg: string) => void;
};

export const NotificationContext = createContext<NotificationContextProps>(
	{} as NotificationContextProps
);
