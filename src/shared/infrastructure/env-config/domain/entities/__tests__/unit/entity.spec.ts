import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../enity'

type StubPropos = {
  prop1: string,
  prop2: number
}

class StubEntity extends Entity<StubPropos>{ }

describe('Entity unit testes', () => {

  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.id).not.toBeNull()
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = '01e308c5-7819-4bee-9eff-46412deebfe9'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity.id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to a JSON', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = '01e308c5-7819-4bee-9eff-46412deebfe9'
    const entity = new StubEntity(props, id)

    expect(entity.toJson()).toStrictEqual({
      id,
      ...props,
    })
  })
})
