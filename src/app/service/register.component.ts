import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({

  selector: "RegisterComponent",
  templateUrl: 'app/service/register.component.html'
})


export class RegisterComponent{

  http: Http;
  router: Router;
  postResponse: String;
  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    username: new FormControl(),
    password: new FormControl()

  });

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    if (localStorage.getItem('token') != null) {
        this.router.navigate(['./']);
    }
  }

  onRegister(): void{


    var data = "firstname=" + this.registerForm.value.firstName +
    "&&lastname=" + this.registerForm.value.lastName +
    "&&username=" + this.registerForm.value.username +
    "&&password=" + this.registerForm.value.password;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/hotel_exercise/registerService.php', data, {
               headers: headers })
               .map(res => res)
               .subscribe(
                 data => {
                  let obj = JSON.parse(data["_body"]);
                  localStorage.setItem('token', obj.token);
                  this.router.navigate(['./']);
                 },
                 err => {
                  let obj = JSON.parse(err._body);
                  let element = <HTMLElement> document.getElementsByClassName("alert")[0];
                  element.style.display = "block";
                  element.innerHTML =
                  obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                 }
              );

  }


}
