# cfp-github-importer

Import a CFP into Github issues for review.

## Why!?

Lots of things are great to do in public. Submitting CFPs isn't one of them. **WHY THE $^#% NOT?!?!** Knowing that your talk proposal is going to get put under a microscope in public is daunting for a lot of people (especially those who have never spoken before).

Having all your CFP submissions be Github issues, however, **is awesome.** It's just a huge pain to import them. Wait? This thing does that for me you say? Well WHY DIDN'T YOU TELL ME THAT!

## Usage

```
npm install cfp-github-importer -g
cfp-github-importer --file ./cfp-responses.tsv --auth 'user:pass' --repo 'my-conf/cfp-review-2014'
Parsing | ./cfp-responses.tsv
Reading issues | my-conf/cfp-review-2014
Already exists | ZOMG JAVASCRIPT
Already exists | JIFASNIF
Already exists | WHY CANT WE DO ALL THE THINGS
Creating | SOME OTHER NEW TALK
Creating | THAT MEANS THIS IS IDEMPOTENT
```

_n.b. the script is designed to be idempotent so you can run it multiple times and everything will be fine._

## Format

Right now this is the brittle part about this, but it assumes the [CFP format used by EmpireJS 2014][empirejs-cfp-2014]:

| Date | Name | Email | Twitter | Title | Description | Difficulty (1-5) | Anything Else? |
|:----:|:----:|:-----:|:-------:|:-----:|:-----------:|:----------------:|:--------------:|

#### LICENSE: MIT

[empirejs-cfp-2014]: https://docs.google.com/forms/d/1h0EEcAG67zB8RA7kJZAVYW9u95ZDch1hZBxIogNMRaw/