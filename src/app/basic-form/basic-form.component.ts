import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// FormGroup is the actual class to tie diffferent from controls together
// FormBuilder is service to make building form easier.
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    // DATA MODEL FOR FORM
    this.myForm = this.fb.group({
       email: '',
       message: '',
       career: ''
    });
    // returns an observable,retuns the value of form every time it changes
    this.myForm.valueChanges.subscribe(console.log);

  }
}
