import Vue from 'vue'
import Router from 'vue-router'
import Edit from '../components/Edit.vue'
import Save from '../components/Save.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '',
      name: 'save',
      component: Save
    },
  ]
})
