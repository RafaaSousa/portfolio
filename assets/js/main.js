async function updateProfileInfo(profileData) {
    const photo = document.querySelector('.photo');
    photo.src = profileData.information.photo;
    photo.alt = profileData.information.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.information.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.information.job;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.information.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.information.phone;
    phone.href = `tel:${profileData.information.phone}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.information.email;
    email.href = `mailto:${profileData.information.email}`;

    const github = document.getElementById('profile.github');
    github.innerText = profileData.information.github;
    github.href = `https://github.com/${profileData.information.github}`;
}

function updateLanguages(profileData) {
    const languages = document.querySelector('.languages');
    languages.innerHTML = '';
    profileData.languages.forEach(language => {
        const li = document.createElement('li');
        li.innerText = language;
        languages.appendChild(li);
    });
}

function updatePortfolio(profileData) {
    const portfolio = document.querySelector('.portfolio');
    portfolio.innerHTML = '';
    profileData.portfolio.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="title github">${project.name}</span>`;
        const a = document.createElement('a');
        a.href = project.url;
        a.target = '_blank';
        a.innerText = project.url;
        li.appendChild(a);
        portfolio.appendChild(li);
    });
}

(async () => {
    try {
        const profileData = await fetchProfileData();
        updateProfileInfo(profileData);
        updateLanguages(profileData);
        updatePortfolio(profileData);
    } catch (error) {
        console.error('Erro ao buscar dados do perfil:', error);
    }
})();