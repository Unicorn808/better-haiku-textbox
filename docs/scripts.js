var quill = new Quill('#quillBox', {
  modules: {
    formula: true,
    syntax: true,
    toolbar: '#toolbar-container'
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
});

quill.on('text-change', function(delta, source) {
  window.postMessage(quill.getText(), "*");
});
