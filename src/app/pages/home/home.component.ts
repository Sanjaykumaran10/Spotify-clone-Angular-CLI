import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  playlistData: any;
public ishome: boolean=true;
public isfind: boolean=false;
public isplay: boolean=false;


public card = [
  { bg: 'green', co: 'white', t: 'Podcasts',i:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5' },
  { bg: 'darkblue', co: 'white', t: 'Made For You'  ,i:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe' },
  { bg: 'gray', co: 'white', t: 'Charts' ,i:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg'  },
  { bg: 'red', co: 'white', t: 'New release' ,i:'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112'  },
  { bg: 'black', co: 'white', t: 'Discover' ,i:'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg'  },
  { bg: 'Blue', co: 'white', t: 'Live Events' ,i:'https://concerts.spotifycdn.com/images/live-events_category-image.jpg'  },
  { bg: 'yellow', co: 'white', t: 'Bollywood' ,i:'https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg'  },
  { bg: 'pink', co: 'white', t: 'Punjabi' ,i:'https://t.scdn.co/images/11e89d14d7844b7eb3d26619cb662a9b.jpeg'  },
  { bg: 'brown', co: 'white', t: 'Tamil' ,i:'https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg'  },
  { bg: 'teal', co: 'white', t: 'Telugu' ,i:'https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg'  },
  { bg: 'yellow', co: 'white', t: 'India' ,i:'https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg'  },
  { bg: 'red', co: 'white', t: 'Gaming' ,i:'https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af'  },
  { bg: 'black', co: 'white', t: 'RADAR' ,i:'https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png'  },
  { bg: 'blue', co: 'white', t: 'EQUAL' ,i:'https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07'  },
  { bg: 'purple', co: 'white', t: 'Pop' ,i:'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg'  },
  { bg: 'orange', co: 'white', t: 'Fresh Finds' ,i:'https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg'  },
  { bg: 'gray', co: 'white', t: 'Marathi'  ,i:'https://t.scdn.co/images/713254a577a64338a450481329f0d83f.jpeg' },
  { bg: 'green', co: 'white', t: 'Summer'  ,i:'https://t.scdn.co/images/8e508d7eb5b843a89c368c9507ecc429.jpeg' },
  { bg: 'pink', co: 'white', t: 'Wellness'  ,i:'https://t.scdn.co/images/3710b68657574bc79df14bd74629e5ac' },
  { bg: 'brown', co: 'white', t: 'Devotional' ,i:'https://t.scdn.co/images/a1817e719adc4716b8f7a8ccecf64d9b'  },
  { bg: 'teal', co: 'white', t: 'Indian Classical' ,i:'https://t.scdn.co/images/0dcbe54ffb604b37b1ae96223f2524be'  },
  { bg: 'yellow', co: 'white', t: 'Romance' ,i:'https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38'  },
  { bg: 'red', co: 'white', t: 'Decades' ,i:'https://t.scdn.co/images/4c8b58ab42b54296ad5379514d36edac'  },
  { bg: 'black', co: 'white', t: 'K-Pop' ,i:'https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e'  },
  { bg: 'blue', co: 'white', t: 'Netflix'  ,i:'https://t.scdn.co/images/1a416fb97f5647858c7f09c9cb6e7301' },
  { bg: 'purple', co: 'white', t: 'Disney' ,i:'https://t.scdn.co/images/27922fb7882e4d078c59b29cef4111b9'  },
  { bg: 'orange', co: 'white', t: 'Hip-Hop' ,i:'https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg'  }
];


  public songCards =[
    {
        thumbnail:"https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
        title:'Peaceful Piano',
        description:"Relax and indulge with beautiful piano pieces",
    },
    {
      thumbnail:'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5',
      title:'Deep Focus',
      description:"Keep calm and focus with ambient and....",
  },
  {
    thumbnail:'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c',
    title:'Instrumental Study',
    description:"Focus with soft study music in the....",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618',
  title:'Focus Flow',
  description:"Uptempo instrumental hip hop beats.",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
  title:'Workday Lounge',
  description:"Lounge and chill out music for your workday.",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a6',
  title:'Beats to think to',
  description:"Focus with deep techno and tech house.",
},

  ]

  public songCard =[
    {
        thumbnail:'https://i.scdn.co/image/ab67706f00000002dcc50246430b8c5a6a4b8670',
        title:'Today\'s Top Hits',
        description:"The Weeknd is on top of the Hottest 50!",
    },
    {
      thumbnail:'https://i.scdn.co/image/ab67706f00000002f872077fdbbb64540b2a909c',
      title:'RapCaviar',
      description:"Music from Lil Uzi Vert, Drake and Moneybagg Yo.",
  },
  {
    thumbnail:'https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1',
    title:'All Out 2010s',
    description:"The biggest songs of the 2010s.",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e',
  title:'Rock Classics',
  description:"Rock legends &amp; epic songs that continue ...",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361',
  title:'Chill Hits',
  description:"Kick back to the best new and recent chill hits.",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706f000000027ff56ae1d186669482eb0931',
  title:'Viva Latino',
  description:"Today's top Latin hits, elevando nuestr...",
},

  ]

  public songCard1 =[
    {
        thumbnail:'https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb',
        title:'The Sound of...',
        description:"The songs that define, unite and distinguish.. ",
    },
    {
      thumbnail:'https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7',
      title:'The Sound of..',
      description:"The songs that define, unite and distinguish.. ",
  },
  {
    thumbnail:'https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c',
    title:'The Sound of...',
       description:"The songs that define, unite and distinguish..",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d',
  title:'The Sound of...',
  description:"The songs that define, unite and distinguishN... ",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706c0000da8487c680fc5e5805eaef5d4dd2',
  title:'The Sound of..',
  description:"The songs that define, unite and distinguish.. ",
},
{
  thumbnail:'https://i.scdn.co/image/ab67706c0000da84f3b38c327eb3412669e58d96',
  title:'The Sound of...',
  description:"The songs that define, unite and distinguish...o ",
},

  ]

public play=[
  {
  num:'1',i:"https://i.scdn.co/image/ab67616d0000485128ccaf8cb23d857cb9361ec4",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"2 days ago",t:"1:40",
},
{
  num:'2',i:"https://i.scdn.co/image/ab67616d00004851ba1332de8185cce3a9490e74",ti:"Quand vo",s:"Libor Kolman",al:"Quand v..",d:"2 days ago",t:"1:58",
},
{
  num:'3',i:"https://i.scdn.co/image/ab67616d0000485147b70771cb7375cd30ceec54",ti:"Allena ..",s:"M.Ljungstrom",al:"Nostalgia",d:"2 days ago",t:"1:39",
},
{
  num:'4',i:"https://i.scdn.co/image/ab67616d00004851c1f1b784f7ef6ad1fd13e581",ti:"Saying th..",s:"Farsjön",al:"Fjäderlätt",d:"2 days ago",t:"2:10",
},
{
  num:'5',i:"https://i.scdn.co/image/ab67616d00004851b94f78cf2a6ac9c700ee2812",ti:"Paeoner ...",s:"Farsjön",al:"Fjäderlätt",d:"2 days ago",t:"2:03",
},
{
  num:'6',i:"https://i.scdn.co/image/ab67616d0000485199175f73407a5eb9b768b669",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"3 days ago",t:"2:48",
},
{
  num:'7',i:"https://i.scdn.co/image/ab67616d00004851ebd2bd3710718a23115f9bf8",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"4 days ago",t:"1:57",
},
{
  num:'8',i:"https://i.scdn.co/image/ab67616d00004851fcd1cda2481ea4699eee153c",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"4 days ago",t:"1:52",
},
{
  num:'9',i:"https://i.scdn.co/image/ab67616d00004851ada707951f08c829ee8eaf1d",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"4 days ago",t:"2:43",
},
{
  num:'10',i:"https://i.scdn.co/image/ab67616d00004851cc72cfa66d1146c839a0fc73",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"5 days ago",t:"1:39",
},
{
  num:'12',i:"https://i.scdn.co/image/ab67616d00004851d385d26895594fc0f309e74b",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"6 days ago",t:"2:15",
},
{
  num:'13',i:"https://i.scdn.co/image/ab67616d00004851288470effcdece2beeb0cef5",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"6 days ago",t:"2:29",
},
{
  num:'14',i:"https://i.scdn.co/image/ab67616d00004851734fa44e730eb68431fa0b16",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"7 days ago",t:"3:22",
},
{
  num:'15',i:"https://i.scdn.co/image/ab67616d000048516304ad16edcfeba83aa04a70",ti:"Tjärnheden",s:"Farsjön",al:"Fjäderlätt",d:"7 days ago",t:"2:13",
}
]


  constructor(private sb: SearchBarService,private router: Router){}

  ngOnInit(): void {
    this.sb.isHomeVisible.subscribe(status =>{
      this.ishome =status;
    })
    this.sb.isFindVisible.subscribe(status => {
      this.isfind =status;
    })
    this.sb.isPlayVisible.subscribe(status=>{
      this.isplay=status;
    })

  }

  redirectToPage(title: string, description: string, thumbnail: string) {
    this.sb.isSearchVisible.next(false);
    this.sb.isHomeVisible.next(false);
    this.sb.isFindVisible.next(false);
    this.sb.isPlayVisible.next(true);
    
    this.playlistData = {
      title: title,
      description: description,
      thumbnail: thumbnail
    };

  }

  onNavigation(pageName:string){
    if(pageName === 'search'){
    this.sb.isSearchVisible.next(true);
    this.sb.isHomeVisible.next(false);
    this.sb.isFindVisible.next(true);
    this.sb.isPlayVisible.next(false);
    }
    if(pageName === 'library' || pageName === 'playlist'|| pageName==="likes"){
      this.router.navigate(['/','login']);
    }

    if(pageName === 'home'){{
      this.sb.isSearchVisible.next(false);
      this.sb.isHomeVisible.next(true);
      this.sb.isFindVisible.next(false);
      this.sb.isPlayVisible.next(false);
    }
  }

    
  }
}
