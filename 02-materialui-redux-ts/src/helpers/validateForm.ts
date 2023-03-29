import * as Yup from 'yup';

export const LoginValidate = Yup.object().shape({
	username: Yup.string().trim().required('el username es necesario'),
	password: Yup.string()
		.trim()
		.required('El password es requerido')
		.min(4, 'El minimo debe ser 4 caracteres')
		.max(20, 'El maximo debe ser 20 caracteres'),
});
