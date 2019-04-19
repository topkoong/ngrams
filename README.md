# ngrams


## Setup

**Fork** and clone this repository to your machine. https://github.com/topkoong/ngrams

Make sure that you have `Node` installed on your local machine. 

### Installing Node

Download the Node.js source code or a pre-built installer for your platform
https://nodejs.org/en/download/

Tip: To test that you've got Node.js correctly installed on your computer, open a new terminal and type `node --help` and you should see the usage documentation.

## Getting started
You'll need to open a new terminal (command prompt) for the node and npm command line tools to be on your PATH.
Execute the following to run the app on your local machine from your terminal if you're on a Mac:
```bash

npm start
```

Once you run `npm start`, you should see the following output to the terminal and then Node.js returns.

```bash
UNIT TESTING

==================================

EMPTY STRING: '' 

[]


==================================

ONE WORD: 'test.'

[ 'test' ]


ONE WORD WITH PUNCTUATION: 't@est.#{}' 

==================================

[ 'test' ]


Test cases for even and odd words including punctuation

==================================

'Show me the code.' 

[ 'Show ',
  'Show me ',
  'Show me the ',
  'Show me the code ',
  'me ',
  'me the ',
  'me the code ',
  'the ',
  'the code ',
  'code ' ]


==================================

'I love JavaScript.' 

[ 'I ',
  'I love ',
  'I love JavaScript ',
  'love ',
  'love JavaScript ',
  'JavaScript ' ]


==================================

'Which coffee is the healthiest?' 

[ 'Which ',
  'Which coffee ',
  'Which coffee is ',
  'Which coffee is the ',
  'Which coffee is the healthiest ',
  'coffee ',
  'coffee is ',
  'coffee is the ',
  'coffee is the healthiest ',
  'is ',
  'is the ',
  'is the healthiest ',
  'the ',
  'the healthiest ',
  'healthiest ' ]
 ```
