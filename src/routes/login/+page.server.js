import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	const auth = cookies.get('auth');

	if (auth) throw redirect(303, '/dashboard');
}
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (username === 'user' && password === 'password') {
			const identity = await fetch(
				'https://story-shack-cdn-v2.glitch.me/generators/dutch-name-generator'
			)
				.then((res) => res.json())
				.then((res) => `${res.data.male} ${res.data.lastName}`);

			const data = {
				role: 'user',
				identity
			};

			const encoded = btoa(JSON.stringify(data));

			cookies.set('auth', encoded, {
				httpOnly: true,
				secure: true,
				path: '/'
			});

			return {
				success: true
			};
		} else {
			return fail(400, 'Invalid username or password');
		}
	}
};
