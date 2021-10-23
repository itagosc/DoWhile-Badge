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
