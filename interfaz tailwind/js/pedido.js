const container = document.getElementById('imageContainer');
const numImagesSelect = document.getElementById('numImagesSelect');


numImagesSelect.addEventListener('change', function(event) {
    event.preventDefault();
    

    const numImages = parseInt(event.target.value);
    
   
    container.innerHTML = '';
    
   
    for (let i = 0; i < numImages; i++) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.classList.add('my-2');
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            
          
            if (!file.type.startsWith('image/')) {
                return;
            }
            
          
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.classList.add('w-full', 'max-w-xs', 'p-2', 'border', 'border-orange-300', 'rounded-lg', 'shadow-md', 'my-2');
            
          
            container.replaceChild(img, fileInput);
            
           
            container.scrollTop = container.scrollHeight;
        });
        
        container.appendChild(fileInput);
    }
});

