import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

/*
 * Task 67 Comment:
 * Specifying providers: [NotificationService] at the component level instructs Angular's Dependency Injection
 * container to instantiate a NEW, separate NotificationService instance scoped exclusively to this component
 * and its child components, rather than sharing the root singleton.
 */
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notificationMessage: string = '';
  instanceId: number = 0;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.instanceId = this.notificationService.getInstanceId();
    this.notificationMessage = this.notificationService.notify('Scoped component provider active.');
  }
}
