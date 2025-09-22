document.addEventListener('DOMContentLoaded', () => {
    const langZhButton = document.getElementById('lang-zh');
    const langEnButton = document.getElementById('lang-en');
    const allElements = document.querySelectorAll('[data-lang-zh], [data-lang-en]');
    
    // 设置默认语言为中文
    let currentLang = 'zh';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang; // 设置html标签的lang属性

        allElements.forEach(element => {
            if (element.dataset[`lang-${lang}`]) {
                // 如果当前语言的内容存在，则更新元素的textContent或placeholder等
                // 这里我们使用textContent，对于title等属性需要特殊处理
                if (element.tagName === 'TITLE') {
                    document.title = element.dataset[`lang-${lang}`];
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // 如果是输入框，可以设置placeholder
                    element.placeholder = element.dataset[`lang-${lang}`];
                } else {
                    element.textContent = element.dataset[`lang-${lang}`];
                }
            }
        });

        // 切换按钮的激活状态
        if (lang === 'zh') {
            langZhButton.classList.add('active');
            langEnButton.classList.remove('active');
        } else {
            langEnButton.classList.add('active');
            langZhButton.classList.remove('active');
        }
    }

    langZhButton.addEventListener('click', () => setLanguage('zh'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    // 页面加载时执行一次，确保默认语言显示正确
    setLanguage(currentLang);
});
