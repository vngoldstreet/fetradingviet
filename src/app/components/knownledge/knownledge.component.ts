import { Component, inject } from '@angular/core';
import { environment } from '../../enviroments';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-knownledge',
  imports: [CommonModule, RouterLink],
  templateUrl: './knownledge.component.html',
  styleUrl: './knownledge.component.css',
})
export class KnownledgeComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadingData();
  }
  private http = inject(HttpClient);

  postLists: any;
  postTotals: number = 0;
  loadingData() {
    const urlEndpoint = `${environment.API_BASE}/${environment.POSTS}?type=knowledge&site=tradingviet.com&limit=3`;
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
}
