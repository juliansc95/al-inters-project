import { Component, ViewChild} from '@angular/core';
import {MdMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-movies';
  routes: Object[] = [
{
title: 'Top Movies',
route: '/',
icon: 'local_movies',
}, {
title: 'Genres',
route: '/',
icon: 'view_carousel',
}, {
title: 'People',
route: '/',
icon: 'person',
}, {
title: 'Tv - Series',
route: '/',
icon: 'tv',
}, {
title: 'A - Z List',
route: '/',
icon: 'sort_by_alpha',
},
];

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

}
