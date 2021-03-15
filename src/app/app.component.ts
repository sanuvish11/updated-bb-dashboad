import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  adminname1: any
  timeNow: Date = new Date();
  showHeader = true;
  loginStatus: any;
  isLoggedIn: any;
  ngOnInit(): void {
    this.loginStatus = localStorage.getItem("login_status");
    this.adminname1 = localStorage.getItem("adminname");
  }

  constructor(private router: Router, private tokenService: TokenStorageService) {
    setInterval(() => {
      this.timeNow = new Date();
    }, 1);
    this.getheader();
  }
  getheader() {
    let volunteerId = localStorage.getItem('father_id');
    if (volunteerId != null || volunteerId != undefined) {
      this.showHeader = true;
    }
  }
  // logout() {
  //   this.router.navigateByUrl('/');
  //   this.tokenService.signOut();
  // }

  @Input() Opencalendar: any
  openCaledar() {
    this.Opencalendar = true
    this.router.navigateByUrl('dashboard');
  }
}
