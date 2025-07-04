function showSection(sectionId) {
    // 全てのセクションを非表示
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 指定されたセクションを表示
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // ホーム画面の時はbodyのスクロールを無効、他は有効
    if (sectionId === 'home') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    // ハンバーガーメニューを閉じる
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }

    // ナビゲーションリンクのアクティブ状態を更新
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.color = '#fff';
    });
    
    const clickedLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (clickedLink){
        event.target.style.color = '#ff6b6b';
    }
}

// ハンバーガーメニュー用の関数
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// YouTube動画埋め込み用の関数
function embedYouTubeVideo(videoId, containerId) {
    const container = document.getElementById(containerId);
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = '100%';
    iframe.height = '200';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    container.innerHTML = '';
    container.appendChild(iframe);
}

// 使用例（実際のYouTube動画IDに置き換えてください）
// embedYouTubeVideo('your-video-id-1', 'video-container-1');