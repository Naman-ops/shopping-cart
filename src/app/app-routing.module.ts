import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list/product-list.component";


const routes:Routes = [
    {path:'',component:HomeComponent},
    {path:'cart',component:CartPageComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'product-list',component:ProductListComponent},
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})


export class AppRoutingModule {

}