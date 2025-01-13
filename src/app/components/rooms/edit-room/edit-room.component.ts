import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServRoomService } from '../../../services/servroom/servroom.service';
import { Room } from '../../../modells/room';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent {
  room: Room = new Room();
  roomId: number | null = null;
  roomLoaded: boolean = false; // Flag to control form visibility

  constructor(
    private router: Router,
    private servRoom: ServRoomService,
    private snackBar: MatSnackBar
  ) { }

  loadRoomData(): void {
    this.roomLoaded = false;
    this.roomId = Number(this.room.id)
    console.log('En load room' + this.room.id)
    if (this.roomId) {
      this.servRoom.findById(this.roomId).subscribe(room => {
        this.room = room;
        this.roomLoaded = true;
        console.log('Room data loaded:', room)
      });
    }
  }

  saveChanges(): void {
    if (this.roomId !== null) {
      const roomData = {
        id: this.roomId,
        roomNumber: Number(this.room.roomNumber),
        guestCount: Number(this.room.guestCount),
        roomType: this.room.roomType,
        checkInDate: this.room.checkInDate,
        checkOutDate: this.room.checkOutDate,
        pricePerNight: Number(this.room.pricePerNight)
      };
      console.log(roomData)
      this.servRoom.updateRoom(roomData, this.roomId).subscribe(response => {
        this.showSnackbar('Room updated successfully!', 'Close', 'success'); 
        this.router.navigate(['/']);    
       });
    }
  }

  showSnackbar(message: string, action: string, style: string): void { 
    this.snackBar.open(message, action, { 
      duration: 4000,
      verticalPosition: 'top',
      panelClass: [style]
    }
    ); 
  }
}
