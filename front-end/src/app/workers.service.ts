import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  method: 'DELETE'
};

@Injectable()
export class WorkersService {
  url = 'http://localhost:3000/workers';
  workers;
  edited;

  constructor(private http: HttpClient) { }

  getWorkers() {
    this.http.get(this.url).subscribe(
      data => { this.workers = data; },
      err => console.error(err)
    );
  }


  delete(id) {
    this.http.delete(this.url + '/' + id).subscribe((res) => {
      this.workers = this.workers.filter(worker => worker._id !== id);
    });

  }

  edit(worker) {
    this.http.put(this.url, worker).subscribe((res) => {
      this.workers.find((el, index) => {
        if (el._id === worker._id) {
          this.workers[index] = worker;
          return;
        }
      });
    });
  }

  add(worker) {
    worker = this.validate( worker );
    this.http.post(this.url, {
      worker
    })
      .subscribe(
        res => {
          this.getWorkers();
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  validate(worker) {
    if (!worker.name) {
      worker.name = '';
    }
    if (!worker.age) {
      worker.age = '';
    }
    if (!worker.salary) {
      worker.salary = '';
    }
    if (!worker.experience) {
      worker.experience = '';
    }
    return worker;
  }
}
