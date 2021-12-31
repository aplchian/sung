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
	export let user;
</script>

<h1 class="ml-10">
	{#if user}
		<h2>Welcome {user}</h2>
		<a rel="external" href="/logout">
			<button>Logout</button>
		</a>
	{:else}
		<a rel="external" href="/login">
			<button>Login with github</button>
		</a>
	{/if}
</h1>
