<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import { assoc } from 'ramda';

	let records = [];

	onMount(async () => {
		let { data, error } = await supabase.from('records').select('*');
		if (!error) {
			records = data
				.map((record) => {
					const from = record.date.split('-');
					return assoc('date', new Date(from[0], from[1] - 1, from[2]), record);
				})
				.sort((a, b) => b.date - a.date);
		}
	});
</script>

<div class="flex flex-col mt-8">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
			<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Date
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Name
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Location
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Notes
							</th>
							<th scope="col" class="relative px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each records as record}
							<tr class="bg-white">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{record.date.toLocaleDateString('en-US')}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{record.name}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{record.city}, {record.country}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{record.notes || ''}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<a href={`/record/${record.id}`} class="text-indigo-600 hover:text-indigo-900"
										>view</a
									>
								</td>
							</tr>
						{:else}
							No Records Found
						{/each}
						<!-- Odd row -->

						<!-- Even row -->
						<!--						<tr class="bg-gray-50">-->
						<!--							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">-->
						<!--								Cody Fisher-->
						<!--							</td>-->
						<!--							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-->
						<!--								Product Directives Officer-->
						<!--							</td>-->
						<!--							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-->
						<!--								cody.fisher@example.com-->
						<!--							</td>-->
						<!--							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> Owner </td>-->
						<!--							<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">-->
						<!--								<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>-->
						<!--							</td>-->
						<!--						</tr>-->

						<!-- More people... -->
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
