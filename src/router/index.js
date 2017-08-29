import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/Home'
import Exportlog from 'components/Exportlog'
import Defend from 'components/Defend'
import Summarize from 'components/Summarize'
import Summary from 'components/Summary'
import YiLinkList from 'components/YiLinkList'
import Seting from 'components/Seting'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/Exportlog', name: 'Exportlog', component: Exportlog},
    {path: '/Defend', name: 'Defend', component: Defend},
    {path: '/Summarize', name: 'Summarize', component: Summarize},
    {path: '/Summary', name: 'Summary', component: Summary},
    {path: '/YiLinkList', name: 'Exportlog', component: YiLinkList},
    {path: '/Seting', name: 'Seting', component: Seting}
  ]
})
