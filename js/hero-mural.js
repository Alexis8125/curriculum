// Small paired metaballs merge and separate inside the typographic mask.
(() => {
    const mural = document.querySelector('.hero-mural');
    const layer = document.querySelector('.liquid-colors');
    const button = document.querySelector('.mural-pause');
    if (!mural || !layer || !button) return;

    const compactMural = matchMedia('(max-width: 700px)');
    const muralBase = mural.querySelector('.mural-base');
    function updateMuralLayout() {
        const compact = compactMural.matches;
        mural.setAttribute('viewBox', compact ? '0 0 600 480' : '0 0 1200 250');
        muralBase.setAttribute('height', compact ? '480' : '250');
        // Position droplets for each layout instead of stretching their geometry.
        layer.setAttribute('transform', 'scale(1 1)');
    }
    compactMural.addEventListener('change', () => {
        updateMuralLayout();
        paint(elapsed);
    });
    updateMuralLayout();

    const ns = 'http://www.w3.org/2000/svg';
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const colors = ['#1261FF', '#F65B42', '#FFD343', '#39A268', '#EFAEC2', '#1261FF'];
    const droplets = [];
    let userPaused = preference.matches;
    let inView = true;
    let frameId = 0;
    let previousTime = 0;
    let elapsed = 0;
    let renderedFrames = 0;

    for (let index = 0; index < 30; index++) {
        const column = index % 15;
        const row = Math.floor(index / 15);
        const radius = 25 + (index * 13 % 17);
        for (let satellite = 0; satellite < 2; satellite++) {
            const node = document.createElementNS(ns, 'ellipse');
            node.setAttribute('rx', String(satellite ? radius * .65 : radius));
            node.setAttribute('ry', String(satellite ? radius * .72 : radius * 1.12));
            node.setAttribute('fill', colors[(index * 7 + row) % colors.length]);
            layer.append(node);
            droplets.push({
                node, satellite, radius, index,
                x: column * 84 + 20,
                y: row * 110 + 70,
                phase: index * 2.399,
                speed: .8 + (index % 5) * .11
            });
        }
    }

    function paint(time) {
        const compact = compactMural.matches;
        for (const drop of droplets) {
            const phase = time * drop.speed + drop.phase;
            const separation = drop.satellite ? 29 + Math.sin(phase * 1.4) * 38 : 0;
            const originX = compact ? (drop.index % 8) * 80 + 20 : drop.x;
            const originY = compact ? Math.floor(drop.index / 8) * 115 + 55 : drop.y;
            const x = originX + Math.sin(phase) * 57 + Math.cos(phase * .71) * 22
                + Math.cos(phase * 1.2) * separation;
            const y = originY + Math.cos(phase * .87) * 60
                + Math.sin(phase * 1.2) * separation;
            const stretch = 1 + Math.sin(phase * 1.8) * .23;
            const rotation = Math.sin(phase * .9) * 48;
            drop.node.setAttribute('transform',
                `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rotation.toFixed(2)}) scale(${stretch.toFixed(3)} ${(1 / stretch).toFixed(3)})`);
        }
        mural.dataset.frame = String(++renderedFrames);
    }

    function tick(now) {
        if (previousTime) elapsed += Math.min(now - previousTime, 50) / 1000;
        previousTime = now;
        paint(elapsed);
        frameId = requestAnimationFrame(tick);
    }

    function syncPlayback() {
        cancelAnimationFrame(frameId);
        previousTime = 0;
        const stopped = userPaused || !inView || document.hidden;
        mural.dataset.motion = stopped ? 'paused' : 'running';
        if (!stopped) frameId = requestAnimationFrame(tick);
        button.setAttribute('aria-pressed', String(userPaused));
        button.textContent = userPaused ? 'Reanudar animaci\u00f3n' : 'Pausar animaci\u00f3n';
    }

    button.addEventListener('click', () => {
        userPaused = !userPaused;
        syncPlayback();
    });
    preference.addEventListener('change', event => {
        userPaused = event.matches;
        syncPlayback();
    });
    document.addEventListener('visibilitychange', syncPlayback);
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            syncPlayback();
        }, { rootMargin: '80px' }).observe(mural);
    }
    paint(0);
    syncPlayback();

    const cards = document.querySelectorAll('.bio-card, .experience, .articulo, .skills, .certificate, .service-card, .process-step, .proof-card');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    for (const card of cards) {
        if (finePointer.matches) {
            card.addEventListener('pointermove', event => {
                if (preference.matches) return;
                const bounds = card.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - .5;
                const y = (event.clientY - bounds.top) / bounds.height - .5;
                card.style.setProperty('--tilt-x', `${(-y * 3).toFixed(2)}deg`);
                card.style.setProperty('--tilt-y', `${(x * 3).toFixed(2)}deg`);
            });
            card.addEventListener('pointerleave', () => {
                card.style.setProperty('--tilt-x', '0deg');
                card.style.setProperty('--tilt-y', '0deg');
            });
        }
    }

    if ('IntersectionObserver' in window) {
        const entrances = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entrances.unobserve(entry.target);
                if (preference.matches || !entry.target.animate) return;
                entry.target.animate([
                    { opacity: .25, transform: 'translateY(36px) scale(.97)' },
                    { opacity: 1, transform: 'translateY(0) scale(1)' }
                ], { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' });
            });
        }, { threshold: .08 });
        cards.forEach(card => entrances.observe(card));
    }
})();
