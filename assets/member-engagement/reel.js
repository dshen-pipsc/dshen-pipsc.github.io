(function(){
  "use strict";
  var photos = [
  {
    "image": "assets/member-engagement/event-01.webp",
    "event": "Yearend Social Pool Hall",
    "date": "8 Dec 2022",
    "dateISO": "2022-12-08",
    "alt": "Event photograph: Yearend Social Pool Hall, 8 December 2022.",
    "sizeKB": 161.8,
    "dimensions": [
      1867,
      1400
    ]
  },
  {
    "image": "assets/member-engagement/event-02.webp",
    "event": "PIPSC 101 Lunch & Learn",
    "date": "10 Dec 2022",
    "dateISO": "2022-12-10",
    "alt": "Event photograph: PIPSC 101 Lunch & Learn, 10 December 2022.",
    "sizeKB": 438.2,
    "dimensions": [
      1867,
      1400
    ]
  },
  {
    "image": "assets/member-engagement/event-03.webp",
    "event": "Ratification Lunch & Learn",
    "date": "23 Nov 2023",
    "dateISO": "2023-11-23",
    "alt": "Event photograph: Ratification Lunch & Learn, 23 November 2023.",
    "sizeKB": 123.8,
    "dimensions": [
      1867,
      1400
    ]
  },
  {
    "image": "assets/member-engagement/event-04.webp",
    "event": "Ratification Lunch & Learn",
    "date": "30 Nov 2023",
    "dateISO": "2023-11-30",
    "alt": "Event photograph: Ratification Lunch & Learn, 30 November 2023.",
    "sizeKB": 81.5,
    "dimensions": [
      1920,
      429
    ]
  },
  {
    "image": "assets/member-engagement/event-05.webp",
    "event": "Bowling",
    "date": "7 Dec 2023",
    "dateISO": "2023-12-07",
    "alt": "Event photograph: Bowling, 7 December 2023.",
    "sizeKB": 194.7,
    "dimensions": [
      1920,
      885
    ]
  },
  {
    "image": "assets/member-engagement/event-06.webp",
    "event": "Paintball",
    "date": "8 Jun 2024",
    "dateISO": "2024-06-08",
    "alt": "Event photograph: Paintball, 8 June 2024.",
    "sizeKB": 597.1,
    "dimensions": [
      1920,
      887
    ]
  },
  {
    "image": "assets/member-engagement/event-07.webp",
    "event": "Navigar Lunch & Learn",
    "date": "21 Oct 2024",
    "dateISO": "2024-10-21",
    "alt": "Event photograph: Navigar Lunch & Learn, 21 October 2024.",
    "sizeKB": 91.6,
    "dimensions": [
      1920,
      1080
    ]
  },
  {
    "image": "assets/member-engagement/event-08.webp",
    "event": "WFA Lunch & Learn",
    "date": "12 Mar 2025",
    "dateISO": "2025-03-12",
    "alt": "Event photograph: WFA Lunch & Learn, 12 March 2025.",
    "sizeKB": 143.7,
    "dimensions": [
      1920,
      695
    ]
  },
  {
    "image": "assets/member-engagement/event-09.webp",
    "event": "WFA Lunch & Learn",
    "date": "15 Mar 2025",
    "dateISO": "2025-03-15",
    "alt": "Event photograph: WFA Lunch & Learn, 15 March 2025.",
    "sizeKB": 183.1,
    "dimensions": [
      1867,
      1400
    ]
  },
  {
    "image": "assets/member-engagement/event-10.webp",
    "event": "Subgroup AGM",
    "date": "21 May 2025",
    "dateISO": "2025-05-21",
    "alt": "Event photograph: Subgroup AGM, 21 May 2025.",
    "sizeKB": 127.8,
    "dimensions": [
      1920,
      494
    ]
  },
  {
    "image": "assets/member-engagement/event-11.webp",
    "event": "Family Picnic",
    "date": "16 Aug 2025",
    "dateISO": "2025-08-16",
    "alt": "Event photograph: Family Picnic, 16 August 2025.",
    "sizeKB": 842.2,
    "dimensions": [
      1867,
      1400
    ]
  },
  {
    "image": "assets/member-engagement/event-12.webp",
    "event": "Bowling",
    "date": "26 Nov 2025",
    "dateISO": "2025-11-26",
    "alt": "Event photograph: Bowling, 26 November 2025.",
    "sizeKB": 195.6,
    "dimensions": [
      1920,
      774
    ]
  },
  {
    "image": "assets/member-engagement/event-13.webp",
    "event": "Subgroup AGM",
    "date": "5 May 2026",
    "dateISO": "2026-05-05",
    "alt": "Event photograph: Subgroup AGM, 5 May 2026.",
    "sizeKB": 159.6,
    "dimensions": [
      1920,
      864
    ]
  },
  {
    "image": "assets/member-engagement/event-14.webp",
    "event": "Minigolf",
    "date": "6 Jun 2026",
    "dateISO": "2026-06-06",
    "alt": "Event photograph: Minigolf, 6 June 2026.",
    "sizeKB": 533.5,
    "dimensions": [
      1920,
      1022
    ]
  },
  {
    "image": "assets/member-engagement/event-15.webp",
    "event": "Bargaining Support",
    "date": "6 Oct 2026",
    "dateISO": "2026-10-06",
    "alt": "Event photograph: Bargaining Support, 6 October 2026.",
    "sizeKB": 488.4,
    "dimensions": [
      1859,
      1400
    ]
  },
  {
    "image": "assets/member-engagement/event-16.webp",
    "event": "Bargaining Support",
    "date": "26 Oct 2026",
    "dateISO": "2026-10-26",
    "alt": "Event photograph: Bargaining Support, 26 October 2026.",
    "sizeKB": 323.3,
    "dimensions": [
      1867,
      1400
    ]
  }
];
  function init(root){
   var frames = root.querySelectorAll(".er-photo");
   var caption = root.querySelector("[data-er-caption]");
   var date = root.querySelector("[data-er-date]");
   var count = root.querySelector("[data-er-count]");
   var dots = root.querySelector("[data-er-dots]");
   var prev = root.querySelector("[data-er-prev]");
   var next = root.querySelector("[data-er-next]");
   var toggle = root.querySelector("[data-er-toggle]");
   var idx=0, layer=0, running=false, interval=null, switching=false, inView=true;
   var motion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   var userPaused=motion;
   function setCaption(){ caption.textContent=photos[idx].event; date.textContent=photos[idx].date; count.textContent=(idx+1)+" / "+photos.length; dots.querySelectorAll("button").forEach(function(b,i){b.setAttribute("aria-current",String(i===idx));}); }
   function setButton(){ var on=running && !userPaused; toggle.textContent=on ? "Pause" : "Play";toggle.setAttribute("aria-label",on?"Pause slideshow":"Play slideshow");toggle.setAttribute("aria-pressed",String(on)); }
   function clear(){if(interval){clearTimeout(interval);interval=null;}}
   function schedule(){clear(); if(!userPaused && inView && !document.hidden && photos.length>1){interval=setTimeout(function(){go(1,false);}, 2500);} setButton();}
   // Wraps both directions: Next on photo 16 returns to photo 1.
   // Only reveal a frame after its replacement image has loaded.
   function go(delta, manual){
     if(manual){userPaused=true; clear();}
     if(switching){return;}
     var wanted=((idx+delta)%photos.length+photos.length)%photos.length;
     if(wanted===idx){schedule();return;}

     switching=true;
     var other=1-layer;
     var img=frames[other];
     var old=frames[layer];
     var done=false;

     function show(){
       if(done){return;}
       done=true;
       img.onload=null;
       img.onerror=null;
       if(motion){
         img.style.transition="none";
         old.style.transition="none";
       } else {
         img.style.transition="opacity 650ms ease";
         old.style.transition="opacity 650ms ease";
       }
       img.classList.add("er-photo--visible");
       old.classList.remove("er-photo--visible");
       layer=other;
       idx=wanted;
       setCaption();
       setButton();
       setTimeout(function(){switching=false;schedule();},motion?0:670);
     }

     function loadFailed(){
       if(done){return;}
       img.onload=null;
       img.onerror=null;
       switching=false;
       // Keep the old, already loaded photograph visible on failure.
       console.warn("Unable to load slideshow photo:", photos[wanted].image);
       schedule();
     }

     // Set callbacks BEFORE the source; disabled lazy-loading prevents a
     // hidden frame from being deferred by some mobile browsers.
     img.onload=function(){if(img.naturalWidth>0){show();}else{loadFailed();}};
     img.onerror=loadFailed;
     img.loading="eager";
     img.alt=photos[wanted].alt;
     img.src=photos[wanted].image;
     if(img.complete && img.naturalWidth>0){show();}
   }
   photos.forEach(function(p,i){ var btn=document.createElement("button"); btn.type="button";btn.setAttribute("aria-label","Show photograph "+(i+1)+": "+p.event);btn.title=p.date+" — "+p.event;btn.addEventListener("click",function(){go(i-idx,true);});dots.appendChild(btn);});
   frames[0].src=photos[0].image;frames[0].alt=photos[0].alt;frames[0].classList.add("er-photo--visible");setCaption();
   prev.addEventListener("click",function(){go(-1,true);});next.addEventListener("click",function(){go(1,true);});
   toggle.addEventListener("click",function(){userPaused=!userPaused;running=!userPaused;schedule();});
   root.addEventListener("keydown",function(e){if(e.key==="ArrowLeft"){e.preventDefault();go(-1,true);}if(e.key==="ArrowRight"){e.preventDefault();go(1,true);}});
   if("IntersectionObserver" in window){var observer=new IntersectionObserver(function(entries){inView=entries[0].isIntersecting;schedule();},{threshold:0.2});observer.observe(root);}
   document.addEventListener("visibilitychange",schedule);
   running=!motion; schedule();
   // Next photo is prefetched after initial load; all 16 images remain private in the local package until you approve publishing.
 }
  document.querySelectorAll("[data-engagement-reel]").forEach(init);
})();
