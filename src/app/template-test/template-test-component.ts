import { Component } from '@angular/core';

@Component({
  selector: 'template-test',
  styleUrls: ['./template-test-component.css'],
  templateUrl: './template-test-component.html',
})
export class TemplateTestComponent {
  loginText = 'Login';
  signUpText = 'Sign Up';

  tableColumns = [
    {
      header: 'Lesson Name',
      field: 'lesson_name',
    },
    {
      header: 'Teacher First Name',
      field: 'teacher_first_name',
    },
    {
      header: 'Teacher Last Name',
      field: 'teacher_last_name',
    },
  ];

  tableData = [
    {
      lesson_name: 'Intro to CS',
      teacher_first_name: 'Rick',
      teacher_last_name: 'Mercer',
    },
    {
      lesson_name: 'Data Structurs',
      teacher_first_name: 'Bart',
      teacher_last_name: 'Simpson',
    },
  ];

  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }
}
