import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, TasksComponent,  NewTaskComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    FormsModule,
    HeaderComponent,
    UserComponent,

  ]
})
export class AppModule { }

