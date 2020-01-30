# Ionic Tabs Navigation Issue

## Summary
If a tab has it's own sub-navigation and there is a redirect defined for the root tab to default to a page within that tabs navigation stack it should always show the page of the default page when switching tabs assuming you have not navigated to another page within that tab.

## Definitions

  * TAB_WITH_REDIRECT: The tab that contains a redirect from it's root to the desired default page within the tab
  * TAB_WITHOUT_REDIRECT: Any tab that does not meet the criteria of TAB_WITH_REDIRECT

## Excepted Behavior

  1. Navigate via address bar to the root url of TAB_WITH_REDIRECT. By clicking, switch to a TAB_WITHOUT_REDIRECT. By clicking, switch back to TAB_WITH_REDIRECT. Observe TAB_WITH_REDIRECT is displayed.
  1. Navigate via address bar to the url of a TAB_WITHOUT_REDIRECT. Switch by clicking, to the tab TAB_WITH_REDIRECT. Switch by clicking, back to TAB_WITHOUT_REDIRECT. Switch by clicking, back to TAB_WITH_REDIRECT. Observe TAB_WITH_REDIRECT is displayed.

## Actual Behavior
  1. Correct: TAB_WITH_REDIRECT is displayed
  1. Incorrect: TAB_WITHOUT_REDIRECT is displayed. 

## Version summary
  * 4.11.5: Behavior is as expected
  * 4.11.6: Behavior is incorrect. Tab 1 stops displaying in scenario 2.
  * 4.11.10: Behavior is incorrect. Tab 1 refuses to load, even when it is the initial page