import { Component, Directive } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
selector: 'RoomPage',
templateUrl: 'app/room/room.component.html'
})
export class RoomComponent {


private rooms = 'http://localhost/hotel_exercise/rooms.php';
//private rooms = 'korisnici.json';
data: Object[];
name: String = "";
constructor (private http: Http){

//   var headers = new Headers();
// headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.get(this.rooms).subscribe(
data => {
this.data = JSON.parse(data["_body"]);
//console.log(this.data);
},
err => console.log(err.text()),
() => {
}
);
}
}
