import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamMembersModule } from './team-members/team-members.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TeamMembersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
