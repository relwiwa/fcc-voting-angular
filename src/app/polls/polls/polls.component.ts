import { Component, OnInit } from '@angular/core';

import { Poll } from '../poll.model';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})

export class PollsComponent implements OnInit {

  polls: Poll[] = null;

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls()
      .subscribe(
        (polls: Poll[]) => {
          this.polls = polls;
        },
        error => console.log(error)
      );
  }

}
