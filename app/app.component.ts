import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "corman.dev@gmail.com";
    this.user.password = "Welcome1";
  }

  submit() {
    if(this.isLoggingIn)
      this.login();
    else
      this.signUp();
  }

  login() {
    //TODO: Define
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was created successfully.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately, we were unable to create your account.")
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}