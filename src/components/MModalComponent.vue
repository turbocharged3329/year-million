<template>
	<div class="m-modal-overlay" v-if="isShown">
		<div class="m-modal-overlay__wrapper">
			<div class="m-modal-window">
				<m-earnings-table :earningsData="earningsData"/>

				<button class="m-modal-window__close-btn" @click="isShown = false" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { watch, ref} from 'vue'
import MEarningsTable from '@/components/MEarningsTable.vue'

const props = defineProps({
	data: {
		type: Object,
		default: () => {}
	}
})

const isShown = defineModel({ type: Boolean })
const earningsData = ref([])

const getDateData = async () => {
	const selectedDateString = new Date(`${props.data?.month}-${props.data?.day}-${props.data?.year}`)
	const date = selectedDateString.getDate()
	const month = selectedDateString.getMonth() + 1
	const year = selectedDateString.getFullYear()

	const dateId = `${date < 10 ? '0' + date : date}-${month < 10 ? '0' + month : month}-${year}`

	try {
		const data = await fetch(`http://localhost:8080/incomes/${dateId}`)
		const response = await data.json()
		
		if (response && response.length) {
			earningsData.value = response
		}
	} catch (e) {
		console.log(e)
	}
	
}

watch(isShown, (value) => {
	if (value) {
		getDateData()
	}
})

getDateData()
</script>

<style scoped lang="scss">
.m-modal-overlay {
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);


	&__wrapper {
		width: 100%;
		height: 100%;
		position: relative;
	}
}

.m-modal-window {
	width: 40vw;
	height: 30vh;
	border: 1px solid gray;
	border-radius: 5px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	background-color: white;
	padding-top: 50px;

  @media (max-width:900px) {
    width: 90vw;
    height:  50vh;
  }

	&__wrapper {
		position: relative;
	}

	&__close-btn {
		width: 20px;
		height: 20px;
		position: absolute;
		top: 10px;
		right: 10px;
		background-image: url('/icons/close.png');
		background-repeat: no-repeat;
		background-size: cover;
		border: none;
		background-color: transparent;
	}
}
</style>
