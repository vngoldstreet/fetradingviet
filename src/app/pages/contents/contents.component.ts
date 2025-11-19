import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contents',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css',
})
export class ContentsComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadingData();
  }
  private http = inject(HttpClient);

  postLists: any;
  postTotals: number = 0;
  searchText = '';
  loadingData() {
    const urlEndpoint = `${environment.API_BASE}/${environment.POSTS}?site=tradingviet.com&q=${this.searchText}`;
    this.http.get(urlEndpoint, {}).subscribe({
      next: (response: any) => {
        // console.log(response);
        this.postLists = response.data.hits;
        this.postTotals = response.data.total;
      },
      error: (err) => {
        console.log(err);
        setTimeout(() => {}, 5000);
      },
    });
  }

  onEnterCustomer(input: HTMLInputElement) {
    if (document.activeElement === input) {
      this.loadingData();
    }
  }
}
