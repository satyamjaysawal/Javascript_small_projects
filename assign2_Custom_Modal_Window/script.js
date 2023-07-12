document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const body = document.body;
  
    openModalBtn.addEventListener('click', function() {
      modalOverlay.style.opacity = '1';
      modalOverlay.style.pointerEvents = 'auto';
      body.classList.add('modal-open');
    });
  
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
  
    function closeModal() {
      modalOverlay.style.opacity = '0';
      modalOverlay.style.pointerEvents = 'none';
      body.classList.remove('modal-open');
    }
  });
  