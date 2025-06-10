export class AdressFormModel {
  id?: string;
  mobileNumber: string = '';
  dateOfBirth: Date = new Date();
  fullName: string = '';
  address: string = '';
  email: string = '';
  jobId: string = '';
  departmentId: string = '';
  photoPath: string = '';
  photoFile?: File;
}
