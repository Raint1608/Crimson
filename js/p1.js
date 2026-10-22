
// ========== 侧边目录整体折叠 ==========
document.getElementById('tocFoldBtn').addEventListener('click', () => {
    const content = document.getElementById('tocContent');
    const btn = document.getElementById('tocFoldBtn');
    content.classList.toggle('hidden');
    btn.classList.toggle('collapsed');
    btn.textContent = content.classList.contains('hidden') ? '▶' : '▼';
});

// ========== 目录内部分级折叠 ==========
document.querySelectorAll('.toc-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetList = document.getElementById(targetId);
        targetList.classList.toggle('hidden');
        btn.classList.toggle('collapsed');
        btn.textContent = targetList.classList.contains('hidden') ? '▶' : '▼';
    });
});
// ========== 图片点击放大预览 ==========
(function(){
    // 创建弹窗DOM
    const modal = document.createElement('div');
    modal.className = "img-preview-modal";
    const bigImg = document.createElement('img');
    modal.appendChild(bigImg);
    document.body.appendChild(modal);

    // 绑定页面内设卡图片
    document.querySelectorAll('.img-card-wrap img').forEach(img=>{
        img.addEventListener('click',function(){
            bigImg.src = this.src;
            bigImg.alt = this.alt;
            modal.classList.add('show');
        })
    })

    // 点击遮罩关闭
    modal.addEventListener('click',()=>{
        modal.classList.remove('show');
    })
    // ESC按键关闭
    document.addEventListener('keydown',(e)=>{
        if(e.key === 'Escape') modal.classList.remove('show');
    })
})();
// ========== 补充预留区折叠切换 ==========
const reserveToggle = document.querySelector('.reserve-toggle');
const reserveBtn = document.querySelector('.reserve-fold-btn');
const reserveBody = document.querySelector('.reserve-body');

reserveToggle.addEventListener('click', ()=>{
    reserveBody.classList.toggle('hidden');
    reserveBtn.classList.toggle('collapsed');
    reserveBtn.textContent = reserveBody.classList.contains('hidden') ? '▶' : '▼';
});