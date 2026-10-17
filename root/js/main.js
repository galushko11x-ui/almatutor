/* ============================================================
   Альма Тьютор — интерактив
   При клике на CTA-блок раскрывается соответствующая панель
   с Google-формой и плавная прокрутка к ней.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // Открытие формы по клику на CTA-карточку
    document.querySelectorAll('[data-form-target]').forEach(function (card) {
        card.addEventListener('click', function () {
            var panelId = card.getAttribute('data-form-target');
            togglePanel(panelId, true);
        });
    });

    // Закрытие формы по крестику
    document.querySelectorAll('[data-close-target]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var panelId = btn.getAttribute('data-close-target');
            togglePanel(panelId, false);
        });
    });

    function togglePanel(panelId, open) {
        var panel = document.getElementById(panelId);
        if (!panel) return;

        // Скрываем все панели, затем показываем нужную (при открытии)
        document.querySelectorAll('.form-panel').forEach(function (p) {
            p.hidden = true;
        });

        panel.hidden = !open;

        if (open) {
            // Плавная прокрутка к панели с формой
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Если в URL есть якорь #form-tutor / #form-student — открываем форму сразу
    // (позволяет делать прямые ссылки, например из рассылки)
    var hash = window.location.hash.replace('#', '');
    if (hash === 'form-tutor' || hash === 'form-student') {
        togglePanel(hash, true);
    }
});
