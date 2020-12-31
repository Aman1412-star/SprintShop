import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1100/500`);
}