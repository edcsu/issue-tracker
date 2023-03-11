import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent {
  issueForm: FormGroup | undefined;
  suggestions: Issue[] = [];

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }
  
  @Output() formClose = new EventEmitter();
  
  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
  
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }
}
