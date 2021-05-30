import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardV1Component implements OnInit {
  todoData = [
    {
      completed: true,
      avatar: '1',
      name: 'Anh Tèo',
      content: `Xin hãy cho tôi biết, tôi nên nói gì?`,
    },
    {
      completed: false,
      avatar: '2',
      name: 'Chị Dậu',
      content: `Tôi còn chồng nữa xin các anh đi ỉa chỗ khác!`,
    },
    {
      completed: false,
      avatar: '3',
      name: 'cipchk',
      content: `this world was never meant for one as beautiful as you.`,
    },
    {
      completed: false,
      avatar: '4',
      name: 'Kent',
      content: `my heart is beating with hers`,
    },
    {
      completed: false,
      avatar: '5',
      name: 'Are you',
      content: `They always said that I love beautiful girl than my friends`,
    },
    {
      completed: false,
      avatar: '6',
      name: 'Forever',
      content: `Walking through green fields ，sunshine in my eyes.`,
    },
  ];

  webSite!: any[];
  salesData!: any[];
  offlineChartData!: any[];

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef, private obSrv: OnboardingService, private platform: Platform) {
    // TODO: Wait for the page to load
    setTimeout(() => this.genOnboarding(), 1000);
  }

  ngOnInit(): void {
    this.http.get('/chart').subscribe((res) => {
      this.webSite = res.visitData.slice(0, 10);
      this.salesData = res.salesData;
      this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });
  }

  private genOnboarding(): void {
    const KEY = 'on-boarding';
    if (!this.platform.isBrowser || localStorage.getItem(KEY) === '1') {
      return;
    }
    this.http.get(`./assets/tmp/on-boarding.json`).subscribe((res) => {
      this.obSrv.start(res);
      localStorage.setItem(KEY, '1');
    });
  }
}
