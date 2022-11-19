module.exports = {
  '**/*.(ts|tsx)': [() => 'yarn typecheck', 'prettier --write', 'eslint --fix'],
};
