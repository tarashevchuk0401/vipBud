import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  mailForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.mailForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      body: ['', Validators.required],
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Form Data:', form.value)
    this.mailForm.reset()
  }
}
