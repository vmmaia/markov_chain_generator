# markov_chain_generator

A Markov Chain Text Generator is a program that uses a statistical model called a Markov chain to generate new text that is similar in style to a set of sample text. The Markov chain algorithm works by analyzing the frequency of words and phrases in the sample text, and then using that data to construct new sentences that are similar in structure and meaning.

## Usage

```
node index.js <author> <sentece_length>
```

Default author is `dickens`. You choose one from `['dickens', 'lovecraft', 'doyle']`.

Default sentence length is `20`.

## How it works

This implementation of a Markov Chain generator follows 4 main steps:

1. Parse a corpus of text from a specific author

2. remove any extraneous characters or words that might interfere with the Markov chain algorithm.

3. Building the Markov model aka a data structure that represents the frequency of each word or phrase in the sample text, as well as the probability of transitioning from one word to another.

4. Generate a new phrase by starting with a seed word and then using the Markov chain to generate the next word in the sequence, based on the probability of that word following the previous one.

## Example outputs

1. Charles Dickens

```
the boardroom Having prepared for the sound Mr Giles who is this innocent lady and her and desolation and Charlotte
```

```
the light and men assembled solemnly contracted to himself expressed it if he sank into which supplied the prediction followed
```

```
the tears The old remembrances of some pleasant witticisms on her companion Fagin in the more agility than those on
```

2. HP Lovecraft

```
the abyss we would have largely given us I got the same as a vast stone ramps or pseudofoot which
```

```
the rest of the ether and it as jest or conclusive There are protecting hills and involving factors alien element
```

```
the Old Ones were apparently ritualistic sculptures their tough tissues of continents are earths history They seemed endless variety accuracy
```

3. Sir Arthur Conan Doyle

```
the best How could never told us in the dock There is possible that the young man masked face the
```

```
the bullet but at the doctors hold it behind broad corridor which has his disappearance I am I could be
```

```
the best but when a large square of London and an impudent fellow He was a secluded rows of the
```

## Other uses for Markov Chains

Markov chains have many real-world applications, particularly in fields such as finance and biology.

In finance, Markov models are used to model the behavior of financial markets, particularly in areas such as stock price prediction, portfolio optimization, and risk management. For example, a Markov chain can be used to model the transitions between different states of the stock market, such as bull and bear markets, and to estimate the probability of future market movements.

In biology, Markov models are used to model the behavior of biological systems, such as protein folding, gene regulation, and molecular interactions. For example, a Markov chain can be used to model the probability of a protein folding into a particular conformation, or the probability of a gene being turned on or off in response to a particular stimulus.

Overall, Markov chains are a powerful tool for modeling complex systems that exhibit probabilistic behavior, and they have a wide range of real-world applications.

## Improvements

Some possible modifications to this basic Markov chain text generator project could include using different order Markov chains (i.e. considering more than one previous word when determining the next word), using more comprehensive sets of training data, or building a web-based interface to allow users to generate text on the fly.
