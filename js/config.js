/* ===== EDIT ME: your details and media =====
   Put files in the assets/ folders and use paths like "assets/images/photo-1.jpg".
   Leave a src empty to show a labelled placeholder. Add real URLs/paths to replace. */
const CFG={name:"Carl Laurence Baes",email:"laurence12channel@gmail.com",
 socials:[["Instagram","https://www.instagram.com/banix.stz/?hl=en"],["YouTube","https://youtube.com/"],["LinkedIn","https://www.linkedin.com/in/carl-laurence-baes-2501ab315/"],["TikTok","https://tiktok.com/"],["Facebook","https://www.facebook.com/carmelolaurence.baes"]],
 // EmailJS (https://www.emailjs.com): fill all three to enable real sending
 emailjs:{service:"",template:"",publicKey:""}};
const MEDIA={portrait:"assets/images/profile.png",
 certs:[{t:"Payout",o:"Equity Edge",src:"assets/images/cert1.png"},
   {t:"Funded Trader",o:"Top Step",src:"assets/images/cert2.jfif"},
   {t:"Funded Trader",o:"Equity Edge",src:"assets/images/cert3.jfif"}],
 portfolio:[ {t:"Makati City", c:"Photography", src:"assets/images/ph1.JPG"},
             {t:"Bonifacio Global City (BGC)", c:"Photography", src:"assets/images/ph3.JPG"},
             {t:"Makati City", c:"Photography", src:"assets/images/ph4.JPG"},
             {t:"Makati City", c:"Photography", src:"assets/images/ph6.JPG"},
             {t:"Metro Manila", c:"Photography", src:"assets/images/ph5.JPG"},
             {t:"Makati CIty", c:"Photography", src:"assets/images/ph7.JPG"},
             {t:"Filamer Christian University", c:"Cinematography", src:"assets/videos/Ohyeah1.mp4"},
             {t:"", c:"Video Editing", src:"assets/videos/Manila First1.mp4"},
             {t:"", c:"Video Editing", src:"assets/videos/Manila Part 22.mp4"},
             {t:"", c:"Landscape", src:"assets/videos/Final We On Go Mercedes1.mp4"},
             {t:"", c:"Landscape", src:"assets/videos/walk in the dreams.mp4"},
             {t:"", c:"Graphic Design", src:"assets/images/Scentella (1).png"},
             {t:"", c:"Graphic Design", src:"assets/images/Standee Display .png"},
             {t:"", c:"Graphic Design", src:"assets/images/Scentella.png"},
              /* {t,c,src} — c is one of the categories */ ],
 videosP:[{src:"assets/videos/Bmwrollers.mp4",poster:"",t:""},
   {src:"assets/videos/Brz rollersSuspension.mp4",poster:"",t:""},
   {src:"assets/videos/Mercedes Lorde.mp4",poster:"",t:""},
   {src:"assets/videos/FerarriFinal.mp4",poster:"",t:""},
   {src:"assets/videos/Rainy Rollers.mp4",poster:"",t:""}],
  videosL:[
  {src:"assets/videos/walk in the dreams.mp4", poster:"", t:""},
  {src:"assets/videos/Final We On Go Mercedes1.mp4", poster:"", t:""},
  {src:"assets/videos/Manila First1.mp4", poster:"", t:""},
  {src:"assets/videos/Manila Part 22.mp4", poster:"", t:""},
  {src:"assets/videos/Ohyeah1.mp4", poster:"", t:""},
  {src:"assets/videos/Iloilo City.mp4", poster:"", t:""}
 ],
 photos:["assets/images/Scentella.png",
   "assets/images/Scentella (1).png",
   "assets/images/Scentella (2).png",
   "assets/images/Scentella (3).png",
   "assets/images/Posters.png",
   "assets/images/Posters (1).png",
   "assets/images/Posters (2).png",
   "assets/images/Posters (3).png",
   "assets/images/Standee Display .png",
   "assets/images/somewhere (1).png",
   "assets/images/somewhere.png",
   "assets/images/BUILD.png",
   "assets/images/goodgirl..png",
   "assets/images/BER months JDM.png",
   "assets/images/BER months JDM (1).png",
   "assets/images/The Scent Atelier.png"],
  grading:[
  {before:"assets/images/Ug 1.JPG", after:"assets/images/G1.JPG"},
  {before:"assets/images/ug2.JPG", after:"assets/images/g2.JPG"},
  {before:"assets/images/ug3.JPG", after:"assets/images/g3.JPG"},
  {before:"assets/images/ug4.JPG", after:"assets/images/g4.JPG"},
  {before:"assets/images/ug5.JPG", after:"assets/images/g5.JPG"},
  {before:"assets/images/ug6.JPG", after:"assets/images/g6.JPG"},
  {before:"assets/images/ug7.png", after:"assets/images/g7.JPG"},
  {before:"assets/images/ug8.png", after:"assets/images/g8.JPG"},
  {before:"assets/images/ug9.png", after:"assets/images/g9.JPG"},
  {before:"assets/images/ug10.png", after:"assets/images/g10.png"},
  {before:"assets/images/ug11.png", after:"assets/images/g11.JPG"},
  {before:"assets/images/ug12.png", after:"assets/images/g12.JPG"}
 ],
  toolLogos:{"Tool name":"assets/logos/file.svg"}/* {"Tool name":"assets/logos/file.svg"} */,
  collabs:[{name:"Subaru Philippines", logo:"assets/logos/Subaru Phillippines.jpg"},{name:"86 Community", logo:"assets/logos/86Community.jpg"},{name:"BrokeBoysClub", logo:"assets/logos/brokeboysclub.jpg"}
   ,{name:"DJI Philippines", logo:"assets/logos/DJIPhilippines.png"},{name:"Drakespec", logo:"assets/logos/Drakespec.jpg"},{name:"Equity Edge", logo:"assets/logos/Equity Edge.jpg"},{name:"FTMO", logo:"assets/logos/FTMO_logo.jpg"}
   ,{name:"Funding Pips", logo:"assets/logos/Funding Pips.jpg"},{name:"JDM Fragrance Studio", logo:"assets/logos/Jdm Fragrance Studio.jpg"},{name:"Mazda Philippines", logo:"assets/logos/Mazda Philippines.jpg"}
   ,{name:"Mercedes Benz Owners Philippines", logo:"assets/logos/Mercedes Benz Owners Philippines.jpg"},{name:"MFCKNRollers", logo:"assets/logos/mfcknrollers.jpg"},{name:"QuickSnap Prestige", logo:"assets/logos/quicksnap Prestige.jpg"}
   ,{name:"RicoSwabe", logo:"assets/logos/RicoSwabe.jpg"}]  /* {name,logo} */};
/* ===== end edit ===== *

/* ---- Examples (copy the shape, change the paths) ----
MEDIA.portrait = "assets/images/me.jpg";
MEDIA.certs = [{t:"Certificate name", o:"Issuer", src:"assets/certificates/cert-1.jpg"}];
MEDIA.portfolio = [{t:"Project", c:"Photography", src:"assets/images/project-1.jpg"}];   // c: Video Editing | Cinematography | Photography | Landscape | Graphic Design | Color Grading
MEDIA.videosP = [{t:"Reel 1", src:"assets/videos/portrait-1.mp4", poster:"assets/images/portrait-1.jpg"}];  // 5 portrait (9:16)
MEDIA.videosL = [{t:"Film 1", src:"assets/videos/landscape-1.mp4", poster:"assets/images/landscape-1.jpg"}]; // 6 landscape (16:9)
MEDIA.photos  = ["assets/images/edit-1.jpg", "...16 in total"];
MEDIA.grading = [{before:"assets/images/grade-1-before.jpg", after:"assets/images/grade-1-after.jpg"}]; // 12 total
MEDIA.toolLogos = {"Adobe Premiere Pro":"assets/logos/premiere.svg", "DaVinci Resolve":"assets/logos/davinci.svg"}; // tool names must match exactly
MEDIA.collabs = [{name:"Brand One", logo:"assets/logos/brand-one.svg"}, {name:"Brand Two", logo:"assets/logos/brand-two.svg"}];
*/

