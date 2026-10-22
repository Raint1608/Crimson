
    // 折叠/展开企友列表
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const target = document.getElementById(targetId);
            target.classList.toggle('hidden');
            btn.classList.toggle('collapsed');
            btn.textContent = target.classList.contains('hidden') ? '▶' : '▼';
        });
    });

    // 企友区左右箭头滚动
    document.querySelectorAll('.scroll-arrow').forEach(btn => {
        btn.addEventListener('click', () => {
            const trackId = btn.getAttribute('data-scroll');
            const track = document.getElementById(trackId);
            const box = track.parentElement;
            const scrollDistance = 240;

            if (btn.classList.contains('left')) {
                box.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
            } else {
                box.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            }
        });
    });

    // NPC 区左右箭头滚动（仅滚动右侧普通NPC）
    document.querySelectorAll('.npc-arrow').forEach(btn => {
        btn.addEventListener('click', () => {
            const trackId = btn.getAttribute('data-npc-scroll');
            const track = document.getElementById(trackId);
            const box = track.parentElement;
            const scrollDistance = 240;

            if (btn.classList.contains('left')) {
                box.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
            } else {
                box.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            }
        });
    });

