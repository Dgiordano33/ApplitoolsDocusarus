const path = require('path');
const { Joi } = require('@docusaurus/utils-validation');

const theme = require(path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/lib'));
const themePath = path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/lib-next/theme');
const tsThemePath = path.resolve(__dirname, '../../node_modules/@docusaurus/theme-classic/src/theme');

let { ThemeConfigSchema } = require(path.resolve(
  __dirname,
  '../../node_modules/@docusaurus/theme-classic/lib/validateThemeConfig.js'
));

const NavbarCtaSchema = Joi.object({
  type: Joi.string().equal('cta').required(),
  position: Joi.string().default('left'),
  text: Joi.string().required(),
  href: Joi.string().required(),
});

const NavbarSeparatorSchema = Joi.object({
  type: Joi.string().equal('separator').required(),
  position: Joi.string().default('left'),
});

ThemeConfigSchema = ThemeConfigSchema.concat(
  Joi.object({
    navbar: { items: Joi.array().items(NavbarIconLinkSchema).items(NavbarSeparatorSchema).items(NavbarCtaSchema) },
  })
);

module.exports = {
  ...theme,
  default: (config, opts) => ({
    ...theme.default(config, opts),
    getThemePath() {
      return themePath;
    },
    getTypescriptThemePath() {
      return tsThemePath;
    },
  }),
  validateThemeConfig: ({ validate, themeConfig }) => validate(ThemeConfigSchema, themeConfig),
};
