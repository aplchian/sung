<script context="module">
	export async function load({ session }) {
		return {
			props: {
				user: session.user
			}
		};
	}
</script>

<script>
	import Nav from '$lib/nav/Nav.svelte';
	import '../app.css';
	import { user as userSession } from '../sessionStore';

	let user;

	userSession.subscribe((x) => {
		console.log('x', x)
		user = x;
	});
</script>

<Nav {user} />

<main>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-8xl mx-auto">
			<slot />
		</div>
	</div>
</main>

<!--<footer />-->
