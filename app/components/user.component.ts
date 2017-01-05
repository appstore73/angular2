import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
providers: [PostsService]

})


  export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

          constructor(private postsService: PostsService){
                        this.name = 'John Smith';
                        this.email= 'john@gmail.com';
                          this.address= {
                          street: 'vikash marg',
                          city: 'noida extension',
                          state: 'up'
                          }
                        this.hobbies = ['movie','music', 'sports', 'internet', 'travelling'];
                        this.showHobbies = false;
                        this.postsService.getPosts().subscribe(posts => {
                        console.log(posts);
                        this.posts = posts
                        });
          }


          toggleHobbies(){
            console.log('show');
            if(this.showHobbies == true){
            this.showHobbies = false;
            }else{
            this.showHobbies = true;
            }
          }

          addHobby(hobby){
            console.log(hobby);
            this.hobbies.push(hobby);
          }

          deletHobby(i){
            console.log(i);
            this.hobbies.splice(i,1);
          }

          updateHobby(i,hobby){
            console.log('updated value');
            console.log(1);
            console.log(hobby);
          }
 }

interface address {
street: string;
city: string;
state: string;
}
