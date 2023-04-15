import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BannerCardComponent } from './components/banner-card/banner-card.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { WorkHistoryCardComponent } from './components/work-history-card/work-history-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { AccomplishmentsCardComponent } from './components/accomplishments-card/accomplishments-card.component';
import { TimelineCardComponent } from './components/timeline-card/timeline-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerCardComponent,
    SummaryCardComponent,
    OverviewCardComponent,
    WorkHistoryCardComponent,
    EducationCardComponent,
    SkillsCardComponent,
    AccomplishmentsCardComponent,
    TimelineCardComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
