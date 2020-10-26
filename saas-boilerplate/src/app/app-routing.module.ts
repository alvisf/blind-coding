import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';
import { FinalRoundComponent } from './final-round/final-round.component';
import { BlindCodingComponent } from './blind-coding/blind-coding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'one', component: BlindCodingComponent, canActivate: [AuthGuard] },
  { path: 'final', component: FinalRoundComponent, canActivate: [AuthGuard] },
  { path: 'thankyou', component: ThankyouPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
