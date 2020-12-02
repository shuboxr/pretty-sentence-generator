/* Lines 4-203 are used to house words in array blocks, organized by part of
 * speech. These word pools are drawn from to create the randomized sentences.
 */
const adjs = [
    'stupendous',   'vivacious',     'sedentary',        'miniscule',
    'aesthetic',    'altruistic',    'complaisant',      'ubiquitous',
    'bibulous',     'benevolent',    'eccentric',        'evasive',
    'rudimentary',  'unequivocal',   'voluble',          'gratuitous',
    'intrepid',     'discursive',    'inextricable',     'impolitic',
    'imperious',    'prodigal',      'concupiscent',     'disquieting',
    'peckish',      'esurient',      'recreational',     'preemptive',
    'grotesque',    'Machiavellian', 'indentured',       'usurious',
    'blithe',       'surreal',       'inordinate',       'lackadaisical',
    'demeaning',    'duplicitous',   'altruistic',       'credulous',
    'presumptive',  'insinuating',   'strident',         'rife',
    'conciliatory', 'aberrant',      'disgruntled',      'intransigent',
    'delirious',    'frantic',       'imperious',        'overbearing',
    'seething',     'grubby',        'nebulous',         'hifalutin',
    'tepid',        'pharisaic',     'noxious',          'generic',
    'flimsy',       'entrenched',    'scabrous',         'pulchritudinous',
    'stark',        'ad hominem',    'ad hoc',           'fastidious',
    'indomitable',  'nascent',       'terse',            'reticent',
    'improvident',  'acuity',        'pedantic',         'queasy',
    'hedonistic',   'desultory',     'epistolary',       'self-deprecating',
    'petulant',     'irrevocable',   'disheveled',       'adjunct',
    'scrumptious',  'delectable',    'self-deprecating', 'cathartic',
    'deterrent',    'poised',        'congenial',        'resplendent',
    'pugnacious',   'sagacious',     'inexorable',       'ineptitude',
    'abjuration',   'coruscant',     'glib',             'vis-a-vis',
    'insidious',    'presumptive',   'chronic'
];

const nouns = [
    'feist',       'nostalgia',    'dispensation',  'displeasure',
    'accolade',    'propensity',   'opinion',       'abundance',
    'epidemic',    'plague',       'calamity',      'ovation',
    'anecdote',    'discretion',   'manifestation', 'ramification',
    'tranquility', 'parade',       'amalgamation',  'context',
    'adamant',     'heed',         'legion',        'conceit',
    'placebo',     'agility',      'fragment',      'grandeur',
    'avalanche',   'thrill',       'antidote',      'exuberance',
    'deposition',  'nudger',       'sensation',     'wrangler',
    'abyss',       'frontier',     'brethren',      'traction',
    'cliche',      'platitude',    'patriarch',     'matriarch',
    'demeanor',    'meekness',     'camaraderie',   'kernel',
    'chaperone',   'liberty',      'melancholy',    'affinity',
    'vocation',    'voyage',       'myriad',        'aptitude',
    'cacophony',   'demeanor',     'context',       'trepidation',
    'fragment',    'doodad',       'pedigree',      'gravitas',
    'novelty',     'substantiate', 'orator',        'epitome',
    'patron',      'vision',     'subtlety',      'berating',
    'admonishment','thrill',       'levity',        'opulence',
    'inundation',  'fallacy',      'mortgage',      'whirring',
    'paradox',     'prodigy',      'myriad',        'dichotomy',
    'caveat',      'paradigm',     'disparity',     'ennui',
    'facet',       'citadel',      'purveyor',      'marquise',
    'discourse',   'prong',        'adjunct'
];

const transVerbs = [
    'chasten',    'exhort',      'berate',     'enrage',
    'crank up',   'flood',       'snowball',   'skyrocket',
    'catapult',   'flick',       'jump-start', 'tackle',
    'grab',       'grasp',       'wrestle',    'poke',
    'stir',       'prod',        'stab',       'strike',
    'smash',      'hit',         'plunge',     'drop',
    'dump',       'drain',       'squeeze',    'topple',
    'ditch',      'block',       'muzzle',     'electrify',
    'galvanize',  'fire up',     'ignite',     'kindle',
    'whip up',    'sharpen',     'shock',      'jolt',
    'beat',       'regurgitate', 'trigger',    'pocket',
    'bat',        'smack',       'slap',       'kick',
    'kick-start', 'hammer',      'nail',       'club',
    'flog',       'clutch',      'hook',       'cling',
    'grip'
];

const intVerbs = [
    'stumble',   'wobble',      'swing',     'lurch',
    'glide',     'zip',         'sail',      'crash',
    'dive',      'tiptoe',      'pussyfoot', 'duck',
    'flip-flop', 'dilly-dally', 'linger',    'stall',
    'sway',      'sink',        'spurt',     'hurry',
    'dash',      'nip',         'race',      'whiz',
    'flit',      'chew',        'stroll',    'sashay',
    'amble',     'plod',        'ramble',    'loiter',
    'meander',   'roam',        'snake',     'gallivant',
    'twist',     'dance',       'jig',       'jive',
    'waltz',     'tango',       'swirl',     'hop',
    'trip',      'skip',        'whirl',     'gallop',
    'stride',    'zoom',        'trot',      'dart',
    'sprint',    'shoot',       'leap'
];

const adverbs = [
    'abnormally',    'absentmindedly',   'accidentally', 'actually',
    'adventurously', 'afterwards',       'almost',       'always',
    'annually',      'anxiously',        'arrogantly',   'awkwardly',
    'bashfully',     'beautifully',      'bitterly',     'bleakly',
    'blindly',       'blissfully',       'boastfully',   'boldly',
    'bravely',       'briefly',          'brightly',     'briskly',
    'broadly',       'busily',           'calmly',       'carefully',
    'carelessly',    'cautiously',       'certainly',    'cheerfully',
    'clearly',       'cleverly',         'closely',      'coaxingly',
    'colorfully',    'commonly',         'continually',  'coolly',
    'correctly',     'courageously',     'crossly',      'cruelly',
    'curiously',     'daily',            'daintily',     'dearly',
    'deceivingly',   'deeply',           'defiantly',    'deliberately',
    'delightfully',  'diligently',       'dimly',        'doubtfully',
    'dreamily',      'easily',           'elegantly',    'energetically',
    'enormously',    'enthusiastically', 'equally',      'especially',
    'even',          'evenly',           'eventually',   'exactly',
    'excitedly',     'extremely',        'fairly',       'faithfully',
    'famously',      'far',              'fast',         'fatally',
    'ferociously',   'fervently',        'fiercely',     'fondly',
    'foolishly',     'fortunately',      'frankly',      'frantically',
    'freely',        'frenetically',     'frightfully',  'fully',
    'furiously',     'generally',        'generously',   'gently',
    'gladly',        'gleefully',        'gracefully',   'gratefully',
    'greatly',       'greedily',         'happily',      'hastily',
    'healthily',     'heavily',      'helpfully',      'helplessly',
    'highly',        'honestly',     'hopelessly',     'hourly',
    'hungrily',      'immediately',  'innocently',     'inquisitively',
    'instantly',     'intensely',    'intently',       'interestingly',
    'inwardly',      'irritably',    'jaggedly',       'jealously',
    'jovially',      'joyfully',     'joyously',       'jubilantly',
    'judgmentally',  'justly',       'keenly',         'kiddingly',
    'kindheartedly', 'kindly',       'knavishly',      'knowingly',
    'knowledgeably', 'kookily',      'lazily',         'less',
    'lightly',       'likely',       'limply',         'lively',
    'loftily',       'longingly',    'loosely',        'loudly',
    'lovingly',      'loyally',      'madly',          'majestically',
    'meaningfully',  'mechanically', 'merrily',        'miserably',
    'mockingly',     'monthly',      'more',           'mortally',
    'mostly',        'mysteriously', 'naturally',      'nearly',
    'neatly',        'nervously',    'never',          'nicely',
    'noisily',       'not',          'obediently',     'obnoxiously',
    'oddly',         'offensively',  'officially',     'often',
    'only',          'openly',       'optimistically', 'overconfidently',
    'painfully',     'partially',    'patiently',      'perfectly',
    'physically',    'playfully',    'politely',       'poorly',
    'positively',    'potentially',  'powerfully',     'promptly',
    'properly',      'punctually',   'quaintly',       'queasily',
    'queerly',       'questionably', 'quicker',        'quickly',
    'quietly',       'quirkily',     'quizzically',    'randomly',
    'rapidly',        'rarely',        'readily',       'really',
    'reassuringly',   'recklessly',    'regularly',     'reluctantly',
    'repeatedly',     'reproachfully', 'restfully',     'righteously',
    'rightfully',     'rigidly',       'roughly',       'rudely',
    'safely',         'scarcely',      'scarily',       'searchingly',
    'sedately',       'seemingly',     'seldom',        'selfishly',
    'separately',     'seriously',     'shakily',       'sharply',
    'sheepishly',     'shrilly',       'shyly',         'silently',
    'sleepily',       'slowly',        'smoothly',      'softly',
    'solemnly',       'solidly',       'sometimes',     'soon',
    'speedily',       'stealthily',    'sternly',       'strictly',
    'successfully',   'suddenly',      'supposedly',    'surprisingly',
    'suspiciously',   'sweetly',       'swiftly',       'sympathetically',
    'tenderly',       'tensely',       'terribly',      'thankfully',
    'thoroughly',     'thoughtfully',  'tightly',       'tomorrow',
    'too',            'tremendously',  'triumphantly',  'truly',
    'truthfully',     'ultimately',    'unabashedly',   'unaccountably',
    'unbearably',     'unethically',   'unexpectedly',  'unfortunately',
    'unimpressively', 'unnaturally',   'unnecessarily', 'upbeat',
    'upright',        'upside-down',   'upward',        'urgently',
    'usefully',       'uselessly',     'usually',       'utterly',
    'vacantly',       'vaguely',       'vainly',        'valiantly',
    'vastly',         'verbally',      'very',          'viciously',
    'victoriously',   'violently',     'vivaciously',   'voluntarily',
    'warmly',         'weakly',        'wearily',       'well',
    'wetly',       'wholly',
    'wildly',      'willfully',
    'wisely',      'woefully',
    'wonderfully', 'worriedly',
    'wrongly',     'yawningly',
    'yearly',      'yearningly',
    'yesterday',   'yieldingly',
    'youthfully',  'zealously',
    'zestfully',   'zestily'
];

const preps = [
    'aboard',      'about',     'above',     'across',
    'after',       'against',   'along',     'amid',
    'among',       'anti',      'around',    'as',
    'at',          'before',    'behind',    'below',
    'beneath',     'beside',    'besides',   'between',
    'beyond',      'but',       'by',        'concerning',
    'considering', 'despite',   'down',      'during',
    'except',      'excepting', 'excluding', 'following',
    'for',         'from',      'in',        'inside',
    'into',        'like',      'minus',     'near',
    'of',          'off',       'on',        'onto',
    'opposite',    'outside',   'over',      'past',
    'per',         'plus',      'regarding', 'round',
    'save',        'since',     'through',
    'to',          'toward',    'towards',   'under',
    'underneath',  'unlike',    'until',     'up',
    'upon',        'versus',    'via',       'with',
    'within',      'without'
];

const auxVerbs = [
    'will', 'shall', 'may', 'might', 'can', 'could', 'must',
    'ought to', 'should', 'would', 'used to', 'needs to'
];

// Assembles a noun phrase in the form of [1] an article and [2] a noun with
// 50% chance for [3] an adjective modifying the noun and a 50% chance
// beyond that for [4] an adverb modifying the adjective.
function getNounPhrase() {
    // chooses the [2] noun
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    // begins concatenating the noun phrase
    let nounPhrase = noun;
    // gives a 50% chance to add an [3] adjective
    if (Math.random() >= .5) {
        let adj = adjs[Math.floor(Math.random() * adjs.length)];
        nounPhrase = adj + ' ' + nounPhrase;
        // gives a further 50% chance to add an [4] adverb
        if (Math.random() >= .5) {
            let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
            nounPhrase = adverb + ' ' + nounPhrase;
        }
    }
    // chooses definite or indefinite [1] article with 50% chance for each
    if (Math.random() >= .5) { 
        nounPhrase = 'the ' + nounPhrase;
    } else {
        // checks for a vowel at the start of the noun phrase, assigns "a"/"an"
        if (nounPhrase.indexOf(nounPhrase.match(/[aeiou]/)[0]) === 0) {
            nounPhrase = 'an ' + nounPhrase;
        } else {
            nounPhrase = 'a ' + nounPhrase;
        }
    }
    return nounPhrase;
}

// Assembles a verb phrase consisting of [1] a verb, potentially [2] an adverb,
// and in the case of transitive verbs [3] a direct object (using
// getNounPhrase()). I add a [4] helper verb to the beginning of the verb phrase
// in order to avoid properly tensing irregular verbs (and regular ones).
function getVerbPhrase() {
    let verbPhrase = '';
    let verb = '';
    // chooses an intransitive [1] verb or transitive verb with [3] object
    if (Math.random() >= .5) {
        verb = intVerbs[Math.floor(Math.random() * intVerbs.length)];
    } else {
        verb = transVerbs[Math.floor(Math.random() * transVerbs.length)] +
            ' ' + getNounPhrase();
    }
    // begins verb phrase concatenation
    verbPhrase += verb;
    // gives a 50% chance to add an [2] adverb
    if (Math.random() >= .5) {
        let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
        if (Math.random() >= .5) {
            verbPhrase = adverb + ' ' + verbPhrase;
        } else {
            verbPhrase = verbPhrase + ' ' + adverb;
        }
    }
    // adds [4] helper verb within the return phrase
    return ' ' + auxVerbs[Math.floor(Math.random() * auxVerbs.length)] +
        ' ' + verbPhrase;
}

// Assembles a full sentence utilizing getNounPhrase() and getVerbPhrase()
// with chance for a prepositional phrase. Capitalizes first letter and
// adds final punctuation.
function getSentence() {
    let sentence = '';
    let punc = '.';
    //builds a basic sentence of the form "noun does verb"
    sentence = getNounPhrase() + getVerbPhrase();
    //gives a 50% chance for a prepositional phrase at the beginning or end
    if (Math.random() >= .5) {
        if (Math.random() >= .5) {
            sentence = preps[Math.floor(Math.random() * preps.length)] +
                ' ' + getNounPhrase() + ' ' + sentence;
        } else {
            sentence = sentence + ' ' + preps[Math.floor(Math.random() *
                preps.length)] + ' ' + getNounPhrase();
        }
    }
    // replaces the first (lowercase) letter with a capitalized letter
    sentence = sentence.replace(/[a-z]/,sentence.charAt(0).toUpperCase());
    // could modify to use randomized punctuation
    sentence += punc;
    return sentence;
}

// This is why we're here! Prints our glorious sentence to the console.
console.log(getSentence());