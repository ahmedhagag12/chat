document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText === '') {
        return;
    }

    const chatMessages = document.getElementById('chatMessages');
    
    // إنشاء رسالة جديدة
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.innerHTML = `<div class="text">${messageText}</div>`;
    
    chatMessages.appendChild(messageElement);
    
    // مسح الإدخال
    messageInput.value = '';
    
    // تمرير الرسائل تلقائيًا لأسفل
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('ageForm').reset();
    document.getElementById('result').innerText = '';
});

document.getElementById('whatsappButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText === '') {
        return;
    }

    const encodedMessage = encodeURIComponent(messageText);
    const phoneNumber = '01014082248'; // استبدل برقم الهاتف المطلوب
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
});
