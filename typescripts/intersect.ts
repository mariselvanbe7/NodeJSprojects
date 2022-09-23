type user = {
    name : string;
    age : number;
}

type player = {
    name : string;
    level : number;
}

type playerInfo = user & player;

const pi : playerInfo ={
    name : "fsfusfusf",
    age : 22,
    level : 3

}