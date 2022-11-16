import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbbreviationComponent } from './abbreviation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { TemplateErrorModule } from 'src/app/shared/components/template-error/template-error.module';

@NgModule({
  declarations: [AbbreviationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    TemplateErrorModule,
    RouterModule.forChild([
      {
        path: '',
        component: AbbreviationComponent,
      },
    ]),
  ],
  exports: [AbbreviationComponent],
})
export class AbbreviationModule {}
