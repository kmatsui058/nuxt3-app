
    const data: XmlMods.RootObject = {
  "ModInfo": {
    "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "description": "Fight to survive as the only civilized Nation in a world filled with envious and distrustful Tribes.\n  \nSETUP (click \"Show Options\" above)\nicon(bullet) Choose your Nation and Map.\nicon(bullet) Choose Tribal Organization and Uprising Time.\nicon(bullet) Higher game difficulty and tribal aggression levels increase the size of the Horde.\n  \nSCENARIO RULES\nicon(bullet) When the game starts, a countdown and a Horde size estimate will be displayed.\nicon(bullet) When the Horde arrives, a unit count will be displayed.\nicon(bullet) The Horde will be made up of link(TRIBE_RAIDERS,1) units.\nicon(bullet) When the uprising occurs, any link(TRIBE_RAIDERS) present will be added to the Horde.\nicon(bullet) Non-link(TRIBE_RAIDERS,1) Tribal units will -not- be added to the Horde.\nicon(bullet) During the uprising, link(TRIBE_RAIDERS) gain an extra level of link(CONCEPT_FATIGUE).\n\nCHANGES FROM DEFAULT GAME\nicon(bullet) link(CONCEPT_AMBITION,2) have been removed. Focus on the Horde.\nicon(bullet) link(CONCEPT_TRIBE,2) grow increasingly hostile as the game progresses.\nicon(bullet) The link(COUNCIL_AMBASSADOR) role has been removed, and link(DIPLOMACY_TRUCE), link(DIPLOMACY_PEACE), and link(CONCEPT_ALLIANCE_TRIBE) cannot be negotiated with link(CONCEPT_TRIBE,2). Related events have been disabled.\nicon(bullet) link(UNIT_WORKER,2) can be upgraded to link(UNIT_MILITIA).\nicon(bullet) Some family bonuses have been adjusted:\n   icon(bullet) Instead of link(UNIT_CARAVAN,2), the link(FAMILYCLASS_TRADERS,1) seat gets extra link(YIELD_ORDERS); similarly, link(FAMILYCLASS_TRADERS) get link(YIELD_ORDERS) instead of link(YIELD_MONEY) from hamlets.\n   icon(bullet) Instead of link(EFFECTUNIT_STEADFAST), link(FAMILYCLASS_CHAMPIONS,1) link(UNITTRAIT_INFANTRY) units gain link(EFFECTUNIT_GUARD1).\n\nVICTORY\nicon(bullet) To win, eliminate the Barbarian Horde.",
    "singlePlayer": "true",
    "multiplayer": "true"
  }
}
    export default data
    