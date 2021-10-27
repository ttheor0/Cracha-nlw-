const linksSocialMedia = {
  instagram: 'theor0',
  facebook: 'theo.rodrigues.5036',
  twitter: 'TTheor0',
  youtube: 'UCInsaDlEmWbSZz0nivnPQeQ',
  github: 'ttheor0'
}

function changeSocialMediaLinks() {
  //for (let i = 0; i <= 10; i++) {
  // for e um tipo de repetidor de comando

  for (let li of socialLinks.children) {
    //li.getAttribute('class'))
    //const social estar guardando as li's e o getAttri ta pegando as class das li's
    const social = li.getAttribute('class')

    //li/children o 0 representa a primeira filha(children)(a href,img)
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/ttheor0'

  fetch(url)
    .then(response => response.json())

    .then(data => {
      userBio.textContent = data.bio
      userName.textContent = data.name
      userLink.href = data.html_url
      userImage.textContent = data.avatar_url
    })
}
getGitHubProfileInfos()
