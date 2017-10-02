import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']

})
export class AppComponent {
    message: string = 'Hello!';
    users: User[] = [
      { id:1, name: "Amy", username: "awesumAmy"},
      { id:2, name: "Jane", username: "jellyJane"},
      { id:3, name: "Charlie", username: "chapleinC"}
    ];
    activeUser: User;

    selectUser(user){
       this.activeUser = user;
       console.log(this.activeUser)
    }

    onUserCreated(event){
       this.users.push(event.user);
    }


}
