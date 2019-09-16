import HomeComponent from './components/home'
import packages from './components/packages.vue';
import login from './components/login'
export default[
    {path:'/', component:HomeComponent},
    {path:'/packages', component:packages},
    {path:'/login', component:login}

]