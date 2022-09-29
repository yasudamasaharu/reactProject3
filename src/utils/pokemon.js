const getAllPokemon = (url) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

const getPokemon = (url) => {
  return new Promise((resolve) => {
    fetch(url)
      // .then((res) => console.log(res))
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
        // console.log(data);
      });
  });
};

class GetPokemonData {
  consturctor(url) {
    console.log(url);
    this.url = url;
  }
  getData() {
    return new Promise((resolve) => {
      console.log(this.url);
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  }
}

export { getAllPokemon, getPokemon, GetPokemonData };
