// import Product from "../models/product.js";

// const product = {
//   cards: [
//     {
//       card: {
//         card: {
//           "@type":
//             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//           title: "Brews And Bites",
//           itemCards: [
//             {
//               card: {
//                 info: {
//                   id: "179827338",
//                   name: "Signature Cold Coffee (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "India's highest rated and most loved cold coffee. For everyone and all occasions, 24x7. Espresso + vanilla ice cream + milk. Refreshing, bold and nostalgic. (regular-250)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/22/d9ed08f6-0fc5-4626-9372-a3b829717451_496f8036-94f0-4a03-af75-f9b576caf708.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "179827336",
//                   name: "Iced Latte (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "For the cool ones who love the magic that coffee and milk create together. Espresso + chilled milk. Hearty and invigorating. (regular-250 ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/22/af6de6f3-9405-490d-b54d-40ac2f161572_7b6d6e82-1f3b-4a69-b940-ba6176200314.jpg",
//                   price: 15900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "179827333",
//                   name: "Americano (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "For the health freaks, coffee explorers who love to savour the aroma and body of coffee. Espresso + hot water. Things get done with our strong and aromatic liquid magic (no added sugar). (regular-250 ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/9/1/afa6aa35-454b-4cb0-ac89-bad340133f13_994ef2fd-40ae-4915-8452-543f78e0769b.jpg",
//                   price: 9900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "179827335",
//                   name: "Iced Americano (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "For the ones who are on a mission to make it happen everyday be it summer or winter, no matter if times are hard or easy. Espresso on the rocks + cold water. Cool and strong at the same time. (regular-250 ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/22/0a74fec9-fd0a-41e1-b98e-a2e09256cf1f_a55e2675-dc8b-4372-b6ae-e21a793579c7.jpg",
//                   price: 13900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "179827334",
//                   name: "Cappuccino (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "For the ones who love the creaminess and balance of milk with coffee, espresso+ velvety textured micro foam + hot milk. The most universal and loved coffee beverage of the world. (regular-250 ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/22/c429fd95-b969-4796-bc3a-92dcf1c4ae71_aa026f84-46ed-49d4-9832-e9d03b40e322.jpg",
//                   price: 13900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "179827337",
//                   name: "Cranberry Cold Brew.",
//                   category: "Brews And Bites",
//                   description:
//                     "A refreshing twist on the classic cold brew, this drink features a splash of tangy brightness of cranberry flavours. Loved by iced black coffee drinkers, less calories and more caffeine. 300 ml",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/25/d8c3219d-3af2-4c7c-b415-09b4f74b201b_0ec19e1d-3407-48e6-b6e0-2556ae9ede24.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854233",
//                   name: "Caramel Cappuccino (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "The caramel twist to your most loved cappuccino. Caramel cappuccino is your go to drink if you like your coffee flavourful and sweet. (regular-250 ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/25/a176bd23-e076-41cd-9fcd-b2a53d074e29_770c154e-8514-425b-8155-0cc2c155d6de.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854234",
//                   name: "Hot Chocolate (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "Dark hot chocolate, thick and smooth, prepared from highest grade dutch processed cocoa beans. All time favourite drink where sweetness and bitterness is balanced well with real chocolatey flavour, made fresh. (regular-250 ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/29/b7153ef5-7bb9-43c9-bd66-ad7e66e9bda5_d1063de2-6df6-438f-a613-dd9a92a50d71.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854235",
//                   name: "Spinach & Corn Sandwich.",
//                   category: "Brews And Bites",
//                   description:
//                     "Velvety spinach and sweet corn mingled in a rich, creamy filling. Sealed inside toasted brown bread, grilled for that perfect crunch. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/19/5cada4c5-e1b7-47ec-950b-e0bcee15c01d_d3fc2d3a-09a3-44ff-b129-0bc68cae4465.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
//                 info: {
//                   id: "180854237",
//                   name: "Creamy Anda Bhurji Sandwich.",
//                   category: "Brews And Bites",
//                   description:
//                     "Spiced anda bhurji meets silky mayo in a warm brown bread hug. Grilled till crisp outside, irresistibly creamy inside. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/19/c5ebf5b3-8add-40a0-962a-e373e02a49da_b2e5b5de-7157-4f53-a3b4-082fc08224e1.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854239",
//                   name: "Chicken Wrap.",
//                   category: "Brews And Bites",
//                   description:
//                     "Tender chicken tossed in a bold kali mirch masala, bursting with peppery heat. Rolled up in a soft wrap and grilled for a smoky, flavour-packed bite. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/28/2ebc0c87-4f9b-46e0-b775-13e75379d37c_b065edd4-4457-455e-be26-5f910fde5d83.jpg",
//                   price: 20900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854240",
//                   name: "Paneer Wrap.",
//                   category: "Brews And Bites",
//                   description:
//                     "Crumbled paneer tossed in a fiery tikka-style masala for a burst of flavour. Wrapped in a warm tortilla and grilled for the perfect smoky finish. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/28/2a9d68b3-c445-479d-bade-a5ddba658151_5339505a-2be8-4dbe-97e5-5d7da7462dde.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854242",
//                   name: "Iced Cappuccino (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "For the ones who are strong on the inside and cool from the outside, get things done every time. Espresso + chilled milk with foam. Fulfilling and complete. (regular-250 ml (77. 45 kcal))",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/22/4911f30c-ebbb-4303-aebe-17542667339a_0fc01553-91c4-4580-becb-6910f4862bce.png",
//                   price: 15900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854243",
//                   name: "Latte (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "For the ones who like the milky texture in their coffee, a balanced coffee beverage that gets you off the hook at 7 am or 12 midnight. Espresso+ steamed milk. (regular-250ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/29/6db6e6aa-efc2-4dfa-b63d-9e186df41d86_36a37d1f-d9e2-44ac-8617-45e23397894f.jpg",
//                   price: 14900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854245",
//                   name: "Iced Hazelnut Latte (Regular).",
//                   category: "Brews And Bites",
//                   description:
//                     "Iced latte with the richness of hazelnut flavours. A little sweet tint to your strong iced lattes. (regular -250ml)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/22/ac370de1-406c-4001-8f8b-22e839e55cba_616f9283-61d5-4125-b943-ee855df1454b.jpg",
//                   price: 19900
//                 }
//               },
//             },
//           ]
//         },
//       },
//     },
//     {
//       card: {
//         card: {
//           "@type":
//             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//           title: "Matcha",
//           itemCards: [
//             {
//               card: {
//                 info: {
//                   id: "180854247",
//                   name: "Iced Matcha",
//                   category: "Matcha",
//                   description:
//                     "For matcha purists who love it cold, clean, and straight to the point. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/1/adaab6e7-146b-4509-8528-5aa3a8c754b7_832f72bc-e348-4aa4-8462-d24af8130a64.jpg",
//                   price: 27900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854248",
//                   name: "Dirty Matcha",
//                   category: "Matcha",
//                   description:
//                     "When matcha met espresso and things got real messy. A scandalous swirl of earthy matcha, chilled milk, and a bold espresso shot that’s too cool to be clean. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/28/b9a1c251-5c7c-4e96-b987-cae137c6b0a3_355e82f3-ce76-4a1c-a03b-0de199fb887e.jpg",
//                   price: 29900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854249",
//                   name: "Vanilla Oat Milk Iced Matcha",
//                   category: "Matcha",
//                   description:
//                     "Matcha just got a sweet little makeover. Creamy oat milk, a hint of vanilla, and a chill you didn’t see coming, it’s like your matcha went on vacation and came back cooler. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/7/61bbcfa5-549f-4d10-a3fd-ebbdb8dbe073_a0c30925-050e-4831-91f5-886fbcae2e39.jpg",
//                   price: 29900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854250",
//                   name: "Cranberry Iced Matcha",
//                   category: "Matcha",
//                   description:
//                     "Bright, tangy cranberry meets the earthy calm of nami-grade matcha in a chilled sip. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/1/9cf567cd-56fb-479b-994f-6c083d6339e0_1ee22513-3d3d-40df-8aab-cc5c14587210.jpg",
//                   price: 29900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854251",
//                   name: "Vanilla Cinnamon Iced Matcha",
//                   category: "Matcha",
//                   description:
//                     "Refreshing twist of almond milk, rich vanilla, aromatic cinnamon, and nami-grade matcha. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/20/f8dffca2-203a-41b6-8d4d-eae19e6a55af_2439fda4-f1e9-44ec-89eb-8ffe50287ebf.jpg",
//                   price: 29900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180854252",
//                   name: "Hot Matcha Latte",
//                   category: "Matcha",
//                   description:
//                     "Comfort in a cup - velvety steamed milk with the finest nami-grade matcha. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/20/35834199-fb18-49e1-a31e-48188e308372_e079fefb-6ad2-4253-9646-969db3295bf8.png",
//                   price: 24900
//                 }
//               },
//             },
//           ]
//         },
//       },
//     },
//     {
//       card: {
//         card: {
//           "@type":
//             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//           title: "Combos",
//           itemCards: [
//             {
//               card: {
//                 info: {
//                   id: "180538878",
//                   name: "Curate Your Combo (Milkshake Spl)",
//                   category: "Combos",
//                   description:
//                     "Creamy shakes with a snack to share, comfort and joy in the perfect pair. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/7/16/7ab6df37-9a36-4236-b42d-bf798f4fa575_abaedb10-5961-4dda-b0e7-d1f8773fe4fd.jpg",
//                   price: 26800
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "180538879",
//                   name: "Curate Your Combo (Boba Spl)",
//                   category: "Combos",
//                   description:
//                     "Build your own boba veg combo (choose a boba beverage and a veg food)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/7/16/7b240ad7-4cde-413a-9698-400b447dc8cf_05b7a998-bdc2-4085-9eff-bd7aa957ae57.jpg",
//                   price: 30800
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121362",
//                   name: "Signature Cold Coffee (R) + Iced Mocha (R) + Mini Croissants (100gm)",
//                   category: "Combos",
//                   description:
//                     "A bold combo of creamy cold coffee and luscious iced mocha, served with buttery mini croissants,�light, indulgent, and just the right kind of treat. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/4/10/e08508ad-c4e8-4ff8-84fa-3247aa2a74e9_1a4796f4-4ab5-4781-8f2d-22bd58b839b7.jpg",
//                   price: 55700
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121363",
//                   name: "2 X Signature Cold Coffee (R) + Mini Croissants (100gm)",
//                   category: "Combos",
//                   description:
//                     "Two servings of our signature cold coffee, known for its smooth creamy texture and refreshing chill, paired with a serving of freshly baked, buttery mini croissants. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/4/10/32c0117e-57da-48cd-aabc-a57f5528731a_28a4b81d-fb6d-4acb-881f-47aafc83220d.jpg",
//                   price: 55700
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121364",
//                   name: "Iced Mocha (R) + Iced Mocha (R) + Mini Croissants (100gm)",
//                   category: "Combos",
//                   description:
//                     "A wonder mix of molten chocolate and espresso, that too served twice. Paired with buttery mini croissants for the perfect treat. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/4/10/a346717a-04e8-499d-9cde-b24b1b05993b_0d7b819e-31f0-4da9-9b96-4ee5acd19e05.jpg",
//                   price: 55700
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121365",
//                   name: "Iced Latte (R) + Iced Latte (R) + Mini Croissants (100gm)",
//                   category: "Combos",
//                   description:
//                     "Two smooth iced lattes brewed with specialty beans, perfectly paired with buttery, freshly baked mini croissants. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/4/10/156ed906-bb92-480e-aff5-08031e978d9c_c3e56fb9-f2b9-4219-a272-a1fb54045b6b.jpg",
//                   price: 47700
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121366",
//                   name: "Iced Latte (R) + Iced Mocha (R) + Mini Croissants (100gm)",
//                   category: "Combos",
//                   description:
//                     "A delightful trio featuring a refreshing iced latte and a rich, chocolate-infused iced mocha, perfectly paired with freshly baked mini croissants. ",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/4/10/32d6b9dd-0b67-42d2-8335-b81fc6f57216_dd1b8ca2-0636-49bf-a7f5-426d55d5ddb9.jpg",
//                   price: 51700
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121368",
//                   name: "Cappuccino (R) & Butter Croissant",
//                   category: "Combos",
//                   description:
//                     "Whether you prefer it hot or iced, our cappuccino pairs flawlessly with our freshly baked butter croissants. Indulge in the creamy richness of the cappuccino and the flaky goodness of our croissants for a delightful treat. (cappuccino-250ml, croissant- 50g)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/25/63b1f588-ce58-4a9e-acdd-7bb9944fa452_e65edbd0-5da3-4c46-8b49-1aec96eec850.jpg",
//                   price: 24900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121370",
//                   name: "Cappuccino (R) + Choco Chunk Cookie",
//                   category: "Combos",
//                   description:
//                     "Delight in a rich combination of cappuccino and a choco chunk cookie. (cappuccino-250ml| cookie-20g)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2024/11/27/30708563-2b86-42a1-9705-ad48c02b37e5_249c5385-0124-4e16-a8ce-83d628a84b38.jpg",
//                   price: 14900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121371",
//                   name: "Americano (R) + Butter Croissant",
//                   category: "Combos",
//                   description:
//                     "Classic americano paired with a flaky butter croissant for a delightful snack. (americano-250ml| croissant-50g)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/25/2c11b0c6-8465-4f9d-a8d0-236134f3014d_a1d2e615-34bf-4795-bf33-09aed177eb30.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121372",
//                   name: "Hot Chocolate (R) + Choco Chunk Cookie",
//                   category: "Combos",
//                   description:
//                     "Cozy hot chocolate with a rich choco chunk cookie for a comforting treat. (hot chocolate-250ml| cookie-20g)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2024/11/27/4942630d-cc59-4824-9975-76007a81601d_1b096654-7fcd-48f1-8847-64b196bc40a2.jpg",
//                   price: 19900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121373",
//                   name: "Hot Chocolate (R) + Butter Croissant",
//                   category: "Combos",
//                   description:
//                     "Looking for a classic combo? you can't beat the timeless duo of a buttery croissant and rich hot chocolate. (hot chocolate -250ml| butter croissant-50g)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2025/8/25/b947ddbc-50e6-4169-9ed4-f6760a774aa7_65b3b674-47a6-4fd8-9e45-3ab7132b0dbd.jpg",
//                   price: 26900
//                 }
//               },
//             },
//             {
//               card: {
//                 info: {
//                   id: "178121374",
//                   name: "Signature Cold Coffee (R) & Butter Croissant",
//                   category: "Combos",
//                   description:
//                     "Refreshing cold coffee made with espresso & icecream  for creamy, balanced sweetness paired with with a flaky butter croissant for a perfect snack. (cold coffee-250ml| croissant-50g)",
//                   imageId:
//                     "FOOD_CATALOG/IMAGES/CMS/2024/11/27/32a0642a-7eed-476e-80d0-97bab4b75b0c_e2d18e1d-86dd-498e-a4ca-cbee82d00ac5.jpg",
//                   price: 26900
//                 }
//               },
//             },
//           ]
//         },
//       },
//     },
//   ],
// };

// const allProducts = [];
// product.cards.forEach(cardObj => {
//   const itemCards = cardObj.card.card.itemCards;
//   itemCards.forEach(item => {
//     const info = item.card.info;
//     if (info) {
//       allProducts.push({
//         id: info.id,
//         name: info.name,
//         category: info.category,
//         description: info.description,
//         imageId: info.imageId,
//         price: info.price
//       });
//     }
//   });
// });

// for (const prod of allProducts) {
//   await Product.create(prod);
//   console.log(`Saved: ${prod.name}`);
// }