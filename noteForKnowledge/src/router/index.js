import Vue from 'vue'
import Router from 'vue-router'
import PersonalNote from 'pages/PersonalNote'
import FolderList from 'components/FolderList'
import NoteDetail from 'components/NoteDetail'
import NoteList from 'components/NoteList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: PersonalNote,
      children: [
        {
          path: '',
          component: FolderList
        }
      ]
    },
    {
      path: '/personalnote/:id',
      component: PersonalNote,
      children: [
        {
          path: '',
          component: FolderList
        }
      ]
    },
    {
      path: '/notedetail/:notepath',
      name: 'notedetail',
      component: NoteDetail
    },
    {
      path: '/notelist/:foldername',
      name: 'notelist',
      component: NoteList
    }
  ]
})
