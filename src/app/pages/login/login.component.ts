import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
public usernameFormControl = new FormControl(null,[Validators.required,Validators.email]);
public passwordFormControl = new FormControl(null,[Validators.minLength(4)]);

public userForm!: FormGroup;

  constructor(private router: Router,){

  }

  ngOnInit(): void {
      this.userForm= new FormGroup({
      username: this.usernameFormControl,
      password: this.passwordFormControl,
    });
  }

  submit(){
    console.log(this.userForm.value);
  }
  Signup(){
      this.router.navigate(['/','signup']);
  }
  }


