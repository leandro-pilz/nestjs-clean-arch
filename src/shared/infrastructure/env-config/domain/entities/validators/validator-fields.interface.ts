export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFiedlsInterface<PropsValidated> {
  errors: FieldsErrors
  validatedData: PropsValidated
  validate(data: any): boolean
}
