class StudyLanguage {
  constructor(language, level, goals) {
    this.language = language;
    this.level = level;
    this.goals = goals;
  }

  sayHello() {
    return `Я изучаю язык ${this.language}. Мой уровень владения языком ${this.level}. Мои цели изучения: ${this.goals}`;
  }

}

class Travels extends StudyLanguage {
  constructor(language, level, goals, country) {
    super(language, level, goals);
    this.setCountry(country);
  }

  sayHello() {
    return `Я хочу посетить страну ${this.country} и достичь следующих целей в путешествии: ${this.goals}`;
  }
  getCountry(){
	  return this._country
  }
  setCountry(country){
	  if (!isNaN(country)){
		  //console.log("В названии страны не могут содержаться цифры")
		  throw new Error("В названии страны не могут содержаться цифры");
	  }
	  this._country=country;
  }
}


function SongInfo(){
return function(){
	return `Название песни: ${this.name}
		Исполнитель: ${this.artist}
		Язык песни: ${this.language}`;
};
}

class FavoriteSong extends StudyLanguage {
  constructor(language, level, goals, name, artist) {
    super(language, level, goals);
    this.name = name;
    this.artist = artist;
  }
}

FavoriteSong.prototype.GetSongInfo=SongInfo();

class FavoriteBook extends StudyLanguage {
  constructor(language, level, goals, name) {
    super(language, level, goals);
    this.name = name;
  }

  getname() {
    return `Название книги:
      ${this.name};`
  }
}