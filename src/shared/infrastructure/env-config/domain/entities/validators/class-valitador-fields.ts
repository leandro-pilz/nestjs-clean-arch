import { validateSync } from "class-validator";
import { FieldsErrors, ValidatorFiedlsInterface } from "./validator-fields.interface";
import { da } from "@faker-js/faker";

export abstract class ClassalidatorFields<PropsValidated> implements ValidatorFiedlsInterface<PropsValidated> {
  errors: FieldsErrors = null;
  validatedData: PropsValidated = null;
  validate(data: any): boolean {
    const errors = validateSync(data)
    if(errors.length){
      this.errors = {}
      for(const error of errors){
        this.errors[error.property] = Object.values(error.constraints)
      }
    } else {
      this.validatedData = data
    }

    return !errors.length
  }
}
