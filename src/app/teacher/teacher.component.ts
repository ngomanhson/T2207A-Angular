import {Component, Input} from "@angular/core";

@Component({
  selector:'teacher',
  templateUrl: './teacher.component.html'
})
export class TeacherComponent{
  @Input()
  classT?: string;
  Name = 'Trịnh Quang Hòa'
  Email = 'abc@gmail.com'
  phone = '...';
  map = 'Ha Noi';
}
