import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public usernameFormControl = new FormControl(null,[Validators.required,Validators.email]);
  public passwordFormControl = new FormControl(null,[Validators.minLength(4)]);
  public username=new FormControl(null,[Validators.minLength(5)]);
  
  public userForm!: FormGroup;
  
    constructor(private router: Router){
  
    }
  
    ngOnInit(): void {
        this.userForm= new FormGroup({
        username: this.usernameFormControl,
        password: this.passwordFormControl,
        name: this.username,
      });
    }
  
    submit(){
      console.log(this.userForm.value);
    }

    login(){
      this.router.navigate(['/','login']);
    }
  
  
}
