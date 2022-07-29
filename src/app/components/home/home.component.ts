import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paises: string[] = ['Frontend', 'Backend', 'Devops'];
  citycode?: string = '';
  frontend: boolean = false;
  backend: boolean = false;
  devops: boolean = false;
  cityValue!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cityValue = this.formBuilder.group({
      paises: [''],
    });
  }

  changeCity(e: any) {

    if (e.target.value == 'menu') {
      this.frontend = false;
      this.backend = false;
      this.devops = false;
    }
    if (e.target.value == 'Frontend') {
      this.frontend = true;
      this.backend = false;
      this.devops = false;
    }
    if (e.target.value == 'Backend') {
      this.backend = true;
      this.frontend = false;
      this.devops = false;
    }
    if (e.target.value == 'Devops') {
      this.devops = true;
      this.backend = false;
      this.frontend = false;
    }
  }
}
