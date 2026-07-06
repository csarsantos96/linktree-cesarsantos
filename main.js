const links = [
  {
    icon: 'ti-world',
    name: 'cesarsantos.dev',
    sub: 'portfolio & resume',
    href: 'https://cesarsantos.dev',
    arrow: '↗',
    download: false,
  },
  {
    icon: 'ti-terminal-2',
    name: 'commandlinux.dev',
    sub: 'devops & cloud native notes',
    href: 'https://commandlinux.dev',
    arrow: '↗',
    download: false,
  },
  {
    icon: 'ti-brand-linkedin',
    name: 'LinkedIn',
    sub: 'cesar-augusto-dos-santos',
    href: 'https://www.linkedin.com/in/cesar-augusto-dos-santos/',
    arrow: '↗',
    download: false,
  },
  {
    icon: 'ti-brand-github',
    name: 'GitHub',
    sub: 'csarsantos96',
    href: 'https://github.com/csarsantos96',
    arrow: '↗',
    download: false,
  },
  {
    icon: 'ti-brand-medium',
    name: 'Medium',
    sub: 'César Santos',
    href: 'https://medium.com/@csar.santos18',
    arrow: '↗',
    download: false,
  },
  {
    icon: 'ti-mail',
    name: 'Email',
    sub: 'hello@cesarsantos.dev',
    href: 'mailto:hello@cesarsantos.dev',
    arrow: '↗',
    download: false,
  },
  
];

function renderLinks() {
  const container = document.getElementById('links');

  links.forEach((link) => {
    const a = document.createElement('a');
    a.className = 'link-card';
    a.href = link.href;
    a.target = link.download ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    if (link.download) a.setAttribute('download', '');

    a.innerHTML = `
      <div class="link-icon"><i class="ti ${link.icon}" aria-hidden="true"></i></div>
      <div class="link-text">
        <div class="link-name">${link.name}</div>
        <div class="link-sub">${link.sub}</div>
      </div>
      <span class="link-arrow">${link.arrow}</span>
    `;

    container.appendChild(a);
  });
}

renderLinks();