import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';


import { Room } from '../../modells/room';
import { ServhabitacionService } from '../../services/servhabitacion/servhabitacion.service';


@Component({
  selector: 'app-main',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, FormsModule,MatTableModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  startDate: Date; 
  endDate: Date;
  guestCount: number;
  availableRooms: Room[] = [];
  displayedColumns: string[] = ['roomNumber', 'roomType', 'pricePerNight'];


  constructor( private servRoom : ServhabitacionService) { 
    this.startDate = new Date(); 
    this.endDate = new Date(); 
    this.guestCount = 0;
  }

  findRooms(event: Event) { 
    event.preventDefault(); // Evita que el enlace navegue a otra página 
    /*this.servRoom.listAvailableRooms(this.guestCount).subscribe((rooms: Room[]) => { 
      this.availableRooms = rooms; });
    }*/
   this.availableRooms = [
    {id: 1, roomNumber: 206, roomType: 'Doble', pricePerNight: 21.5},
    {id: 2, roomNumber: 376, roomType: 'Triple', pricePerNight: 45.65},
    {id: 3, roomNumber: 116, roomType: 'Cuadruple', pricePerNight: 80.3}
  ];
  }
}
