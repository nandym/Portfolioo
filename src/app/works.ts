export interface Works {

  id:number;
  name:string;
  description:string;
  image:string;
  tags:string;
  goto:string;
}
export const works: Works[] = [

{
  id: 1,
  name: "Website Development - Portfolio",
  description: "How I developed this Portfolio website and my uses of the Angular framework.",
  image: "../../assets/Images/Website.jpg",
  tags: "Angular, HTML, CSS",
  goto: "WebSite"
},
{
  id: 2,
  name: "Horror Game Prototype",
  description: "Horror game, demo, demonstrating Environment Art and User Interface Design",
  image: "../../assets/Images/HorrorGame.png",
  tags: "Environment Art, User Interface, Unity, Quixel",
  goto: "HorrorGame"

},
{
  id: 3,
  name: "Unity Multiplayer Demo",
  description: "A Multiplayer game demo developed in Unity using Photon. The use of AI and the artistic development.",
  image: "../../assets/Images/UnityMP.png",
  tags: "Unity, Photon, Multiplayer, Stylized",
  goto: "UnityMp"

},
{
  id: 4,
  name: "Unreal Multiplayer Demo",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  image: "../../assets/Images/UnrealGame.png",
  tags: "Unreal 5, Multiplayer, Shooter",
  goto: "UnrealDemo"

},
{
  id: 5,
  name: "About Me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  image: "../../assets/Images/Website.png",
  tags: "Me, I, Wijnand",
  goto: "About"

}

];
