import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	const auth = cookies.get('auth');
	if (!auth) throw redirect(303, '/login');
	const decoded = atob(auth);
	const data = JSON.parse(decoded);

	if (data.role !== 'admin') {
		return {
			...data,
			access: false
		};
	} else {
		return {
			...data,
			access: true
		};
	}
}
export const actions = {
	emergency: async ({ cookies }) => {
		const auth = cookies.get('auth');
		if (!auth) throw redirect(303, '/login');
		const decoded = atob(auth);
		const data = JSON.parse(decoded);

		if (data.role !== 'admin') {
			return fail(403, 'You do not have permission to access this page');
		}

		data.emergency = true;

		const encoded = btoa(JSON.stringify(data));

		cookies.set('auth', encoded, {
			httpOnly: true,
			secure: true,
			path: '/'
		});
	}
};
