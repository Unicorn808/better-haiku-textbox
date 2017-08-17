var quill = new Quill('#cke_cms_box_body', {
  modules: {
    formula: true,
    syntax: true,
    toolbar: '#toolbar-container'
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
});
