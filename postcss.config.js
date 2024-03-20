export default {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ["./hugo_stats.json"],
      defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
      },
      safelist: [],
    },
    cssnano: { preset: 'default' }
  }
};
