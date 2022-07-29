import { Component, OnInit } from '@angular/core';
import { DevopsService } from '../../services/devops.service';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevopsComponent implements OnInit {
  tecnologiasDevops: any;

  constructor(private devops: DevopsService) { }

  ngOnInit(): void {
    this. getTecnologiasDevAll();
  }

  getTecnologiasDevAll(): void {
    this.devops.getTecologiasDevAll().subscribe((value) => {
      this.tecnologiasDevops = value;
    });
  }

}
