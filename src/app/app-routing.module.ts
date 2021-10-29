import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'tour', component: TourComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
