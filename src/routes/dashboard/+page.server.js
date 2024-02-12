import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	const auth = cookies.get('auth');
	if (!auth) throw redirect(303, '/login');
	const decoded = atob(auth);
	const data = JSON.parse(decoded);

	return data;
}
export const actions = {
	changeName: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('username');
		const currentAuth = cookies.get('auth');

		const currentDecoded = atob(currentAuth);

		const currentData = JSON.parse(currentDecoded);

		console.log(JSON.stringify(currentData));

		currentData.identity = name;

		//base64 encode the data
		const encoded = btoa(JSON.stringify(currentData));

		console.log(encoded);

		cookies.set('auth', encoded, {
			httpOnly: true,
			secure: true,
			path: '/'
		});

		return {
			success: true
		};
	},
	logout: async ({ cookies }) => {
		cookies.set('auth', '', {
			httpOnly: true,
			secure: true,
			path: '/',
			expires: new Date(0)
		});

		return {
			success: true
		};
	}
};
