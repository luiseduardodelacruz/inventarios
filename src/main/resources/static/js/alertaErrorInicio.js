document.addEventListener('DOMContentLoaded', function() {
  var alertElement = document.getElementById('alert-border-2');
  if (!alertElement.classList.contains('hidden')) {
      alertElement.classList.remove('hidden');
  }
});