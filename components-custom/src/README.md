# State and Events Design Process

### Using Accordion Component as an example

### What state and event handlers are there?

1. List out specifically what users will do and the *changes* they will see while using the app.

2. Categorize each step as 'state' or 'event handler'.
    - Users see something on the screen change: we probably need **state** to implement this step.
    - Users committed some action: we probably need an **event handler** to implement this.

3. Group common steps. Remove duplicates. Re-write descriptions.
    - Can multiple similar event handlers be combined into fewer ones or just one handler?
    - Can multiple similar states be combined into fewer ones or just one state?
    - Generalize the descriptions. E.g. re-write 'clicked on the third section' to 'clicked on a section header' or 'third section collapses' to 'one section expands, all others collapse'.


### What name and type (E.g. number, string, boolean, array, object)?
##### Ideally, avoid arrays or objects as they're more complex compared to the simple types.

4. Look at mockup. Remove or simplify parts that aren't changing.
    - E.g. in the mocks, remove hard coded text because they're set and has nothing to do with state or events.

5. Replace remaining elements with text descriptions.
    - Use simple descriptions, preferably one word that captures the essence of what's happening. E.g. *expanded, collapsed, collapsed*.
    - Tip: imagine you're telling another engineer who cannot see your screen what the UI looks like.

6. Repeat #4 and #5 with a different variation.
    - E.g. *collapsed, collapsed, expanded*.

7. Image you have to write a function that returns the text of steps #5 and #6. In addition to your component props, *what other argument(s) would this function need?*
    - E.g. the function must return *collapsed, collapsed, expanded* and also return *expanded, collapsed, collapsed*.
    - E.g. the addtional argument could be a number representing the index in the array where the *expanded* variable would be.


### Where is it defined?

8. Decide where each event handler and state will be defined.
    - Tip: crucial question to ask, does any component besides Accordion *reasonably* need to know which item is expanded?
    - If Yes, put *expanded* in App. If No, put *expanded* in Accordion.
    - Tip: event handler usually should be *defined* in the same component as the state it modifies. Although the even handler might be *used* in different components.

