import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Users} from './users';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {



  constructor(private loginService: AuthService) { }

  ngOnInit() {


  }




}
