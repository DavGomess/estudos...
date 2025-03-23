const spaceships = []

function addSpaceship(name: string, pilot: string, crewLimit: number, ){
  const spaceship = {
    name,
    pilot,
    crewLimit,//limite da tripulacao
    crew: [],// tripulacao
    inMission: false

  }

spaceships.push(spaceship)

alert(`A nave ${spaceship.name} foi registrada!`)
}


function findSpaceship(name: string) {
  let spaceship = {
    name: String,
    pilot: String,
    crewLimit: String,
    crew: String[],
    inMission: Boolean

  }
  spaceship = spaceships.find(ship => ship.name === name)

  return spaceship
}

function addCrewMember(member: string, spaceship: {name: string, crewLimit: number, crew: string[]}) {

  if(spaceship.crew.length >= spaceship.crewLimit) {

    console.log("A espaçonave atingiu o limite maximo de tripulantes!")
  }else {
    spaceship.crew.push(member)
    console.log(`${member} foi adicionado à tripulação.`);

  }

}

function sendInMission(spaceship: {name: string; crewLimit: number; crew: string[];inMission: boolean}) {

  if(spaceship.inMission) {
    alert(`${spaceship.name} nao pode ser enviado, nave já em missão`)
  }else if(spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`${spaceship.name} não pode ser enviada, tripulação insuficiente`)
  }else {
    spaceship.inMission = true

    alert(`${spaceship.name} enviada ppara a missão`)
  }

}


