import time
import random

def run_simulation():
    print("=" * 40)
    print("   CYBER-CORE PYTHON ENGINE v2.4")
    print("=" * 40)
    
    protocols = ["AUTH_BYPASS", "PACKET_SNIFF", "DATA_ENCRYPT", "NODE_SYNC"]
    
    for i in range(3):
        p = random.choice(protocols)
        print(f"[{i+1}/3] İşleniyor: {p}...")
        time.sleep(0.5)
        
    print("\n[BAŞARILI] Tüm sistemler kararlı çalışıyor.")

if __name__ == "__main__":
    run_simulation()
