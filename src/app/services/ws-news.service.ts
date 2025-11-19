import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../enviroments';

@Injectable({
  providedIn: 'root',
})
export class WsNewsService {
  private ws!: WebSocket;
  private newsSubject = new BehaviorSubject<any[]>([]);
  news$: Observable<any[]> = this.newsSubject.asObservable();
  private connectionStatus = new BehaviorSubject<boolean>(false);
  connectionStatus$ = this.connectionStatus.asObservable();

  constructor(private zone: NgZone) {}

  isConnected(): boolean {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  connect(): void {
    if (this.isConnected()) return;

    if (this.ws && this.ws.readyState !== WebSocket.OPEN) {
      this.ws = undefined!;
    }

    const endpoint = `${environment.API_NEWSFEED}`;
    this.ws = new WebSocket(endpoint);

    this.ws.onopen = () => {
      // console.log('[WS] Connected');
      this.connectionStatus.next(true);
    };

    this.ws.onmessage = (event) => {
      this.zone.run(() => {
        try {
          const data = JSON.parse(event.data);
          // console.log('[WS] Received:', data);
          // Thêm tin mới vào danh sách hiện có
          const current = this.newsSubject.getValue();
          this.newsSubject.next([data, ...current]);
        } catch (err) {
          console.error('[WS] Parse error:', err, event.data);
        }
      });
    };

    this.ws.onclose = () => {
      this.connectionStatus.next(false);
      this.ws = undefined!;
    };

    this.ws.onerror = (err) => {
      this.connectionStatus.next(false);
    };
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
    }
  }
}
