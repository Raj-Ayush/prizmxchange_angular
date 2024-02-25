import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CdkAccordionModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  items = [
    { data: "Accordian1",
      value: "Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as “pain itself.”"
    },
    { data: "Accordian1",
      value: "Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer."
    },
    { data: "Accordian1",
      value: "Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer."
    },
    { data: "Accordian1",
      value: "Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer."
    },
    { data: "Accordian1",
      value: "Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer."
    }
  ];
  expandedIndex = 0;
}
