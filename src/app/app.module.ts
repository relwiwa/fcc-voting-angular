import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';
import { ErrorComponent } from './errors/error/error.component';
import { LogoutComponent } from './user/logout/logout.component';
import { PollCreationComponent } from './polls/poll-creation/poll-creation.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';
import { PollsComponent } from './polls/polls/polls.component';
import { PollService } from './polls/poll.service';
import { routes } from './app.routes';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PollsListComponent } from './polls/polls-list/polls-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AuthenticationComponent,
    ErrorComponent,
    LogoutComponent,
    PollCreationComponent,
    PollDetailComponent,
    PollsComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    PollsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
