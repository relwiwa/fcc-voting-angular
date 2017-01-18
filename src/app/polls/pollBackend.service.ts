import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/Rx';

import { Poll } from './poll.model';

@Injectable()
export class PollBackendService {

  constructor(private http: Http) { }

  getAllPolls() {
    return this.http.get('http://localhost:3000/poll')
      .toPromise();
  }


}