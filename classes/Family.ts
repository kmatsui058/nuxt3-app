import Nation from './Nation'
import FamilyClass from './FamilyClass'
import textFamily from '~/assets/data/xml/text-family'
import nation from '~/assets/data/xml/nation'
import familyClass from '~/assets/data/xml/familyClass'

export default class Family {
  readonly entry: Readonly<XmlFamily.Entry>

  constructor (entry: XmlFamily.Entry) {
    this.entry = entry
  }

  get textFamily () {
    return textFamily.Root.Entry
  }

  get name (): string {
    const test = this.textFamily.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get nation (): Nation {
    const test = nation.Root.Entry.find(entry => entry.zType === this.entry.Nation)
    if (!test) { throw new Error('not found') }
    return new Nation(test)
  }

  get familyClass (): FamilyClass {
    const test = familyClass.Root.Entry.find(entry => entry.zType === this.entry.FamilyClass)
    if (!test) { throw new Error('not found') }
    return new FamilyClass(test)
  }
}
