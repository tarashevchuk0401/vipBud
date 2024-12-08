import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { TranslocoRootModule } from '../../transloco.root.module'
import { NgClass } from '@angular/common'
import { PhoneNumberValidator } from '../../shared/validators/phone-number.validator'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslocoRootModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  mailForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm()
    console.log('Form Data:', this.mailForm)
  }

  initializeForm() {
    this.mailForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [PhoneNumberValidator('PL')]],
      body: ['', Validators.required],
    })
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      this.mailForm.markAllAsTouched()
      console.log('Form Data:', this.mailForm)
    }

    // this.mailForm.reset()
  }
}
