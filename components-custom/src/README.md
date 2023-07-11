# State and Events Design Process

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

5. Replace remaining elements with text descriptions.

6. Repeat #4 and #5 with a different variation.

7. Image you have to write a function that returns the text of steps #5 and #6. In addition to your component props, *what other arguments would you need?*


### Where is it defined?

8. Decide where each event handler and state will be defined.
