// Publish only real information supplied by Alexis. Empty sections stay hidden.
// Results: { project, title, description, metric?, metricLabel?, href? }
// Testimonials: { summary, name, role?, company? }; summaries are not verbatim quotes.
const portfolioProof = {
    "results": [
        {
            "project": "FlorentIA",
            "title": "Más motivación para aprender inglés",
            "description": "Las instituciones que han utilizado FlorentIA reportan una mayor motivación de los estudiantes para aprender inglés. El acompañamiento de la IA también facilita la labor docente.",
            "href": "https://florentia-landing.vercel.app/"
        },
        {
            "project": "NODO Creativo",
            "metric": "80%",
            "metricLabel": "menos carga al generar calendarios y preparar eventos",
            "title": "Gestión en un solo lugar",
            "description": "Calendarios, preparación de eventos y tareas relacionadas centralizados en una misma herramienta para gestionar la operación.",
            "href": "https://nodo-creativo.vercel.app/"
        },
        {
            "project": "Volao Domicilios",
            "title": "Más cerca de sus clientes",
            "description": "La plataforma facilita la relación con sus clientes y la aplicación apoya a los domiciliarios para realizar las entregas de forma más eficiente.",
            "href": "https://volao-nine.vercel.app/"
        }
    ],
    "testimonials": [
        {
            "summary": "El equipo destaca la reducción de la carga de preparación de calendarios y eventos, además de poder gestionar su operación en un solo lugar.",
            "name": "Damián Paredes",
            "role": "CEO",
            "company": "NODO Creativo"
        },
        {
            "summary": "La gerencia valora una mayor cercanía con sus clientes y el apoyo que la aplicación brinda a los domiciliarios para realizar sus entregas de forma eficiente.",
            "name": "Gerencia",
            "company": "Volao Domicilios"
        },
        {
            "summary": "Profesores de inglés y directores destacan una mayor motivación para aprender y el acompañamiento de la IA en la labor docente.",
            "name": "Profesores de inglés y directores",
            "company": "Instituciones que usan FlorentIA"
        }
    ]
};

(() => {
    const read = value => typeof value === 'string' ? value.trim() : '';
    function element(tag, className, value) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (value) node.textContent = value;
        return node;
    }
    function projectLink(href) {
        try {
            const url = new URL(read(href));
            if (url.protocol !== 'https:') return null;
            const link = element('a', 'proof-project-link', 'Ver proyecto');
            link.href = url.href;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            return link;
        } catch { return null; }
    }

    // These diagrams explain the outcomes; they are not product screenshots.
    function graphicSvg(markup) {
        const template = document.createElement('template');
        template.innerHTML = markup;
        return template.content.firstElementChild;
    }
    function resultGraphic(item) {
        const panel = element('div', 'impact-panel');
        panel.setAttribute('role', 'img');
        if (read(item.metric)) {
            panel.classList.add('impact-workflow');
            panel.setAttribute('aria-label', 'Calendarios, eventos y tareas centralizados en un mismo sistema.');
            const inputs = element('div', 'workflow-inputs');
            const icons = [
                '<rect x="4" y="6" width="24" height="22" rx="5"/><path d="M4 13h24M10 3v6M22 3v6M10 19h3M19 19h3M10 24h3"/>',
                '<path d="m16 3 4 8 9 1-6 7 2 10-9-5-9 5 2-10-6-7 9-1 4-8Z"/>',
                '<rect x="5" y="3" width="22" height="26" rx="5"/><path d="m10 12 2 2 4-5M19 12h3M10 21h12"/>'
            ];
            ['Calendarios', 'Eventos', 'Tareas'].forEach((name, index) => {
                const node = element('div', 'workflow-source');
                node.append(graphicSvg('<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[index] + '</svg>'), element('span', '', name));
                inputs.append(node);
            });
            const hub = element('div', 'workflow-hub');
            hub.append(graphicSvg('<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="13" y="13" width="22" height="22" rx="7"/><path d="M24 4v9M24 35v9M4 24h9M35 24h9"/><circle cx="24" cy="24" r="4"/></svg>'), element('span', '', 'Un solo lugar'));
            panel.append(inputs, hub);
        } else if (item.project === 'FlorentIA') {
            panel.classList.add('impact-learning');
            panel.setAttribute('aria-label', 'Aprendizaje de inglés con mayor motivación y apoyo de IA para los docentes.');
            panel.append(graphicSvg('<svg class="learning-art" viewBox="0 0 220 180" fill="none" aria-hidden="true"><circle cx="110" cy="83" r="64" stroke="#476e56" stroke-dasharray="3 8"/><g class="learning-sprout"><path d="M110 137V65" stroke="#b7dac2" stroke-width="3" stroke-linecap="round"/><path d="M109 96C65 96 58 65 62 53c31-1 48 16 47 43Z" fill="#668e72"/><path d="M112 74c-1-31 19-47 48-46 3 25-13 47-48 46Z" fill="#bad9c4"/><path d="m73 64 36 31M145 40l-32 32" stroke="#314e3b" stroke-width="1.5"/></g><path d="M32 137c29-12 54-10 78 3 24-13 49-15 78-3v27c-30-9-55-8-78 3-23-11-48-12-78-3v-27Z" fill="#253e30" stroke="#8db49a" stroke-width="1.5"/><path d="M110 140v27" stroke="#8db49a"/><circle class="impact-spark" cx="173" cy="91" r="4" fill="#c6dfce"/></svg>'));
            const labels = element('div', 'impact-labels');
            labels.append(element('span', '', 'Motivación'), element('span', '', 'Apoyo docente'));
            panel.append(labels);
        } else {
            panel.classList.add('impact-delivery');
            panel.setAttribute('aria-label', 'Mayor cercanía con clientes y apoyo a los domiciliarios para entregar con eficiencia.');
            panel.append(graphicSvg('<svg class="delivery-art" viewBox="0 0 220 180" fill="none" aria-hidden="true"><circle cx="110" cy="90" r="67" stroke="#476e56" stroke-dasharray="3 8"/><path class="delivery-route" d="M38 128c69 0 28-80 99-80 30 0 22 80 47 80" stroke="#b5d5c0" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 7"/><rect x="14" y="106" width="48" height="44" rx="14" fill="#2f4d3b" stroke="#789c84"/><path d="m26 120 12-7 12 7v16H26v-16ZM38 113v23M26 120l12 7 12-7" stroke="#c5dece" stroke-width="1.5" stroke-linejoin="round"/><path d="M137 20c-14 0-23 10-23 23 0 17 23 36 23 36s23-19 23-36c0-13-9-23-23-23Z" fill="#bad9c4"/><circle cx="137" cy="43" r="7" fill="#294834"/><circle class="impact-spark" cx="184" cy="128" r="11" fill="#c9e0d1"/><path d="m179 128 4 4 7-9" stroke="#294834" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'));
            const labels = element('div', 'impact-labels');
            labels.append(element('span', '', 'Clientes más cerca'), element('span', '', 'Entregas eficientes'));
            panel.append(labels);
        }
        return panel;
    }

    const results = portfolioProof.results.filter(item => read(item.project) && read(item.title) && read(item.description));
    const resultGrid = document.getElementById('results-grid');
    // Give the measurable case the lead, followed by two visual project stories.
    const orderedResults = [...results].sort((a, b) => Number(Boolean(read(b.metric))) - Number(Boolean(read(a.metric))));
    orderedResults.forEach(item => {
        const featured = Boolean(read(item.metric));
        const card = element('article', 'proof-card result-card ' + (featured ? 'result-feature' : 'result-support'));
        const copy = element('div', 'result-content');
        copy.append(element('p', 'proof-project', read(item.project)));
        if (featured) {
            const metric = element('div', 'result-metric-block');
            metric.append(element('p', 'proof-metric', read(item.metric)));
            if (read(item.metricLabel)) metric.append(element('p', 'proof-metric-label', read(item.metricLabel)));
            copy.append(metric);
        }
        copy.append(element('h3', '', read(item.title)), element('p', 'proof-description', read(item.description)));
        const link = projectLink(item.href);
        if (link) copy.append(link);
        card.append(copy);

        card.append(resultGraphic(item));
        resultGrid.append(card);
    });
    document.getElementById('resultados').hidden = results.length === 0;

    const testimonials = portfolioProof.testimonials.filter(item => read(item.summary) && read(item.name));
    const testimonialGrid = document.getElementById('testimonials-grid');
    testimonials.forEach(item => {
        const card = element('figure', 'proof-card testimonial-card');
        const quote = element('div', 'testimonial-quote');
        card.append(element('p', 'testimonial-feedback-label', 'Resumen de feedback'));
        quote.append(element('p', '', read(item.summary)));
        const caption = element('figcaption', 'testimonial-person');
        const initials = read(item.name).split(/\s+/).slice(0, 2).map(word => [...word][0]).join('').toUpperCase();
        const avatar = element('span', 'testimonial-initials', initials);
        avatar.setAttribute('aria-hidden', 'true');
        const attribution = element('div', 'testimonial-attribution');
        attribution.append(element('span', 'testimonial-name', read(item.name)));
        const context = [read(item.role), read(item.company)].filter(Boolean).join(' \u00b7 ');
        if (context) attribution.append(element('span', 'testimonial-context', context));
        caption.append(avatar, attribution);
        card.append(quote, caption);
        testimonialGrid.append(card);
    });
    document.getElementById('testimonios').hidden = testimonials.length === 0;
})();
