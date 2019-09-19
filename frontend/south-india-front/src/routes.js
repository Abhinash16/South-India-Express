import HomeComponent from './components/home'
import packages from './components/packages.vue';
import login from './components/login'
import signup from './components/signup';
import contact from './components/contact';
import dashboard from './components/admin/dashboard';

export default[
    {path:'/', component:HomeComponent},
    {path:'/packages', component:packages},
    {path:'/login', component:login},
    {path:'/signup', component:signup},
    {path:'/contact', component:contact},
    
    


]