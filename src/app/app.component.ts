import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, NavigationStart, NavigationEnd, NavigationError, Router, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  protected loading = true;
  protected showMessages = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.checkRouterEvent(event);
    });
  }


  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }


  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  togleMessages() {
    this.showMessages = !this.showMessages;
  }
}
