const CracoAlias = import('craco-alias');

const plugins = [
  {
    plugin: CracoAlias,
    options: {
      source: 'tsconfig',
      tsConfigPath: 'tsconfig.paths.json',
    },
  },
];
