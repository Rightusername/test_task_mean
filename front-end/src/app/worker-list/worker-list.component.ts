import { Component, OnInit, Inject } from '@angular/core';
import { WorkersService } from '../workers.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  constructor(private workersService: WorkersService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.workersService.getWorkers();
  }

  openDialogToAdd() {
    let dialogRef = this.dialog.open(AddWorkerDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogToEdit(worker) {
    this.workersService.edited = worker;
    let dialogRef = this.dialog.open(EditWorkerDialogComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

@Component({
  selector: 'app-add-worker-dialog',
  templateUrl: 'add-worker-dialog.html',
  styleUrls: ['./worker-list.component.css']
})
export class AddWorkerDialogComponent {

  name;
  age;
  salary;
  experience;

  constructor(
    private workersService: WorkersService,
    public dialogRef: MatDialogRef<AddWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  addWorker() {
    this.workersService.add({
      name: this.name,
      age: this.age,
      experience: this.experience,
      salary: this.salary
    });
    this.dialogRef.close();
  }


}


@Component({
  selector: 'app-edit-worker-dialog',
  templateUrl: 'edit-worker-dialog.html',
  styleUrls: ['./worker-list.component.css']
})
export class EditWorkerDialogComponent {

  name;
  age;
  salary;
  experience;

  constructor(
    private workersService: WorkersService,
    public dialogRef: MatDialogRef<EditWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.name = this.workersService.edited.name;
      this.age = this.workersService.edited.age;
      this.salary = this.workersService.edited.salary;
      this.experience = this.workersService.edited.experience;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  close() {
    this.dialogRef.close();
  }

  editWorker() {
    this.workersService.edit({
      name: this.name,
      age: this.age,
      experience: this.experience,
      salary: this.salary,
      _id: this.workersService.edited._id
    });
    this.dialogRef.close();
  }

}
