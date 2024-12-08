import { PhoneNumberUtil } from 'google-libphonenumber'

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

const phoneNumberUtil = PhoneNumberUtil.getInstance()

export function PhoneNumberValidator(regionCode?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validNumber = false

    if (!control.value) {
      return null
    }

    try {
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(control.value, regionCode)

      validNumber = phoneNumberUtil.isValidNumber(phoneNumber)
    } catch (e) {
      return { phone: { value: control.value } }
    }

    return validNumber ? null : { phone: { value: control.value } }
  }
}
