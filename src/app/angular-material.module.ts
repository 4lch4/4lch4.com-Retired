import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';


@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatExpansionModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCardModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule
   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatExpansionModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatChipsModule,
      MatCardModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }