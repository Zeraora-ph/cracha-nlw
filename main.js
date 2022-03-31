const linksSocialMedia = {
  github: 'Zeraora-ph',
  youtube: 'pedro henrique',
  facebook:'pedro henrique',
  instagram: 'pedro_zeraora',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response =>  response.json())
  .then(data => {
    nome.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImg.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()


// ARROW FUNCTION
function nomeDaFunção(argumentos){
  //code  
} 