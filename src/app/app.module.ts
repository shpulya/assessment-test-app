import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { TableViewComponent } from './user-search/table-view/table-view.component';
import { CardViewComponent } from './user-search/card-view/card-view.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserSearchService } from './user-search/user-search.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {UserDetailService} from './user-detail/user-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserSearchComponent,
    HomeComponent,
    UserDetailComponent,
    HeaderComponent,
    SidenavListComponent,
    TableViewComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng-github-profile-search'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FontAwesomeModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserSearchService,
    UserDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
