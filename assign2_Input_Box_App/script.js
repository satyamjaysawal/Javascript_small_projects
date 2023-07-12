document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('input-box');
    const submitBtn = document.getElementById('submit-btn');
    const itemList = document.getElementById('item-list');
  
    submitBtn.addEventListener('click', function() {
      const newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.textContent = inputBox.value;
      itemList.appendChild(newItem);
      inputBox.value = '';
    });
  });
  