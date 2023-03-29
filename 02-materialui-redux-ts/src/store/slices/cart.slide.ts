import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../helpers';

export interface CartItem {
	id: string | number;
	name: string;
	image: string;
	info: string;
}

export interface CartState {
	cart: CartItem[];
}

const initialState: CartState = getItem('cart') || { cart: [] };

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
			const { id } = action.payload;
			if (
				state.cart.length === 0 ||
				state.cart.filter(item => item.id === id).length === 0
			) {
				state.cart.push(action.payload);
			}
		},
		removeToCart: (
			state: CartState,
			action: PayloadAction<number | string>
		) => {
			state.cart = state.cart.filter(item => item.id !== action.payload);
		},
	},
});
export const { addToCart, removeToCart } = cartSlice.actions;
