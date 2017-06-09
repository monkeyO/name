	// store.js

	import Vue from 'vue'
	import Vuex from 'vuex'

	Vue.use(Vuex)

	const state = {
	  notes: JSON.parse(localStorage.getItem("myNotes")) || [] ,
	  activeNote: {},
	  showBtn : false,//控制按钮点击
	}

	const mutations = {
	  // 新建
	  ADD_NOTE: state => {
	    const newNote = {
	      title: '',
	      text: '',
	      date: '',
	      favorite: false
	    }
	    var date = new Date()
	    var d = `${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`
	    newNote.date = d
	    state.notes.unshift(newNote)
	    state.activeNote = newNote // 记住：基本数据类型 赋值时，只是进行复制，两者不会相互影响，
	    													 //而 引用类型（数组，对象，函数，Date、RegExp）赋值时，是复制一个指针，两者共同指向
	    													 //堆中的同一个对象，所以改变时会互相影响
	    state.showBtn = !state.showBtn
	  },
	  // 保存
	  SAVE_NOTE: state => {
	    state.showBtn = !state.showBtn
	    console.log(state.activeNote)
	    if (state.activeNote.title.length <= 0||state.activeNote.title=="") {
	      state.notes.shift()
	      return
	    }
	    localStorage.setItem("myNotes", JSON.stringify(state.notes))
	  },
	  // 修改
	  EDIT_NOTE(state,note) {
	    state.activeNote = note
	    state.showBtn = !state.showBtn
	  },

	  // 删除
	  DELETE_NOTE(state,index) {
	    state.notes.splice(index,1);
	    localStorage.setItem("myNotes", JSON.stringify(state.notes))
	  },
	  // 清空
	  CLEAR_NOTE(state) {
	  	state.notes = []
	    localStorage.setItem("myNotes", JSON.stringify(state.notes))
	  },
	  // 切换收藏 没实现
	  TOGGLE_FAVORITE(state) {
	    // state.activeNote.favorite = !state.activeNote.favorite
	  },
	}

	export default new Vuex.Store({
	  state,
	  mutations
	})
