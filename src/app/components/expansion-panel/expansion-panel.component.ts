import { ChangeDetectionStrategy, Component, inject, signal, ViewChild, viewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, FormsModule, CommonModule, MatButtonModule, MatDividerModule, MatPaginatorModule, MonacoEditorModule],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  readonly panelOpenState = signal(false);
  accordion = viewChild.required(MatAccordion);
  private service = inject(SharedDataService);
  questions = this.service.theoryQuestions;
  paginatedItems: any[] = [];
  pageSize = 5; // Items per page
  currentPage = 0;
  paginator = viewChild.required(MatPaginator);
  private _snackBar = inject(MatSnackBar);


  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    minimap:{enabled:false},
    readOnly: true, // Make the editor read-only
    renderLineHighlight: 'none', // Disable line highlight
    selectionHighlight: false, // Disable selection highlight
    links: false, // Disable clickable links
    cursorStyle: 'block', // Customize cursor
    cursorBlinking: 'solid', // Customize cursor blinking
    contextmenu: false, // Disable context menu
    disableLayerHinting: true, // Further restrict interaction layers
    scrollBeyondLastLine: false, // Prevent extra space below the last line
    renderWhitespace: 'none',
    glyphMargin: false, // Hide the glyph margin (optional)
    overviewRulerLanes:0
  };

  constructor(private clipboard: Clipboard) {
    this.updatePaginatedItems();
    console.log(this.questions)
  }

  copyCode(val:any)
  {
    this.clipboard.copy(val);
    this._snackBar.open('Copied to Clipboard','OK',{
      duration: 3000
    });
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
