import { FieldsErrors, ValidatorFiedlsInterface } from "./validator-fields.interface";

export abstract class ClassalidatorFields<PropsValidated> implements ValidatorFiedlsInterface<PropsValidated> {
  errors: FieldsErrors = null;
  validatedData: PropsValidated = null;
  validate(data: any): boolean {


  }
}
