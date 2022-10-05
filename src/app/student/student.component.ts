import {Component, Input,} from "@angular/core";

@Component({
  selector:'student',
  templateUrl: './student.component.html'
})
export class StudentComponent{

  @Input()
  classN?: string;
  Name = 'Phùng Vũ';
  Email = 'abc@gmail.com';
  Address = '...';

  bangai = 10;

  tangBanGai(){
    this.bangai++;
  }

  giamBanGai(){
    if(this.bangai >0){
      this.bangai--;
    }
  }
}
