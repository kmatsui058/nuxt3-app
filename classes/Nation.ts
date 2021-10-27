import Family from './Family'
import Tech from '~/classes/Tech'
import families from '~/assets/data/xml/family'
import textNation from '~/assets/data/xml/text-nation'
import tech from '~/assets/data/xml/tech'

export default class Nation {
  private readonly textNations = textNation.Root.Entry
  private readonly tech = tech.Root.Entry

  readonly entry: Readonly<XmlNation.Entry>

  constructor (entry: XmlNation.Entry) {
    this.entry = entry
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get name (): string {
    const test = this.textNations.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get teches (): Tech[] {
    const result: Tech[] = []
    const keys = this.entry.aeStartingTech.zValue ? this.entry.aeStartingTech.zValue : []
    keys.forEach((key) => {
      const test = this.tech.find(el => el.zType === key)
      if (test && typeof test.Name === 'string') {
        result.push(new Tech(test))
      }
    })

    return result
  }

  get families (): Family[] {
    return families.Root.Entry.filter(entry => entry.Nation === this.entry.zType)
      .map((family) => {
        return new Family(family)
      })
  }
}
