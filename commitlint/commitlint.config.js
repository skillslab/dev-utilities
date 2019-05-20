const Configuration = {
  parserPreset: { parserOpts: { issuePrefixes: ['slab-'] } },
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 72],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 72],
    'header-case': [2, 'always', 'sentence-case'],
    'header-full-stop': [1, 'never', '.'],
    'header-max-length': [1, 'always', 50],
    'references-empty': [1, 'never'],
    'subject-full-stop': [2, 'never', '.'],
  },
};

module.exports = Configuration;
