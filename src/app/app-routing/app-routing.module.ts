import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { UserSearchComponent } from '../user-search/user-search.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-search', component: UserSearchComponent, canActivate: [AuthGuardService] },
  { path: 'user-detail', component: UserDetailComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []})
export class AppRoutingModule {}
