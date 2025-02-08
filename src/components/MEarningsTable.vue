<template>
	<section class="m-earnings-table m-p-md" ref="table">
		<table class="m-earnings-table__list m-w-full">
			<tbody>
				<template v-for="(item, index) in earningsData" :key="index">
					<tr>
						<td class="m-earnings-table__description-col">
							{{ item.description }}
						</td>
						<td>{{ item.income }}</td>
					</tr>
				</template>

				<template v-if="isAddMode">
					<tr>
						<td class="m-earnings-table__description-col">
							<input placeholder="Description" />
						</td>
						<td class="m-earnings-table__sum-col">
							<input placeholder="Sum" type="number" />
						</td>
					</tr>
				</template>
			</tbody>
		</table>

		<div class="m-earnings-table__footer m-p-md m-flex">
			<div class="m-earnings-table__btns-row m-flex">
				<button v-if="!isAddMode" @click="onClickAdd">Add+</button>

				<template v-if="isAddMode">
					<button @click="isAddMode = false">Save</button>
					<button class="m-ml-sm" @click="isAddMode = false">Cancel</button>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const props = defineProps({
	earningsData: {
		type: Array,
		default: () => []
	}
})

const table = ref(null)
const isAddMode = ref(false)

async function onClickAdd() {
	isAddMode.value = true
	await nextTick()
	table.value.scrollTo({ top: table.value.clientHeight, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
$footer-height: 75px;

.m-earnings-table {
	height: 100%;
	overflow-y: scroll;

	&__list {
		padding-bottom: $footer-height;
	}

	&__description-col {
		width: 75%;
	}

	&__sum-col {
		width: 25%;
	}

	&__btns-row {
		justify-content: flex-start;
		height: fit-content;
	}

	&__footer {
		background: white;
		width: 100%;
		height: $footer-height;
		justify-content: flex-start;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
	}
}
</style>
