document.getElementById('runBtn').addEventListener('click', function() {
    const outputBox = document.getElementById('output');
    outputBox.innerHTML = "[SYS] Python simülatörü çalıştırılıyor...";
    
    this.disabled = true;
    this.style.opacity = "0.6";

    setTimeout(() => {
        const randomHash = Math.floor(Math.random() * 90000) + 10000;
        outputBox.innerHTML = `[SUCCESS] Protokol onaylandı.<br>>> Çekirdek Yanıtı: <strong>#SECURE-${randomHash}</strong>`;
        
        this.disabled = false;
        this.style.opacity = "1";
    }, 1200);
});
