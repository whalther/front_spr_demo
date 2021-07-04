import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(public meta: Meta, public myTitle: Title) { 
    
   }
  ngOnInit() { 
    //this.myTitle.setTitle('hola mundo 2');
    //this.meta.updateTag({ name: 'description', content: 'Dynamic Hello Angular Lovers description!' });
  }

}
