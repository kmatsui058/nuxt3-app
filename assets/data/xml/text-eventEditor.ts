
    const data: XmlTextEventEditor.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "English": {
          
        }
      },
      {
        "zType": "TEXT_EVENTEDITOR_STORY_NAME_BASE_DESC",
        "English": "A unique name base for this event story, such as FAMILY_SQUABBLE. Do not include EVENTSTORY_ in this string.\n\nThe name base will be automatically appended to generic prefixes like EVENTSTORY_ and EVENTOPTION_ to create zTypes."
      },
      {
        "zType": "TEXT_EVENTEDITOR_OPTION_NAME_BASES_DESC",
        "English": "The name bases for this story’s options. These will be appended to the option zTypes after the story name base.<br><br>If you intend to add existing options or options whose name is not calculated by the same nature, just add blank items here."
      },
      {
        "zType": "TEXT_EVENTEDITOR_GROUP_DESC",
        "English": "The group that this entry belongs to. This is for sorting purposes in the browser/xml"
      },
      {
        "zType": "TEXT_EVENTEDITOR_SHOW_REFERENCES_DESC",
        "English": "Displays a list of info tags that directly reference this entry"
      },
      {
        "zType": "TEXT_EVENTEDITOR_SHOW_EVENT_ROOTS_DESC",
        "English": "Displays a list of events that reference this entry somewhere in the heiarchy"
      }
    ]
  }
}
    export default data
    