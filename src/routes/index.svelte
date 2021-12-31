<script context="module">
	export async function load({ session }) {
		return {
			props: {
				user: session.user
			}
		};
	}
</script>

<h1 class="text-center text-6xl">གསུང</h1>
