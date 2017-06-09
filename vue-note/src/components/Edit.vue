<template>
	<div class="new">
		<input class="new-title" type="text" placeholder="标题" v-model="activeNote.title">
		<textarea class="new-text" placeholder="笔记内容" v-model="activeNote.text"></textarea>
	</div>
</template>
<script>
import { mapState } from 'vuex'
	export default {
		data(){
			return {
			}
		},
		computed: {
			...mapState(['activeNote']),
		},
	}
</script>
<style>
	input.new-title {
		box-sizing: border-box;
    width: 100%;
		height: 50px;
		padding: 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    font-size: 25px;
    font-weight: 500;
    background-color: #f2f2f2;
	}
	textarea.new-text {
		box-sizing: border-box;
    width: 100%;
		height: 500px;
		padding: 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    background-color: #f2f2f2;
	}
</style>