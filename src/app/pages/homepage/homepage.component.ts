import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
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
import { SeoService } from '../../shared/services/seo.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [
    HeroComponent,
    WhyusingComponent,
    BotlistComponent,
    BotInformationComponent,
    PricingComponent,
    // DashboardPreviewComponent,
    RatingComponent,
    KnownledgeComponent,
    QnaComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  metaTag = {
    title:
      'Robot giao dịch Forex tự động - AI FX Trading | Hiệu suất ổn định - Không cảm xúc',
    description:
      'Khám phá Robot giao dịch Forex tự động giúp loại bỏ cảm xúc, vận hành 24/7 và tối ưu lợi nhuận. Công nghệ AI phân tích thị trường theo thời gian thực, phù hợp mọi trader. Xem hiệu suất thực tế và kích hoạt ngay hôm nay.',
    keywords:
      'robot forex, robot giao dịch fx, ea forex, bot forex tự động, robot vàng xauusd, robot scalping, robot xu hướng, công cụ giao dịch tự động, phần mềm forex, expert advisor, auto trading, robot không cảm xúc',
    url: 'https://tradingviet.com',
    image: 'https://tradingviet.com/assets/images/hero.jpeg',
    author: 'TradingViet',
    facebook: 'https://www.facebook.com/tradingvietdotcom',
  };
  private platformId: Object;
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private doc: Document,
    private seoService: SeoService
  ) {
    this.platformId = platformId;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setSEOContent();
  }

  setSEOContent() {
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Vàng Sài Gòn',
      url: this.metaTag.image,
      logo: this.metaTag.image,
      sameAs: [this.metaTag.facebook],
      description: this.metaTag.description,
    });
    this.doc.head.appendChild(script);

    this.seoService.updateTitle(`${this.metaTag.title}`);
    if (isPlatformBrowser(this.platformId)) {
      this.seoService.setCanonicalURL(`${this.metaTag.url}`);
    }

    this.seoService.updateMetaTags({
      title: this.metaTag.title,
      description: this.metaTag.description.slice(0, 320),
      keywords: this.metaTag.keywords,
      author: this.metaTag.author,
    });

    this.seoService.updateOpenGraphTags({
      title: this.metaTag.title,
      type: 'website',
      url: this.metaTag.url,
      image: this.metaTag.image,
      description: this.metaTag.description.slice(0, 320),
    });

    this.seoService.updateTwitterOpenGraphTags({
      card: this.metaTag.image,
      site: this.metaTag.url,
      title: this.metaTag.title,
      description: this.metaTag.description.slice(0, 320),
      image: this.metaTag.image,
    });
  }
}
