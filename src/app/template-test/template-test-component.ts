import { Component } from '@angular/core';

@Component({
  selector: 'template-test',
  styleUrls: ['./template-test-component.css'],
  templateUrl: './template-test-component.html',
})
export class TemplateTestComponent {
  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];

  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }
}
