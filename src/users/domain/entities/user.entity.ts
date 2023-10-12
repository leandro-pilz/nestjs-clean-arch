import { Entity } from "@/shared/infrastructure/env-config/domain/entities/enity";

export type UserProps = {
  name: string,
  email: string,
  password: string,
  createdAt?: Date,
}

export class UserEntity extends Entity<UserProps>{
  constructor(public readonly props: UserProps, id?: string) {
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get createAt() {
    return this.props.createdAt
  }

}
