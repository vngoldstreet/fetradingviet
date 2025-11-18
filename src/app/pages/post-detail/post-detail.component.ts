import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  urlPost: string | null = null;

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
  public sanitizedContent!: SafeHtml;
  limitNews = 6;
  post: any;
  private platformId: Object;
  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService,
    public sanitized: DomSanitizer,
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.platformId = platformId;
  }

  isLoading = false;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.urlPost = params['url'];
      let resultURL: string = this.urlPost ?? '';
      const baseUrl = `${environment.API_BASE}/${environment.POST_DETAIL}/${resultURL}`;
      this.http.get(baseUrl, {}).subscribe((data: any) => {
        if (data) {
          // console.log(data);
          this.post = data.data;
          this.isLoading = true;
          if (typeof window !== 'undefined') {
            this.sanitizedContent = this.sanitized.bypassSecurityTrustHtml(
              this.post?.Post?.content
            );
          }
          this.metaTag = {
            title: `${this.post?.Post?.title}`,
            description: this.post?.Post?.description,
            keywords: `${this.post?.Post?.title}`,
            url: `https://vangsaigon.vn/${this.post?.Post?.slug}`,
            image: this.post?.Post?.thumbnail,
            author: this.post?.Author?.display_name,
            facebook: 'https://www.facebook.com/tradingvietdotcom',
          };
          this.setSEOContent();
          this.loadingData();
        }
      });
    });
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

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // delay để đợi render hoàn tất
      }
    });
  }

  updateHrefAttributes(html: string): SafeHtml {
    if (typeof window === 'undefined') {
      return this.sanitized.bypassSecurityTrustHtml(html);
    }

    const currentUrl = window.location.href.split('#')[0]; // Lấy URL hiện tại và loại bỏ phần hash nếu có

    // Sử dụng DOMParser để phân tích HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Duyệt qua các thẻ <a> trong tài liệu
    const links = doc.querySelectorAll('#heading-list a');
    links.forEach((element: Element) => {
      const link = element as HTMLAnchorElement; // Chuyển đổi kiểu
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        link.setAttribute('href', `${currentUrl}${href}`);
      }
    });

    // Trả về HTML đã sửa đổi
    return this.sanitized.bypassSecurityTrustHtml(doc.body.innerHTML);
  }

  postLists: any;
  postTotals: number = 0;
  loadingData() {
    const urlEndpoint = `${environment.API_BASE}/${environment.POSTS}?type=content&site=tradingviet.com`;
    this.http.get(urlEndpoint, {}).subscribe({
      next: (response: any) => {
        console.log(response);
        this.postLists = response.data.hits;
        this.postTotals = response.data.total;
      },
      error: (err) => {
        console.log(err);
        setTimeout(() => {}, 5000);
      },
    });
  }
}
