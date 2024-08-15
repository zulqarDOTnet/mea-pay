import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

import { AddNewProviderComponent } from "./add-new-provider/add-new-provider.component";
import { ProviderResolveService } from "./provider-resolve.service";
import { ShowProviderDetailsComponent } from "./show-provider-details/show-provider-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: "addNewProvider", component: AddNewProviderComponent, canActivate: [AuthGuard], data: { roles: ["Admin"] }, resolve: { provider: ProviderResolveService } },
  { path: "showProviderDetails", component: ShowProviderDetailsComponent, canActivate: [AuthGuard], data: { roles: ["Admin"] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
