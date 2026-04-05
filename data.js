// ========== GRABBY SHARED DATA ==========

const LISTINGS = [
  { id:1, title:"Nike Air Max 90 — White/Red", price:85, category:"apparel", condition:"Like new", img:"👟", bg:"linear-gradient(135deg,#ffecd2,#fcb69f)", location:"Fitzroy, VIC", distance:"2.1km", time:"2h ago", seller:"jake_k", sellerName:"Jake K.", sellerRating:4.9, sellerSales:47, views:142, favorites:18, desc:"Barely worn, bought last summer. No box. Collection from Fitzroy or can post for $8 tracked. Accepting offers!", tags:["fashion","trending"], shipping:true, pickup:true },
  { id:2, title:"iPhone 14 Pro 256GB Space Black", price:820, category:"electronics", condition:"Good", img:"📱", bg:"linear-gradient(135deg,#667eea,#764ba2)", location:"CBD, Melbourne", distance:"0.8km", time:"4h ago", seller:"techseller22", sellerName:"Tech Store", sellerRating:4.8, sellerSales:203, views:389, favorites:41, desc:"iPhone 14 Pro 256GB in great condition. Minor scuff on back (shown in photos). Battery health 91%. Comes with original box and cable.", tags:["electronics","trending"], shipping:true, pickup:true },
  { id:3, title:"Mid-Century Modern Sofa — 3 Seater", price:450, category:"homegoods", condition:"Good", img:"🛋️", bg:"linear-gradient(135deg,#f093fb,#f5576c)", location:"Collingwood, VIC", distance:"3.4km", time:"1d ago", seller:"casa_finds", sellerName:"Casa Finds", sellerRating:5.0, sellerSales:31, views:220, favorites:29, desc:"Beautiful mid-century modern 3-seater sofa. Sage green velvet. Some wear on armrests. Pickup only — bring helpers! Originally $1,800.", tags:["home"], shipping:false, pickup:true },
  { id:4, title:"Fender Stratocaster Electric Guitar", price:680, category:"music", condition:"Good", img:"🎸", bg:"linear-gradient(135deg,#4facfe,#00f2fe)", location:"Brunswick, VIC", distance:"4km", time:"3h ago", seller:"musicman_mel", sellerName:"Dave R.", sellerRating:4.7, sellerSales:12, views:97, favorites:22, desc:"2019 Fender Player Stratocaster in Polar White. Plays great, some buckle rash on back. Includes gig bag. Serious buyers only.", tags:["hobbies"], shipping:true, pickup:true },
  { id:5, title:"Levi's 501 Jeans — W32 L32", price:55, category:"apparel", condition:"Good", img:"👖", bg:"linear-gradient(135deg,#43e97b,#38f9d7)", location:"Richmond, VIC", distance:"2.8km", time:"5h ago", seller:"thrift_queen", sellerName:"Sarah T.", sellerRating:4.9, sellerSales:89, views:74, favorites:11, desc:"Classic Levi's 501 originals in medium wash. Waist 32, Length 32. Light fading — perfect vintage look. Washed and ready to wear.", tags:["fashion"], shipping:true, pickup:true },
  { id:6, title:"Sony WH-1000XM5 Headphones", price:280, category:"electronics", condition:"Like new", img:"🎧", bg:"linear-gradient(135deg,#fa709a,#fee140)", location:"St Kilda, VIC", distance:"5.2km", time:"6h ago", seller:"audiophile_aus", sellerName:"Alex M.", sellerRating:4.6, sellerSales:24, views:156, favorites:33, desc:"Sony WH-1000XM5 noise-cancelling headphones. Used twice. Still under warranty until Dec 2025. All accessories included.", tags:["electronics","trending"], shipping:true, pickup:true },
  { id:7, title:"Vintage Polaroid Camera OneStep+", price:120, category:"hobbies", condition:"Good", img:"📷", bg:"linear-gradient(135deg,#a18cd1,#fbc2eb)", location:"Northcote, VIC", distance:"6km", time:"1d ago", seller:"retro_finds", sellerName:"Mia L.", sellerRating:5.0, sellerSales:56, views:88, favorites:19, desc:"Polaroid OneStep+ in great working condition. Comes with one pack of film (8 shots). Original strap included. Takes stunning photos!", tags:["hobbies","trending"], shipping:true, pickup:true },
  { id:8, title:"Trek Marlin 5 Mountain Bike 2022", price:750, category:"sports", condition:"Good", img:"🚲", bg:"linear-gradient(135deg,#96fbc4,#f9f586)", location:"Heidelberg, VIC", distance:"9.1km", time:"2d ago", seller:"ride_aus", sellerName:"Tom W.", sellerRating:4.8, sellerSales:8, views:201, favorites:27, desc:"2022 Trek Marlin 5 in size M. Hydraulic disc brakes, Shimano 2x8 drivetrain. Needs rear brake bleed. Otherwise rides great.", tags:["sports"], shipping:false, pickup:true },
  { id:9, title:"Apple Watch Series 8 45mm GPS", price:340, category:"electronics", condition:"Like new", img:"⌚", bg:"linear-gradient(135deg,#f6d365,#fda085)", location:"South Yarra, VIC", distance:"3.2km", time:"3h ago", seller:"applefan_99", sellerName:"Chris P.", sellerRating:4.9, sellerSales:67, views:178, favorites:24, desc:"Apple Watch S8 45mm in Midnight. Screen protector on since day 1. Battery health 100%. Comes with 3 bands and original box.", tags:["electronics"], shipping:true, pickup:true },
  { id:10, title:"Monstera Deliciosa — Large 1.2m", price:45, category:"garden", condition:"New", img:"🌿", bg:"linear-gradient(135deg,#e0c3fc,#8ec5fc)", location:"Fitzroy, VIC", distance:"2.3km", time:"4h ago", seller:"plant_paradise", sellerName:"Emma G.", sellerRating:5.0, sellerSales:142, views:63, favorites:15, desc:"Huge healthy monstera deliciosa approx 1.2m tall. Outgrown my space. Pickup only in pot. Will need two people to lift.", tags:["garden","home"], shipping:false, pickup:true },
  { id:11, title:"Nintendo Switch OLED — White", price:380, category:"electronics", condition:"Good", img:"🎮", bg:"linear-gradient(135deg,#ff9a9e,#fecfef)", location:"Carlton, VIC", distance:"1.5km", time:"1d ago", seller:"gamer_vibes", sellerName:"James H.", sellerRating:4.7, sellerSales:19, views:245, favorites:38, desc:"Nintendo Switch OLED in white. Comes with dock, 2 Joy-Cons, and 4 games (Mario Kart, Zelda, Splatoon 3, Animal Crossing). All working perfectly.", tags:["electronics","trending"], shipping:true, pickup:true },
  { id:12, title:"Lululemon Define Jacket — Size 8", price:90, category:"apparel", condition:"Like new", img:"🧥", bg:"linear-gradient(135deg,#ffeaa7,#dfe6e9)", location:"Prahran, VIC", distance:"4.1km", time:"6h ago", seller:"lulu_lover", sellerName:"Jess R.", sellerRating:4.8, sellerSales:34, views:91, favorites:17, desc:"Lululemon Define Jacket in Navy. Size 8 (AU). Worn twice, washed once. No pilling. Smoke-free home. All zips work perfectly.", tags:["fashion"], shipping:true, pickup:true },
  { id:13, title:"Weber Q1200 Portable BBQ", price:180, category:"garden", condition:"Good", img:"🔥", bg:"linear-gradient(135deg,#fd7043,#ff8a65)", location:"Hawthorn, VIC", distance:"5.8km", time:"3d ago", seller:"backyard_chef", sellerName:"Mark S.", sellerRating:4.5, sellerSales:7, views:109, favorites:12, desc:"Weber Q1200 portable gas BBQ. Includes hose adapter and carry bag. Needs a clean but works perfectly. Great for camping or small spaces.", tags:["garden","home"], shipping:false, pickup:true },
  { id:14, title:"Dyson V11 Cordless Vacuum", price:320, category:"homegoods", condition:"Good", img:"🧹", bg:"linear-gradient(135deg,#a1c4fd,#c2e9fb)", location:"Toorak, VIC", distance:"6.3km", time:"5h ago", seller:"clean_home", sellerName:"Linda V.", sellerRating:5.0, sellerSales:22, views:187, favorites:31, desc:"Dyson V11 with all original attachments including the fluffy and torque drive heads. Battery lasts ~50 mins. Suction is excellent.", tags:["home"], shipping:true, pickup:true },
  { id:15, title:"Free — IKEA Malm Dresser White", price:0, category:"free", condition:"Fair", img:"🪞", bg:"linear-gradient(135deg,#e0e0e0,#bdbdbd)", location:"Dandenong, VIC", distance:"22km", time:"8h ago", seller:"giveaway_gal", sellerName:"Nicole B.", sellerRating:4.4, sellerSales:15, views:312, favorites:44, desc:"FREE IKEA Malm dresser with 6 drawers. White. Has some stickers on sides but otherwise in fair condition. PICKUP ONLY. Must take today.", tags:["home","free"], shipping:false, pickup:true },
  { id:16, title:"Patagonia Down Jacket — Men's L", price:180, category:"apparel", condition:"Good", img:"🧤", bg:"linear-gradient(135deg,#667eea,#764ba2)", location:"Docklands, VIC", distance:"1.1km", time:"2h ago", seller:"outdoor_gear", sellerName:"Ryan M.", sellerRating:4.6, sellerSales:51, views:68, favorites:9, desc:"Patagonia 800-fill down jacket in Navy. Men's Large. One small repair patch under left arm (barely visible). Keeps you incredibly warm.", tags:["fashion","sports"], shipping:true, pickup:true },
];

const USERS = {
  jake_k: { name:"Jake K.", handle:"@jakek", avatar:"JK", bio:"Sneakers, vintage & electronics 🔥 Fast shipping always!", location:"Fitzroy, VIC", rating:4.9, sales:47, joined:"Jan 2023", verified:true, topSeller:true, listings:[1,5,16] },
  techseller22: { name:"Tech Store", handle:"@techstore", avatar:"TS", bio:"Refurbished tech at great prices 📱 All tested before listing", location:"CBD, Melbourne", rating:4.8, sales:203, joined:"Mar 2022", verified:true, topSeller:true, listings:[2,9,11] },
  thrift_queen: { name:"Sarah T.", handle:"@thriftqueen", avatar:"ST", bio:"Vintage lover 🌸 Sustainable fashion advocate", location:"Richmond, VIC", rating:4.9, sales:89, joined:"Jun 2023", verified:true, topSeller:false, listings:[5,12] },
  currentUser: { name:"Alex Johnson", handle:"@alexj", avatar:"AJ", bio:"New to Grabby! 👋", location:"Melbourne, VIC", rating:0, sales:0, joined:"Apr 2025", verified:false, topSeller:false, listings:[], favorites:[2,6,7,11] },
};

const MESSAGES = [
  { id:1, with:"jake_k", withName:"Jake K.", withAvatar:"JK", listingId:1, listingTitle:"Nike Air Max 90", lastMsg:"Would you take $75?", time:"2m ago", unread:2, msgs:[
    { from:"jake_k", text:"Hey! Thanks for your interest in the Nikes 👟", time:"10:32 AM", read:true },
    { from:"me", text:"Hi! Are they still available?", time:"10:35 AM", read:true },
    { from:"jake_k", text:"Yes still available!", time:"10:36 AM", read:true },
    { from:"me", text:"Would you take $75?", time:"10:40 AM", read:false },
    { from:"jake_k", text:"Best I can do is $80, they're basically brand new 🙏", time:"10:41 AM", read:false },
  ]},
  { id:2, with:"techseller22", withName:"Tech Store", withAvatar:"TS", listingId:2, listingTitle:"iPhone 14 Pro", lastMsg:"Can you include a charger?", time:"1h ago", unread:1, msgs:[
    { from:"me", text:"Hi, is the iPhone still available?", time:"9:15 AM", read:true },
    { from:"techseller22", text:"Yes it is! Great condition, battery at 91%", time:"9:20 AM", read:true },
    { from:"me", text:"Can you include a charger?", time:"9:45 AM", read:false },
  ]},
  { id:3, with:"thrift_queen", withName:"Sarah T.", withAvatar:"ST", listingId:5, listingTitle:"Levi's 501 Jeans", lastMsg:"Perfect, I'll take them!", time:"3h ago", unread:0, msgs:[
    { from:"thrift_queen", text:"Hi there! The jeans are in great condition 😊", time:"7:00 AM", read:true },
    { from:"me", text:"Are they true to size?", time:"7:15 AM", read:true },
    { from:"thrift_queen", text:"Yes, true to size! Very comfy fit", time:"7:20 AM", read:true },
    { from:"me", text:"Perfect, I'll take them!", time:"7:30 AM", read:true },
    { from:"thrift_queen", text:"Great! I'll send you my payment details 🎉", time:"7:31 AM", read:true },
  ]},
];

// Utility functions
function getListingById(id) { return LISTINGS.find(l => l.id === id); }
function getFeatured() { return LISTINGS.slice(0,8); }
function getTrending() { return LISTINGS.filter(l => l.tags.includes('trending')); }
function getRecent() { return [...LISTINGS].reverse(); }
function getUserById(id) { return USERS[id] || null; }

window.GRABBY = { LISTINGS, USERS, MESSAGES, getListingById, getFeatured, getTrending, getRecent, getUserById };
