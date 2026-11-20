// Portfolio folders open only through their own tab; there is no autoplay.
const portfolioFolders = [...document.querySelectorAll('.portfolio-folder')];
const portfolioTabs = portfolioFolders.map(folder => folder.querySelector('.portfolio-tab'));

function setFolderOpen(folder, open) {
    const tab = folder.querySelector('.portfolio-tab');
    const panel = folder.querySelector('.portfolio-panel');
    folder.classList.toggle('is-open', open);
    tab.setAttribute('aria-expanded', String(open));
    tab.querySelector('.portfolio-tab-action').textContent = open ? 'Cerrar' : 'Abrir';
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
}

portfolioFolders.forEach((folder, index) => {
    const tab = portfolioTabs[index];
    setFolderOpen(folder, false);
    tab.addEventListener('click', () => {
        const shouldOpen = tab.getAttribute('aria-expanded') !== 'true';
        portfolioFolders.forEach(other => setFolderOpen(other, other === folder && shouldOpen));
    });
    tab.addEventListener('keydown', event => {
        // Moving focus never opens a folder; Enter and Space activate the button.
        let target;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') target = (index + 1) % portfolioTabs.length;
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') target = (index - 1 + portfolioTabs.length) % portfolioTabs.length;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = portfolioTabs.length - 1;
        if (target !== undefined) {
            event.preventDefault();
            portfolioTabs[target].focus();
        }
    });
});

const navLinks = [...document.querySelectorAll('.enlaces-header a')];
if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        });
    }, { rootMargin: '0px 0px -65% 0px' });
    document.querySelectorAll('header[id], section[id], footer[id]').forEach(section => sectionObserver.observe(section));
}

// Mobile navigation behaves like a small terminal, without delaying link access.
(() => {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.menu-toggle');
    const panel = document.querySelector('.navigation-panel');
    const label = toggle.querySelector('.menu-toggle-label');
    const compactNavigation = matchMedia('(max-width: 800px)');
    const links = [...panel.querySelectorAll('a')];

    links.forEach((link, index) => link.style.setProperty('--nav-order', String(index)));

    function setMenuOpen(open, restoreFocus = false) {
        const expanded = compactNavigation.matches && open;
        nav.classList.toggle('is-menu-open', expanded);
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute('aria-label', expanded ? 'Cerrar men\u00fa' : 'Abrir men\u00fa');
        label.textContent = expanded ? 'Cerrar' : 'Men\u00fa';
        const inaccessible = compactNavigation.matches && !expanded;
        panel.inert = inaccessible;
        if (inaccessible) panel.setAttribute('aria-hidden', 'true');
        else panel.removeAttribute('aria-hidden');
        if (restoreFocus) toggle.focus();
    }

    toggle.addEventListener('click', () => {
        setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && nav.classList.contains('is-menu-open')) {
            setMenuOpen(false, true);
        }
    });
    document.addEventListener('click', event => {
        if (!nav.contains(event.target)) setMenuOpen(false);
    });
    nav.addEventListener('focusout', event => {
        if (!nav.contains(event.relatedTarget)) setMenuOpen(false);
    });
    compactNavigation.addEventListener('change', () => setMenuOpen(false));
    setMenuOpen(false);
    nav.classList.add('menu-enhanced');
})();

// Show full experience on desktop and keep mobile summaries compact.
(() => {
    const compactExperience = matchMedia('(max-width: 700px)');
    const panels = [...document.querySelectorAll('.experience-details')];
    function syncExperienceLayout() {
        panels.forEach(panel => { panel.open = !compactExperience.matches; });
    }
    compactExperience.addEventListener('change', syncExperienceLayout);
    syncExperienceLayout();
})();
