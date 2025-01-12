<template>
	<div class="m-date m-flex m-centered" @click="emit('show-modal')">
		<span>{{ date.day }}</span>
	</div>
</template>

<script setup>
defineProps({
	date: Object,
})

const emit = defineEmits(['show-modal'])
</script>

<style lang="scss" scoped>
.m-date {
	border-radius: 50%;
	width: 50px;
	height: 50px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	font-size: 20px;

	&:hover {
		background: #423189;
		color: #fff;
		cursor: pointer;
	}

	&--filled {
		background-color: #ff952b;
	}
}
</style>
