import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { ServRoomService } from '../../services/servroom/servroom.service'; 

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, HttpClientModule, HomeComponent ], // Asegúrate de importar BrowserAnimationsModule aquí
      providers: [ ServRoomService ] // Proporciona el servicio aquí
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
