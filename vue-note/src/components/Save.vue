<template>
	<div class="save">
		<div class="note-list">
			<p class="note" v-for="(note,index) in notes" @click="EDIT_NOTE(note)">
				<router-link :to="{name:'edit'}">
					<span class="title">{{note.title}}</span>
					<span class="date">{{note.date}}</span>
				</router-link>
				<span class="delete" @click.stop="DELETE_NOTE(index)"></span>
			</p>
		</div>
	</div>
</template>
<script>
import { mapState , mapMutations } from 'vuex'
	export default {
		data(){
			return {
			}
		},
		computed: {
			...mapState(['notes']),
		},
		methods: {
			...mapMutations(['EDIT_NOTE','SET_ACTIVE_NOTE','DELETE_NOTE']),
		}
	}
</script>
<style scoped>
	.save {
		background-color: #f5f5f5;
	}
	p.note {
		position: relative;
		margin-top: 10px;
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
		cursor: pointer;
		background-color: #fff;
	}
	p.note:hover span.delete {
		display: inline-block;
	}
	p.note a {
		width: 90%;
		display: inline-block;
		background-color: #fff;
		color: #000;
    padding: 20px;
	}
	p.note span.title {
		font-weight: bold;
	}
	p.note span.date {
		position: absolute;
		top: 22px;
		right: 60px;
		display: inline-block;
	}
	p.note span.date {
		font-size: 12px;
		color: #999;
	}
	p.note span.delete {
		display: none;
		position: absolute;
		top: 18px;
		right: 20px;
		font-size: 20px;
		color: #d9534f;
	}
	span.delete:after {
		content: "X"
	}
</style>