window.addEventListener('load', function() {
    // 設置放大漸隱效果
    const openingTitle = document.getElementById('opening-title');

    // 3秒後開始放大漸隱效果
    setTimeout(function() {
        openingTitle.style.animation = 'zoomAndFadeOut 2s forwards'; // 放大並漸隱動畫
    }, 3000); // 等待3秒顯示後再漸隱
    
    // 5秒後移除開場動畫並顯示內容
    setTimeout(function() {
        const openingSequence = document.getElementById('opening-sequence');
        openingSequence.style.display = 'none'; // 隱藏開場動畫

        // 移除 body 的 block-interaction 類
        document.body.classList.remove('block-interaction');

        // 顯示主要內容
        document.body.classList.add('show-content');
    }, 5000); // 5秒後結束動畫
});