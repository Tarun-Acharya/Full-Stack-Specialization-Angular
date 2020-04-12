import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import {Params,ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
     this.leaderservice.getLeaders()
     .subscribe(leaders=>this.leaders=leaders);
  }

}
