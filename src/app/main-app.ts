import {Component} from 'angular2/core';
import {Router,Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { TextEditor } from './components/text-editor/text-editor';

@Component({
  selector: 'Editor',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/main-app.html',
})
@RouteConfig([
    new Route({ path: '/text', component: TextEditor, name: 'TextEditor', useAsDefault: true})
    ])

export class Editor {

  constructor() {}

}
