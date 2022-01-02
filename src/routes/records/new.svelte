<script lang="ts">
	import countries from '../../countries.json';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let name, creator, city, state, notes;
	let country = 'US';
	let now = new Date(),
		month,
		day,
		year;
	let dateString;
	let creators = [];

	function setInitialDate() {
		(month = '' + (now.getMonth() + 1)), (day = '' + now.getDate()), (year = now.getFullYear());

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		dateString = [year, month, day].join('-');
	}

	setInitialDate();

	onMount(async () => {
		let { data, error } = await supabase.from('person').select('*');
		if (!error) {
			creators = data;
		}
	});

	const handleSubmit = async () => {
		const record = {
			name,
			creator,
			city,
			state,
			country,
			notes,
			date: dateString
		};

		const { data, error } = await supabase.from('records').insert([record]);
		if (!error) {
			console.log('SAVED!', data);
			name = '';
			creator = '';
			city = '';
			state = '';
			country = 'US';
			notes = '';
			setInitialDate();
		}
	};
</script>

<div class="max-w-2xl mx-auto">
	<h1 class="text-center  mt-16 text-black text-lg font-large">Add New Record</h1>

	<div class="mt-4">
		<label for="date" class="block text-sm font-medium text-gray-700">Date</label>
		<div class="mt-1">
			<input
				bind:value={dateString}
				type="date"
				name="date"
				id="date"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	</div>

	<div class="mt-4">
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
		<div class="mt-1">
			<input
				bind:value={name}
				type="text"
				name="name"
				id="name"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	</div>

	<div class="mt-4">
		<label for="creator" class="block text-sm font-medium text-gray-700">Creator</label>
		<div class="mt-1">
			<select
				bind:value={creator}
				name="creator"
				id="creator"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			>
				{#each creators as creator}
					<option value={creator.id}>{creator.name}</option>
				{/each}
			</select>
		</div>
	</div>

	<h3 class="mt-8 bold">Location</h3>

	<div class="mt-4">
		<label for="city" class="block text-sm font-medium text-gray-700">City</label>
		<div class="mt-1">
			<input
				bind:value={city}
				type="text"
				name="city"
				id="city"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	</div>

	<div class="mt-4">
		<label for="state" class="block text-sm font-medium text-gray-700">State</label>
		<div class="mt-1">
			<input
				bind:value={state}
				type="text"
				name="state"
				id="state"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	</div>

	<div class="mt-4">
		<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
		<div class="mt-1">
			<select
				bind:value={country}
				name="country"
				id="country"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			>
				{#each countries as country, i}
					<option value={country.code}>{country.name}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="mt-4">
		<label for="notes" class="block text-sm font-medium text-gray-700">Notes</label>
		<div class="mt-1">
			<textarea
				bind:value={notes}
				rows="4"
				name="notes"
				id="notes"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	</div>

	<button
		on:click={handleSubmit}
		type="button"
		class="my-4 mx-auto block px-4 py-2 w-full border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	>
		Submit
	</button>
</div>
