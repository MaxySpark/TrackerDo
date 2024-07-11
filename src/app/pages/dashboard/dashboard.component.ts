import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  EditorChangeContent,
  EditorChangeSelection,
  QuillEditorComponent,
} from 'ngx-quill';

import Quill from 'quill';
import Block from 'quill/blots/block';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

Block.tagName = 'DIV';
Quill.register(Block, true);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    QuillEditorComponent,
    FullCalendarModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  blurred = false;
  focused = false;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };

  created(event: Quill | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event);
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event);
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event);
    this.focused = true;
    this.blurred = false;
  }
  nativeFocus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-focus', $event);
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
    this.focused = false;
    this.blurred = true;
  }
  nativeBlur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-blur', $event);
  }
}
