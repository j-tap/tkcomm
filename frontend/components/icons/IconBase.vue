<template>
	<svg
		class="icon"
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:viewBox="`0 0 ${width} ${height}`"
		:aria-labelledby="iconName"
		role="presentation"
	>
		<title
			:id="iconName"
			lang="en"
		>{{iconName}} icon</title>
		<g :fill="iconColor">
			<slot />
		</g>
	</svg>
</template>

<script>
export default {
	props: {
		iconName: {
			type: String,
			default: 'box'
		},
		width: {
			type: [Number, String],
			default: 26
		},
		height: {
			type: [Number, String],
			default: 26
		},
		iconColor: {
			type: String,
			default: 'currentColor'
		},
	},
}
</script>

<style lang="scss" scoped>
	svg {
		font-size: 0;
	}
</style>