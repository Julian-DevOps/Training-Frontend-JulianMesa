import { Component, OnInit } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
})
export class FrontendComponent implements OnInit {
  tecnologiasFrontend: any;

  constructor(private frontend: FrontendService) {}

  ngOnInit(): void {
    this.getTecnologiasFrontAll();
  }

  getTecnologiasFrontAll(): void {
    this.frontend.getTecnologiasFrontAll().subscribe((value) => {
      this.tecnologiasFrontend = value;
    });
  }
}
