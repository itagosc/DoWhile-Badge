const profiles = {
  github: 'itagosc',
  instagram: 'itagosc',
  linkedin: 'in/itagosc',
  twitter: 'itagosc'
}

function socialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${profiles[social]}`
  }
}

socialMidiaLinks()

function getGithubUserInfos() {
  const url = `https://api.github.com/users/${profiles.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      perfil.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      profileLink.href = data.html_url
      bio.textContent = data.bio
    })
}

getGithubUserInfos()
