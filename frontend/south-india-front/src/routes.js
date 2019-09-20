import HomeComponent from './components/home'
import packages from './components/packages.vue';
import login from './components/login'
import signup from './components/signup';
import contact from './components/contact';
import dashboard from './components/admin/dashboard';
import display from './components/displaypack';
import myaccount from './components/myaccount';
import registration from './components/registration.vue'
import executive from './components/executive.vue'


export default[
    {path:'/', component:HomeComponent},
    {path:'/packages', component:packages},
    {path:'/login', component:login},
    {path:'/signup', component:signup},
    {path:'/contact', component:contact},
    {path:'/packages/:id', component:display},
    {path:'/login/myaccount', component:myaccount},
    {path:'/product/registration', component:registration},
    {path:'/dashboard', component:dashboard},
    {path:'/executive', component:executive}

    


]