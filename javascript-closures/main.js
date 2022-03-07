function graduate(credential) {
  return fullName => {
    return fullName + ' ' + credential;
  };

}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.dir(medicalSchool('Jeesu Park'));
console.dir(lawSchool('Jeesu Park'));
