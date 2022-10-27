
const getPokemon = async () => {
    //Choosing 
    randomPokemon = Math.floor(Math.random() * 905 + 1)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    
    pokemonName = response.data.species.name
    pokeType = response.data.types[0].type.name
    console.log(pokemonName)
    console.log(pokeType)
    setName = document.getElementById("pokemonName")
    setName.innerHTML = pokemonName
    const typeFamily = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}`)
    

    type1 = document.getElementById("type1")
    type2 = document.getElementById("type2")
    type3 = document.getElementById("type3")
    type4 = document.getElementById("type4")
    type5 = document.getElementById("type5")

    type1.innerHTML = typeFamily.data.pokemon[0].pokemon.name
    type2.innerHTML = typeFamily.data.pokemon[1].pokemon.name
    type3.innerHTML = typeFamily.data.pokemon[2].pokemon.name
    type4.innerHTML = typeFamily.data.pokemon[3].pokemon.name
    type5.innerHTML = typeFamily.data.pokemon[4].pokemon.name
    
    imageurl = response.data.sprites.front_default
    image1 = document.getElementById("image1")
    image1.src = imageurl
    
    console.log(type1.innerHTML)
    type1Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type1.innerHTML}`) 
    type1ImageURL = type1Response.data.sprites.front_default
    type1Image = document.getElementById("type1Image")
    type1Image.src = type1ImageURL

    type2Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type2.innerHTML}`) 
    type2ImageURL = type2Response.data.sprites.front_default
    type2Image = document.getElementById("type2Image")
    type2Image.src = type2ImageURL

    type3Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type3.innerHTML}`) 
    type3ImageURL = type3Response.data.sprites.front_default
    type3Image = document.getElementById("type3Image")
    type3Image.src = type3ImageURL

    type4Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type4.innerHTML}`) 
    type4ImageURL = type4Response.data.sprites.front_default
    type4Image = document.getElementById("type4Image")
    type4Image.src = type4ImageURL

    type5Response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${type5.innerHTML}`) 
    type5ImageURL = type5Response.data.sprites.front_default
    type5Image = document.getElementById("type5Image")
    type5Image.src = type5ImageURL
}

