import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();

@Component({
  selector: 'app-risks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk.component.html',
  styleUrl: './risk.component.css',
})
export class RiskComponent implements OnInit {
    risks: any[] = [];

  ngOnInit(): void {
    this.listRisk();
  }

  deleteRisk(id: string) {
    client.models.Risk.delete({ id })
  }

  listRisk() {
    try {
      client.models.Risk.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.risks = items;
        },
      });
    } catch (error) {
      console.error('error fetching risks', error);
    }
  }

  createRisk() {
    try {
      client.models.Risk.create({
        description: window.prompt('Risk description'),
        status: "OPEN"
      });
      this.listRisk();
    } catch (error) {
      console.error('error creating risks', error);
    }
  }
}
