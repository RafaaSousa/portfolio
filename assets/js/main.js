function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.information.photo
    photo.alt = profileData.information.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.information.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.information.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.information.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.information.phone
    phone.href = `tel.:${profileData.information.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.information.email
    email.href = `mailto:${profileData.email}`

    const github = document.getElementById('profile.github')
    github.innerText = profileData.information.github
    github.href = `https://github.com/${profileData.information.github}`

}

function updadeSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updadeSoftSkills(profileData)
})()
