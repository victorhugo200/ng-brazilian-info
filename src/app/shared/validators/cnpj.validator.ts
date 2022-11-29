import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cnpjValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const cnpj = value.replace(/[^0-9]/g, '') as string;
    return cnpj.length !== 14 ? { cnpjInvalid: true } : null;
  };
}
