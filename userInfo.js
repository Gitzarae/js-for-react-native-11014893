let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++,
    };
  });
}


const names = ["Gummies", "Skittles", "Mars", "Bounty", "Caramel", "Cardberry", "Minigems"];
const modifiedNames = ["GUMMIES", "skittles", "MARS", "bounty", "CARAMEL", "cardberry", "MINIGEMS"];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(JSON.stringify(userProfiles, null, 2));