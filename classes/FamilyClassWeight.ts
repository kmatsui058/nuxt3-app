import FamilyClass from './FamilyClass'
import textInfo from '~/assets/data/xml/text-infos'
import familyClasses from '~/assets/data/xml/familyClass'

export default class FamilyClassWeight {
  readonly entry: Readonly<XmlGoal.Pair>

  constructor (entry: XmlGoal.Pair) {
    this.entry = entry
  }

  get textInfo () {
    return textInfo.Root.Entry
  }

  get familyClass (): FamilyClass {
    const entry = familyClasses.Root.Entry.find((item) => {
      return item.zType === this.entry.zIndex
    })
    if (!entry) {
      throw new Error('not found')
    }
    return new FamilyClass(entry)
  }

  get zIndex (): string {
    return typeof this.entry.zIndex === 'string' ? this.entry.zIndex : ''
  }

  get name (): string {
    return this.familyClass.name
  }
}
