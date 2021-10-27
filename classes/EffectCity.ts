import textInfo from '~/assets/data/xml/text-infos'

export default class EffectCity {
  readonly entry: Readonly<XmlEffectCity.Entry>

  constructor (entry: XmlEffectCity.Entry) {
    this.entry = entry
  }

  get textInfo () {
    return textInfo.Root.Entry
  }

  get zIndex (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get name (): string {
    const test = this.textInfo.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString() : ''
  }

  get yields (): XmlEffectCity.Pair[] {
    const pair = this.entry.aiYieldRate?.Pair
    if (!pair) { return [] }
    if (Array.isArray(pair)) { return pair }
    return [pair]
  }
}
