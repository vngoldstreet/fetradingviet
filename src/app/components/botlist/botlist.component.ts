import { Component, inject } from '@angular/core';
import { environment } from '../../enviroments';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botlist',
  imports: [CommonModule, RouterLink],
  templateUrl: './botlist.component.html',
  styleUrl: './botlist.component.css',
})
export class BotlistComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadingData();
  }
  private http = inject(HttpClient);

  botLists: any;
  botTotals: number = 0;
  loadingData() {
    const urlEndpoint = `${environment.API_BASE}/${environment.POSTS}?type=robot&site=tradingviet.com`;
    this.http.get(urlEndpoint, {}).subscribe({
      next: (response: any) => {
        this.botLists = response.data.hits;
        this.botTotals = response.data.total;
      },
      error: (err) => {
        console.log(err);
        setTimeout(() => {}, 5000);
      },
    });
  }
}
