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

    // スクロールは常に有効
    document.body.style.overflow = 'auto';

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

// チケットモーダル制御関数
function openTicketModal(eventId, livepocketUrl = null) {
    const modal = document.getElementById('ticket-modal');
    const livepocketSection = document.getElementById('livepocket-section');
    const livepocketLink = document.getElementById('livepocket-link');
    
    // Livepocketリンクがある場合のみセクションを表示
    if (livepocketUrl) {
        livepocketSection.style.display = 'block';
        livepocketLink.href = livepocketUrl;
    } else {
        livepocketSection.style.display = 'none';
    }
    
    modal.style.display = 'block';
    
    // 背景クリックでモーダルを閉じる
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeTicketModal();
        }
    }
}

function closeTicketModal() {
    const modal = document.getElementById('ticket-modal');
    modal.style.display = 'none';
}

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeTicketModal();
    }
});

// ロゴ回転機能
function spinLogo() {
    const logo = document.querySelector('.logo-img');
    const audio = document.getElementById('spin-sound');
    
    // 既に回転中の場合は何もしない
    if (logo.classList.contains('spinning')) {
        return;
    }
    
    // 音声を再生
    if (audio) {
        // 現在の再生を停止してリセット
        audio.pause();
        audio.currentTime = 0;
        
        // 即座に再生
        audio.play().catch(error => {
            console.log('音声再生に失敗:', error);
        });
    }
    
    // 回転クラスを追加
    logo.classList.add('spinning');
    
    // アニメーション終了後にクラスを削除
    setTimeout(() => {
        logo.classList.remove('spinning');
    }, 800);
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // HOMEナビゲーションをアクティブにする
    const homeLink = document.querySelector('[onclick="showSection(\'home\')"]');
    if (homeLink) {
        homeLink.style.color = '#ff6b6b';
    }
});