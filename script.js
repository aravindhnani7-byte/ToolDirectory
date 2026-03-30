const toolsData = [
    {
        id: 1,
        name: "Google Gemini",
        category: "image",
        image: "https://latestlogo.com/wp-content/uploads/2024/12/google-gemini-sparkle-logo.png",
        desc: "Multimodal creation and reasoning for text, visuals, and exploration workflows.",
        toolDetail: "Nano Banana workflow and multimodal prompting",
        note: "Free access is limited depending on the experience",
        link: "https://gemini.google.com",
        featured: true,
        score: 97
    },
    {
        id: 2,
        name: "Lovable AI",
        category: "image",
        image: "https://lovable.dev/img/logo/lovable-icon-bg-light.png",
        desc: "Fast, playful ideation for visual concepts and polished creative experiments.",
        toolDetail: "Seed Dream generation and creative concepting",
        note: "Credits are limited on free access",
        link: "https://www.lovart.ai",
        score: 89
    },
    {
        id: 3,
        name: "Deep AI",
        category: "image",
        image: "https://www.aitimejournal.com/wp-content/uploads/2022/09/deepai-d8b94b245e5e406228574b515272bb8f.jpg",
        desc: "A flexible option for trying multiple creative AI workflows in one place.",
        toolDetail: "Stable Diffusion and prompt-based image generation",
        note: "Free usage is capped",
        link: "https://deepai.org",
        score: 83
    },
    {
        id: 4,
        name: "DALL-E",
        category: "image",
        image: "https://tse3.mm.bing.net/th/id/OIP.hAiT5gvF2sDiY0bXN8d47AHaHV?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "High-quality text-to-image generation for concept art, marketing, and visual ideation.",
        toolDetail: "Image generation with newer prompt interpretation",
        note: "Best experience may require paid access",
        link: "https://openai.com/dall-e-3",
        score: 95
    },
    {
        id: 5,
        name: "Canva",
        category: "image",
        image: "https://static.vecteezy.com/system/resources/previews/048/759/334/non_2x/canva-transparent-icon-free-png.png",
        desc: "A practical design suite with AI-assisted graphics for quick content production.",
        toolDetail: "Magic Media inside a familiar design workspace",
        note: "Premium plans unlock more generation features",
        link: "https://www.canva.com",
        score: 88
    },
    {
        id: 6,
        name: "Sora",
        category: "video",
        image: "https://www.skillademia.com/wp-content/uploads/Sora-Logo-1024x1024.png",
        desc: "Text-to-video generation aimed at cinematic sequences and imaginative scene building.",
        toolDetail: "High-fidelity video generation and concept visualization",
        note: "Availability may depend on plan and region",
        link: "https://sora.chatgpt.com/",
        score: 98
    },
    {
        id: 7,
        name: "Google Veo",
        category: "video",
        image: "https://veo3ai.org/logo.png",
        desc: "A strong option for next-generation video generation and cinematic prompt work.",
        toolDetail: "Veo model access through Google's AI experiences",
        note: "Often tied to premium or waitlisted access",
        link: "https://labs.google/",
        score: 94
    },
    {
        id: 8,
        name: "Lumen5",
        category: "video",
        image: "https://framerusercontent.com/images/tssFebAm1Vte6JqIHYRgDUStmA4.gif",
        desc: "Transforms articles and scripts into social-ready videos quickly.",
        toolDetail: "Text to marketing video and social content creation",
        note: "Free exports are limited",
        link: "https://lumen5.com",
        score: 84
    },
    {
        id: 9,
        name: "Runway Gen-2",
        category: "video",
        image: "https://images.prismic.io/sacra/37857be2-7684-4ae5-92b2-8fc6d0ceaa33_runway-ai-160959859448plc.jpeg?auto=compress,format",
        desc: "Popular with creators who need generative video plus editing features in one workflow.",
        toolDetail: "Generative clips, editing, and avatar-style capabilities",
        note: "Subscription pricing unlocks the best workflow",
        link: "https://runwayml.com/",
        score: 93
    },
    {
        id: 10,
        name: "Hour One",
        category: "video",
        image: "https://hdrobots.com/wp-content/uploads/2024/05/hour-one-logo.webp",
        desc: "Business-focused AI video creation with avatar presentation workflows.",
        toolDetail: "Professional avatar videos and enterprise presentation output",
        note: "More suitable for paid or enterprise usage",
        link: "https://invadeai.com/hourone",
        score: 78
    },
    {
        id: 11,
        name: "GitHub Copilot",
        category: "coding",
        image: "https://www.svgrepo.com/show/475654/github-color.svg",
        desc: "AI pair programming inside development workflows for coding speed and iteration.",
        toolDetail: "Code suggestions, chat, and test generation support",
        note: "Best features are part of paid plans",
        link: "https://github.com/features/copilot",
        score: 96
    },
    {
        id: 12,
        name: "Mutable AI",
        category: "coding",
        image: "https://www.opendigg.com/content/images/2023/11/mutable_after.png",
        desc: "Focused on accelerating implementation, documentation, and code refactors.",
        toolDetail: "Refactoring help and documentation generation",
        note: "Some advanced features are gated",
        link: "https://mutable.ai/",
        score: 82
    },
    {
        id: 13,
        name: "Replit Ghostwriter",
        category: "coding",
        image: "https://cdn.sanity.io/images/bj34pdbp/migration/1caa9c698f108ffd46cd8119f002386c8daeb885-400x400.jpg",
        desc: "Integrated coding assistance for people who like building directly in the browser.",
        toolDetail: "Inline code help inside Replit workflows",
        note: "Plan limits affect access and usage",
        link: "https://replit.com/",
        score: 80
    },
    {
        id: 14,
        name: "Tabnine",
        category: "coding",
        image: "https://cdn.pulse2.com/cdn/2023/11/Tabnine.jpeg",
        desc: "Privacy-conscious code completion for teams who need IDE flexibility.",
        toolDetail: "Autocomplete with local and team-focused options",
        note: "Advanced modes may require payment",
        link: "https://www.tabnine.com/",
        score: 79
    },
    {
        id: 15,
        name: "Polycoder",
        category: "coding",
        image: "https://pointofai.com/logos/polycoder.png",
        desc: "An open-source coding model worth exploring for experimentation and research.",
        toolDetail: "Open-source code generation from academic work",
        note: "Setup can be less polished than commercial tools",
        link: "https://pointofai.com/tools/polycoder",
        score: 74
    },
    {
        id: 16,
        name: "ElevenLabs",
        category: "audio",
        image: "https://techdictionary.io/wp-content/uploads/2025/03/elevenlabs-logo-400x400.png",
        desc: "Natural-sounding voice synthesis and cloning for production-grade audio output.",
        toolDetail: "Voice cloning, multilingual speech, and API workflows",
        note: "Credits can run out quickly on free usage",
        link: "https://elevenlabs.io/",
        score: 95
    },
    {
        id: 17,
        name: "Respeecher",
        category: "audio",
        image: "https://partnershiponai.org/wp-content/uploads/2024/02/respeecher400x160.png",
        desc: "Strong option for voice transformation and creator-oriented audio production.",
        toolDetail: "Studio-style voice cloning workflows",
        note: "Free experimentation is limited",
        link: "https://www.respeecher.com/",
        score: 86
    },
    {
        id: 18,
        name: "Murf",
        category: "audio",
        image: "https://www.theaihunter.com/wp-content/uploads/2024/09/Murf-AI-Logo-Icon.jpeg",
        desc: "Text-to-speech made approachable for presentations, explainers, and voiceovers.",
        toolDetail: "AI voiceover and presentation-friendly voice generation",
        note: "Limits apply to free creation time",
        link: "https://murf.ai/",
        score: 84
    },
    {
        id: 19,
        name: "Play.ht",
        category: "audio",
        image: "https://www.bestaitools.com/wp-content/uploads/2023/05/playht-square.png",
        desc: "Realistic synthetic voices with useful controls for narration and production.",
        toolDetail: "Text-to-speech with SSML and voice options",
        note: "Character limits apply to lighter plans",
        link: "https://play.ht/",
        score: 83
    },
    {
        id: 20,
        name: "Revoicer",
        category: "audio",
        image: "https://www.fahimai.com/wp-content/uploads/2025/01/CTA-16-480x480.png",
        desc: "Emotion-led voice generation aimed at persuasive marketing and explainer output.",
        toolDetail: "Emotion-focused synthetic voice generation",
        note: "Premium access unlocks stronger results",
        link: "https://revoicer.com/",
        score: 77
    },
    {
        id: 21,
        name: "SlidesAI",
        category: "ppt",
        image: "https://lh3.googleusercontent.com/-a4FxIjyWb3w/Y68cKBGWwDI/AAAAAAAAO8Y/G_v8J6LYsYM-RSwnNpcg195hxxSS9IoNgCNcBGAsYHQ/s400/icon-128.png",
        desc: "Turns rough ideas into slide structure quickly, especially for Google Slides users.",
        toolDetail: "Prompt-driven deck creation with multilingual support",
        note: "Free plans can be restrictive",
        link: "https://www.slidesai.io/",
        score: 85
    },
    {
        id: 22,
        name: "Gamma",
        category: "ppt",
        image: "https://www.skillademia.com/wp-content/uploads/Gamma-AI-logo.png",
        desc: "One of the cleanest tools for turning ideas into modern, web-native presentations.",
        toolDetail: "Interactive cards, AI writing assistance, and polished deck flow",
        note: "Free access is useful but limited",
        link: "https://gamma.app/",
        score: 94
    },
    {
        id: 23,
        name: "Tome",
        category: "ppt",
        image: "https://d4.alternativeto.net/TA3FY86jDR30eNQPtZ5DS1KfDeLmtaazEhbQk3LCuak/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy90b21lLWFpXzIxNDMxNi5wbmc.png",
        desc: "A storytelling-focused presentation format that feels more narrative than slide-based.",
        toolDetail: "Prompt-led deck generation with live content support",
        note: "Version access and plan limits vary",
        link: "https://tome.app/",
        score: 87
    },
    {
        id: 24,
        name: "Decktopus",
        category: "ppt",
        image: "https://uploads-ssl.webflow.com/622217130a9cad1a33ea9b0a/6225e92a030c491edff40b49_decktopus_symbol_256x256.png",
        desc: "Presentation automation with lead generation and structured deck workflows.",
        toolDetail: "AI deck generation plus engagement-oriented presentation tools",
        note: "Stronger functionality is tied to paid access",
        link: "https://www.decktopus.com/",
        score: 81
    },
    {
        id: 25,
        name: "Pitch",
        category: "ppt",
        image: "https://tse1.mm.bing.net/th/id/OIP.nFnNaC6WxX-Kwhp06An4ewHaFj?pid=ImgDet&w=474&h=355&rs=1&o=7&rm=3",
        desc: "Collaborative presentation software with a strong team workflow feel.",
        toolDetail: "Team presentation building with integrations and slide suggestions",
        note: "Pro plans expand collaboration features",
        link: "https://pitch.com/",
        score: 86
    }
];

const categories = {
    all: {
        label: "All Tools",
        icon: "fa-compass",
        description: "Everything in one radar."
    },
    image: {
        label: "Image Gen",
        icon: "fa-wand-magic-sparkles",
        description: "Visual concepting and graphics."
    },
    video: {
        label: "Video",
        icon: "fa-clapperboard",
        description: "Generative clips and editing."
    },
    coding: {
        label: "Coding",
        icon: "fa-code",
        description: "Developer copilots and builders."
    },
    audio: {
        label: "Audio",
        icon: "fa-microphone-lines",
        description: "Voice, speech, and sound."
    },
    ppt: {
        label: "Presentations",
        icon: "fa-chart-line",
        description: "Slides, stories, and pitch decks."
    }
};

const state = {
    category: "all",
    query: "",
    sortBy: "featured"
};

const grid = document.getElementById("tools-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("results-count");
const categoryTabs = document.getElementById("category-tabs");
const categoryShowcase = document.getElementById("category-showcase");
const trendingList = document.getElementById("trending-list");
const toolModal = document.getElementById("toolModal");

function slugToTitle(category) {
    return categories[category]?.label || category;
}

function getIcon(category) {
    return categories[category]?.icon || "fa-robot";
}

function renderMetrics() {
    const featuredCount = toolsData.filter((tool) => tool.featured).length;
    document.getElementById("metric-count").textContent = toolsData.length;
    document.getElementById("metric-categories").textContent = Object.keys(categories).length - 1;
    document.getElementById("metric-featured").textContent = featuredCount;
}

function renderFeatured() {
    const featuredTool = toolsData.find((tool) => tool.featured) || toolsData[0];

    document.getElementById("featured-logo").src = featuredTool.image;
    document.getElementById("featured-logo").alt = `${featuredTool.name} logo`;
    document.getElementById("featured-category").textContent = slugToTitle(featuredTool.category);
    document.getElementById("featured-name").textContent = featuredTool.name;
    document.getElementById("featured-description").textContent = featuredTool.desc;
    document.getElementById("featured-detail").textContent = featuredTool.toolDetail;
    document.getElementById("featured-note").textContent = featuredTool.note;
    document.getElementById("featured-link").href = featuredTool.link;
}

function renderCategoryShowcase() {
    const markup = Object.entries(categories)
        .filter(([key]) => key !== "all")
        .map(([key, category]) => {
            const count = toolsData.filter((tool) => tool.category === key).length;
            return `
                <button type="button" class="category-card text-left" onclick="setCategory('${key}')">
                    <div class="category-icon">
                        <i class="fa-solid ${category.icon}"></i>
                    </div>
                    <h3 class="mt-4 font-display text-xl font-bold">${category.label}</h3>
                    <p class="mt-2 text-sm leading-7 text-slate-300">${category.description}</p>
                    <p class="mt-4 text-xs uppercase tracking-[0.24em] text-sky-200">${count} tools inside</p>
                </button>
            `;
        })
        .join("");

    categoryShowcase.innerHTML = markup;
}

function renderCategoryTabs() {
    const markup = Object.entries(categories)
        .map(([key, category]) => `
            <button
                type="button"
                class="category-filter ${state.category === key ? "is-active" : ""}"
                onclick="setCategory('${key}')"
            >
                <i class="fa-solid ${category.icon} mr-2"></i>${category.label}
            </button>
        `)
        .join("");

    categoryTabs.innerHTML = markup;
}

function renderTrending() {
    const trending = [...toolsData]
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map((tool) => `
            <div class="trend-item">
                <div>
                    <strong>${tool.name}</strong>
                    <span>${slugToTitle(tool.category)}</span>
                </div>
                <span>${tool.score}/100</span>
            </div>
        `)
        .join("");

    trendingList.innerHTML = trending;
}

function sortTools(tools) {
    const sorted = [...tools];

    if (state.sortBy === "az") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        return sorted;
    }

    if (state.sortBy === "category") {
        sorted.sort((a, b) => {
            const categoryCompare = a.category.localeCompare(b.category);
            return categoryCompare || a.name.localeCompare(b.name);
        });
        return sorted;
    }

    sorted.sort((a, b) => {
        const featuredCompare = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
        if (featuredCompare !== 0) {
            return featuredCompare;
        }

        return b.score - a.score;
    });

    return sorted;
}

function getFilteredTools() {
    const query = state.query.trim().toLowerCase();

    const filtered = toolsData.filter((tool) => {
        const matchesCategory = state.category === "all" || tool.category === state.category;
        const matchesQuery =
            !query ||
            tool.name.toLowerCase().includes(query) ||
            tool.desc.toLowerCase().includes(query) ||
            tool.toolDetail.toLowerCase().includes(query) ||
            tool.note.toLowerCase().includes(query) ||
            slugToTitle(tool.category).toLowerCase().includes(query);

        return matchesCategory && matchesQuery;
    });

    return sortTools(filtered);
}

function renderTools() {
    const filteredTools = getFilteredTools();
    resultsCount.textContent = `${filteredTools.length} ${filteredTools.length === 1 ? "tool" : "tools"}`;
    renderCategoryTabs();

    if (filteredTools.length === 0) {
        grid.innerHTML = "";
        grid.classList.add("hidden");
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    grid.classList.remove("hidden");

    grid.innerHTML = filteredTools
        .map((tool) => `
            <article class="tool-card">
                <div class="tool-topline">
                    <span class="tool-badge">
                        <i class="fa-solid ${getIcon(tool.category)}"></i>
                        ${slugToTitle(tool.category)}
                    </span>
                    <span class="tool-score">
                        <i class="fa-solid fa-bolt"></i>${tool.score}
                    </span>
                </div>

                <div class="flex items-start gap-4">
                    <div class="feature-logo h-16 w-16 shrink-0">
                        <img src="${tool.image}" alt="${tool.name} logo" onerror="this.src='https://placehold.co/96x96/f8fafc/0f172a?text=AI'">
                    </div>
                    <div>
                        <h3 class="tool-title">${tool.name}</h3>
                        <p class="mt-2 tool-copy">${tool.desc}</p>
                    </div>
                </div>

                <div class="tool-meta">
                    <div class="tool-meta-item">
                        <i class="fa-solid fa-sparkles"></i>
                        <div>
                            <p class="text-xs uppercase tracking-[0.22em] text-slate-400">Capability</p>
                            <p class="mt-1 text-sm leading-6 text-slate-200">${tool.toolDetail}</p>
                        </div>
                    </div>
                    <div class="tool-meta-item">
                        <i class="fa-solid fa-circle-info"></i>
                        <div>
                            <p class="text-xs uppercase tracking-[0.22em] text-slate-400">Access Note</p>
                            <p class="mt-1 text-sm leading-6 text-slate-200">${tool.note}</p>
                        </div>
                    </div>
                </div>

                <div class="tool-actions">
                    <a class="btn-primary" href="${tool.link}" target="_blank" rel="noreferrer">
                        Open Tool
                    </a>
                    <button type="button" class="btn-secondary" onclick="openToolModal(${tool.id})">
                        View Details
                    </button>
                </div>
            </article>
        `)
        .join("");
}

function setCategory(category) {
    state.category = category;
    renderTools();
    scrollToDirectory();
}

function resetFilters() {
    state.category = "all";
    state.query = "";
    state.sortBy = "featured";
    searchInput.value = "";
    sortSelect.value = "featured";
    renderTools();
}

function openToolModal(id) {
    const tool = toolsData.find((item) => item.id === id);
    if (!tool) {
        return;
    }

    document.getElementById("modal-logo").src = tool.image;
    document.getElementById("modal-logo").alt = `${tool.name} logo`;
    document.getElementById("modal-category").textContent = slugToTitle(tool.category);
    document.getElementById("modal-name").textContent = tool.name;
    document.getElementById("modal-desc").textContent = tool.desc;
    document.getElementById("modal-detail").textContent = tool.toolDetail;
    document.getElementById("modal-note").textContent = tool.note;
    document.getElementById("modal-link").href = tool.link;

    toolModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeToolModal() {
    toolModal.classList.add("hidden");
    document.body.style.overflow = "";
}

function scrollToDirectory() {
    document.getElementById("directory").scrollIntoView({ behavior: "smooth", block: "start" });
}

searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderTools();
});

sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderTools();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !toolModal.classList.contains("hidden")) {
        closeToolModal();
    }
});

renderMetrics();
renderFeatured();
renderCategoryShowcase();
renderTrending();
renderTools();
