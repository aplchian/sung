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
	export let user;
</script>


<!--<script context="module">-->
<!--	export async function load({ page, session }) {-->
<!--		// console.log('session.user', session.user)-->
<!--		// if (session.user === null) {-->
<!--		// 	return {-->
<!--		// 		redirect: '/',-->
<!--		// 		status: 302-->
<!--		// 	};-->
<!--		// }-->
<!--		return { props: {} };-->
<!--	}-->
<!--</script>-->


<Nav user={user}  />

<main>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
		<div class="max-w-8xl mx-auto">
			<slot />
		</div>
	</div>
</main>

<!--<footer />-->
