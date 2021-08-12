<template>
	<div class="bg-light p-5 mt-5 rounded">
		<div class="form-group text-left">
			<label for="emailInput">Email address</label>
			<input
				type="email"
				class="form-control"
				id="email"
				:value="email"
				@input="$emit('update:email', $event.target.value)"
				aria-describedby="emailHelp"
				placeholder="Enter email"
			/>
		</div>
		<div class="form-group text-left">
			<label for="passwordInput">Password</label>
			<input
				type="password"
				class="form-control"
				id="password"
				:value="password"
				@input="$emit('update:password', $event.target.value)"
				placeholder="Password"
			/>
			<slot name="errorInput"></slot><small>{{ errorInput }}</small>
		</div>
        <slot name="roleInput"></slot><small>{{ errorInput }}</small>
		<slot name="onSubmit"></slot>
	</div>
</template>
<script>
export default {
	name: "FormAuth",
	props: {
		email: String,
		password: String,
	},
	emits: ["update:email", "update:password", "update:role"],
};
</script>
