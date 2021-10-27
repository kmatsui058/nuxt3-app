import textInfo from '~/assets/data/xml/text-infos'
import teches from '~/assets/data/xml/tech'

export default class Tech {
  readonly entry: Readonly<XmlTech.Entry>

  constructor (entry: XmlTech.Entry | string) {
    if (typeof entry === 'string') {
      const test = teches.Root.Entry.find(testEntry => testEntry.zType === entry)
      if (!test) { throw new Error(`tech not found by ${entry}`) }
      this.entry = test
    } else {
      this.entry = entry
    }
  }

  get textInfo () { return textInfo.Root.Entry }

  get name (): string {
    const test = this.textInfo.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get techPreReq (): Tech[] {
    const pair = this.entry.abTechPrereq?.Pair
    if (!pair) { return [] }
    if (Array.isArray(pair)) { return pair.map(item => new Tech(item.zIndex)) }
    return [new Tech(pair.zIndex)]
  }
}
