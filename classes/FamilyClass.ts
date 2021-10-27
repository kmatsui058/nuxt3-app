import Family from './Family'
import EffectCity from './EffectCity'
import textInfos from '~/assets/data/xml/text-infos'
import goals from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'
import families from '~/assets/data/xml/family'
import effectCities from '~/assets/data/xml/effectCity'

export default class FamilyClass {
  readonly entry: Readonly<XmlFamilyClass.Entry>

  constructor (entry: XmlFamilyClass.Entry) {
    this.entry = entry
  }

  get textInfos () { return textInfos.Root.Entry }

  get name (): string {
    const test = this.textInfos.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get ambitions (): Goal[] {
    return goals.Root.Entry.map((item) => {
      return new Goal(item)
    }).filter(goal => goal.familyClassWeights.find(test => test.familyClass.zType === this.zType))
  }

  get families (): Family[] {
    return families.Root.Entry.filter(family => family.FamilyClass === this.entry.zType).map((item) => {
      return new Family(item)
    })
  }

  get effectCity (): EffectCity {
    const test = effectCities.Root.Entry.find(effect => effect.zType === this.entry.EffectCity)
    if (!test) { throw new Error('not found') }
    return new EffectCity(test)
  }
}
