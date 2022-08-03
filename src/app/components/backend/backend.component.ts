import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  tecnologiasBackend: any;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.getTecnologiasBackAll()
  }

  getTecnologiasBackAll(): void {
    this.backend.getTecnologiasBackAll().subscribe((value) => {
      this.tecnologiasBackend = value;
    });
  }

}
