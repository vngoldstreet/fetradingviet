import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { WhyusingComponent } from '../../components/whyusing/whyusing.component';
import { BotlistComponent } from '../../components/botlist/botlist.component';
import { BotInformationComponent } from '../../components/bot-information/bot-information.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { DashboardPreviewComponent } from '../../components/dashboard-preview/dashboard-preview.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { KnownledgeComponent } from '../../components/knownledge/knownledge.component';
import { QnaComponent } from '../../components/qna/qna.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [
    HeaderComponent,
    HeroComponent,
    WhyusingComponent,
    BotlistComponent,
    BotInformationComponent,
    PricingComponent,
    DashboardPreviewComponent,
    RatingComponent,
    KnownledgeComponent,
    QnaComponent,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
