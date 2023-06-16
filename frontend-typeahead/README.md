# Typeahead

## Description

Typeahead or autocomplete is a common feature that people come across on websites. For example, when you are searching on Google, you will notice a word populates before you finish typing.

## Requirements

- Whenever the user focuses the text field and the value changes, it should show the list of suggestions. [ok]

- Whenever the text input looses focus (either because of clicking away or becasue of pressing Tab for example) the suggestions should disappear, so they don't keep covering the rest of the app. [ok]

- When the user writes something in the text field, it should continuously fetch and show suggestions for anything written, updating it live, without the need to click a button or press the ENTER key or anything else [ok]

- We don't want to blow up our API by sending so many unnecessary requests, so whenever the text field is changed, instead of immediately sending a request, it should wait for 250 ms of no new changes before actually sending a request to the API. [ok]

- Once the suggestions appear, hovering the mouse pointer on any specific suggestion should highlight it.

**Nice to have**

- Add a cache layer for the data

- Have another list which will have selected movies from your search list.
