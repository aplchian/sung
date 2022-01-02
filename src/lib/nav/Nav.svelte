<script>
	import { supabase } from '../../supabaseClient';

	export let user;
	let userHovered = false;
	function onMouseOut() {
		userHovered = false;
	}
	function onMouseOver() {
		userHovered = true;
	}
	async function handleLogout() {
		const { error } = await supabase.auth.signOut();
		console.log('error', error);
	}
</script>

<nav class="bg-white">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="flex items-center justify-center">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" />
				</div>
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4">
						<a
							href="/events/new"
							class="text-gray-900 px-3 py-2 rounded-md text-sm font-medium tracking-wider"
							aria-current="page">records</a
						>
					</div>
				</div>
			</div>
			<h1 class="text-center text-4xl self">གསུང</h1>
			<div class="w-6">
				{#if user}
					{#if userHovered}
						<a
							rel="external"
							href="/logout"
							class="text-black text-sm font-medium"
							on:mouseover={onMouseOver}
							on:mouseout={onMouseOut}
							on:click={handleLogout}
						>
							<button>logout</button>
						</a>
					{:else}
						<span
							on:mouseover={onMouseOver}
							on:mouseout={onMouseOut}
							class="text-black text-sm font-medium">{user.email}</span
						>
					{/if}
				{/if}
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<!--			<a-->
			<!--				href="/events/new"-->
			<!--				class="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium"-->
			<!--				aria-current="page">Selected</a-->
			<!--			>-->

			<!--			<a-->
			<!--				href="#"-->
			<!--				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"-->
			<!--				>Not Selected</a-->
			<!--			>-->
		</div>
	</div>
</nav>
