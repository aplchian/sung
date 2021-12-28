<h1 class="text-center text-2xl mt-16">Add New Event</h1>

<div class="mt-4">
	<label for="date" class="block text-sm font-medium text-gray-700">Date</label>
	<div class="mt-1">
		<input
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
			type="text"
			name="name"
			id="name"
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
		/>
	</div>
</div>

<div class="mt-4">
	<label for="speaker" class="block text-sm font-medium text-gray-700">Speaker</label>
	<div class="mt-1">
		<select
			name="speaker"
			id="speaker"
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
		>
			<option value="rinpoche">Rinpoche</option>
		</select>
	</div>
</div>

<h3 class="mt-8 bold">Location</h3>

<div class="mt-4">
	<label for="city" class="block text-sm font-medium text-gray-700">City</label>
	<div class="mt-1">
		<input
			type="text"
			name="name"
			id="city"
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
		/>
	</div>
</div>

<div class="mt-4">
	<label for="state" class="block text-sm font-medium text-gray-700">State</label>
	<div class="mt-1">
		<input
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
			name="country"
			id="country"
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
		>
			<option value="us">United States</option>
			<option value="in">India</option>
		</select>
	</div>
</div>

<div class="mt-4">
	<label for="notes" class="block text-sm font-medium text-gray-700">Notes</label>
	<div class="mt-1">
		<textarea
			rows="4"
			name="notes"
			id="notes"
			class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
		/>
	</div>
</div>
