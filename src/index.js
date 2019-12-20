module.exports = function jsx_extension_converter() {
  return {
    name: 'jsx_extension_converter',
    visitor: {
      ImportDeclaration(path) {
        const current_value = path.node.source.value,
          new_value = current_value.replace(/\.jsx$/, '.js');
        path.node.source.value = new_value;
      }
    }
  };
}
