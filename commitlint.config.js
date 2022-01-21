module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-case': [2, 'always', 'upper-case'],
      'scope-empty': [2, 'never'],
      'jira-scope': [2, 'always'],
    },
    plugins: [
      {
        rules: {
          'jira-scope': ({ scope }) => {
            const JIRA_TICKET = /^[A-Z]{2,4}-[0-9]{1,4}/g;
  
            return [
              scope && scope.match(JIRA_TICKET),
              'Your scope should contain JIRA TICKET format',
            ];
          },
        },
      },
    ],
  };