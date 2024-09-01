import { ChangeDetectionStrategy, Component, inject, signal, ViewChild, viewChild } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule,CommonModule,MatButtonModule,MatDividerModule,MatPaginatorModule],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  readonly panelOpenState = signal(false);
  accordion = viewChild.required(MatAccordion);
  private service=inject(SharedDataService);
  questions=this.service.theoryQuestions;
  paginatedItems: any[] = [];
  pageSize = 5; // Items per page
  currentPage = 0;
  paginator=viewChild.required(MatPaginator);

  constructor(){
    this.updatePaginatedItems();
  }
  updatePaginatedItems(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedItems = this.questions.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedItems();
  }
}
