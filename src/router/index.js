import {createWebHistory, createRouter} from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
// import ConfirmarComponent from "@/components/ConfirmarComponent.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: CreateComponent
    },
    {
        path: "/view",
        name: "view",
        component: ListComponent 
    },
    {
       path: "/edit:id",
       name: "edit",
       component : EditComponent
    }
    // ,
    // {
    //     path: "/confirmar",
    //     name: "confirmar",
    //     component : ConfirmarComponent        
    // }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;