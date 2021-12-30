import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Registereduser } from "../shared/registeredUser.model";
import { UserDetails } from "../shared/userDetails.model";

@Injectable({providedIn: 'root'})
export class PostsService{
    constructor(private http: HttpClient){

    }

    sendLoginData(enteredUser: Registereduser){
        
        this.http.post<Registereduser>('https://vibrant-petal-292416-default-rtdb.firebaseio.com/posts.json',enteredUser).subscribe(responseData=>{
            console.log(responseData)
        })
    }

    submiteUsersDetails(registeredUser: UserDetails){
        
        this.http.post<UserDetails>('https://vibrant-petal-292416-default-rtdb.firebaseio.com/users.json',registeredUser).subscribe(responseData=>{
            console.log(responseData)
        })
    }

    getRegisteredUsers(){

        this.http.get('https://vibrant-petal-292416-default-rtdb.firebaseio.com/users.json').subscribe(posts => {
            console.log(posts);
        });

    }
}