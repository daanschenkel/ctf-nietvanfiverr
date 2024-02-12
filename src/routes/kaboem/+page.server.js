import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	const auth = cookies.get('auth');
	if (!auth) throw redirect(303, '/login');
	const decoded = atob(auth);
	const data = JSON.parse(decoded);

	if (!data.emergency) throw redirect(303, '/dashboard');
}
