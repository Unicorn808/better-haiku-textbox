var quill = new Quill('#quilBox', {
  modules: {
    formula: true,
    syntax: true,
    toolbar: '#toolbar-container'
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
});
