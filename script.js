
// Image database with 150+ high-quality images
const imageDatabase = {
    nature: [
        // Mountains & Landscapes (25 images)
        { src: "https://i.pinimg.com/736x/97/ab/66/97ab66046ef6fec28524a20b14917b2d.jpg", title: "Mountain Lake Reflection", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/90/22/70/902270865a6678e38d53ae1bbd4d91b4.jpg", title: "Forest Path", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/be/23/6c/be236c0a21242335656115636c40c794.jpg", title: "Ocean Sunset", category: "Nature" },
        { src: "https://i.pinimg.com/736x/4e/90/3e/4e903e1bec11c209b0953935c62d6577.jpg", title: "Mountain Range", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/92/29/28/922928900046acf6a8a7e577e2078c88.jpg", title: "Alpine Lake", category: "Nature" },
        { src: "https://i.pinimg.com/736x/69/27/7e/69277ec988d48218a345e24104f9aeae.jpg", title: "Misty Forest", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/d4/51/d4/d451d45224a30047fd3c7fd1ba638f12.jpg", title: "Golden Wheat Field", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/4d/33/1d/4d331dd1f9603443d17f6116f93cff7c.jpg", title: "Tropical Beach", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/ee/68/af/ee68af34e70473725444724e6b5e161d.jpg", title: "Desert Dunes", category: "Nature" },
        { src: "https://i.pinimg.com/736x/14/78/0c/14780cd968be37109222911a687ce66d.jpg", title: "Snow Capped Peaks", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/14/7d/6e/147d6eda314e523b770648b692fe8a2e.jpg", title: "Crystal Clear Lake", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/be/17/4a/be174afa8ff34b79cfce38f802a08bc0.jpg", title: "Autumn Forest", category: "Nature" },
        { src: "https://i.pinimg.com/736x/1d/8e/1e/1d8e1eeec45907dd8d8afe0619b80425.jpg", title: "Waterfall Cascade", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/37/d3/9f/37d39f764f1dd1ba8bc4f6b1aaafdf5b.jpg", title: "Rocky Coastline", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/b4/34/3b/b4343b8e144825de7e60f074e29e0899.jpg", title: "Pine Forest", category: "Nature" },
        { src: "https://i.pinimg.com/736x/19/13/f0/1913f079261f5d890e1d746e2639f183.jpg", title: "Sunrise Over Hills", category: "Nature" },
        { src: "https://i.pinimg.com/736x/b7/1c/1c/b71c1c1a5d1cc6aa81617dadc91c373e.jpg", title: "Valley Vista", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/47/c3/95/47c395bb5c2f5cc4f03347a7ba84e00c.jpg", title: "Glacier Lake", category: "Nature" },
        { src: "https://i.pinimg.com/736x/3d/70/03/3d70033527816d3a39947927ce82dce6.jpg", title: "Foggy Morning", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/d9/8e/8b/d98e8b7fc938c1d34d514d721d7045aa.jpg", title: "Lavender Fields", category: "Nature" },
        { src: "https://i.pinimg.com/736x/05/3f/d3/053fd39708bf7b36944a76a3e4445b7e.jpg", title: "Coral Reef", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/6b/c1/bc/6bc1bca9d2192e3ba91274387656a10a.jpg", title: "Canyon Walls", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/f1/cf/38/f1cf3840a7e340959d8530ceda631489.jpg", title: "Icy Peaks", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/5f/02/8b/5f028b494b21a6734190126cffe29b33.jpg", title: "River Rapids", category: "Nature" },
        { src: "https://i.pinimg.com/1200x/b0/a8/57/b0a8572a0c8b035da4410a96edcca9fd.jpg", title: "Serene Lake", category: "Nature" }
    ],
    architecture: [
        // Buildings & Structures (30 images)
        { src: "https://i.pinimg.com/1200x/c8/c7/87/c8c78701eb857aba8a4acfd3eff1ea94.jpg", title: "Modern Skyscraper", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/a0/64/6b/a0646b29c189502aa6b089ddd7b30f3c.jpg", title: "City Skyline", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/3b/d5/6e/3bd56eca9fbafa48bb077ea96d12f05f.jpg", title: "Historic Bridge", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/47/eb/64/47eb64b5173bff455d4668511fe25035.jpg", title: "Glass Building", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/32/07/b3/3207b310efe1d761d0d2d5a5945cf23b.jpg", title: "Gothic Cathedral", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/6f/4a/37/6f4a370006c522ba4242842cabeab962.jpg", title: "Modern Museum", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/8d/6f/15/8d6f15ec5ccac0c4e383111d3ae85833.jpg", title: "Spiral Staircase", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/c5/f1/bb/c5f1bb3e38b7c3160c4b543b5d25c162.jpg", title: "Urban Architecture", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/1b/91/82/1b91828b620976b2bb7a0b18574fb536.jpg", title: "Classical Building", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/cf/88/b3/cf88b3c5431ce5a9be44b76421302804.jpg", title: "Futuristic Design", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/e8/b7/31/e8b731450cb397f6eb0396bdf9131e23.jpg", title: "Corporate Tower", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/3b/4b/90/3b4b90908189d0efcf396a71e4800d02.jpg", title: "Downtown District", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/36/0c/1d/360c1d43fba4f8c49a6eb07d0341a853.jpg", title: "Suspension Bridge", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/8a/bf/02/8abf0267ae0ffd93fb89c99122dc1ba5.jpg", title: "Glass Facade", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/93/76/f4/9376f4b4c26430ed85b58ac708329866.jpg", title: "Ancient Architecture", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/51/48/6d/51486d5cad12cf741666a3604f698a97.jpg", title: "Contemporary Art Center", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/f8/8f/bc/f88fbc180c27df2c9375c587bb708607.jpg", title: "Metropolitan View", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/58/bb/9b/58bb9b349187ebc7cac29c8f50e857f2.jpg", title: "Historic Facade", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/01/1d/1b/011d1b73069da0637f7e71ae77e00865.jpg", title: "Avant-garde Structure", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/d7/11/6d/d7116dc7c00a05e82cde3a06a77d57d1.jpg", title: "Steel and Glass", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/fd/e3/60/fde3600fcbb6f43c3785e294c237b3b0.jpg", title: "Urban Landscape", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/54/41/a2/5441a232f96ec8d3d5142e351d9d6b8e.jpg", title: "Engineering Marvel", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/44/68/c0/4468c0db01512218cb0a1fccd80d6a5b.jpg", title: "Reflective Surfaces", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/bf/9a/37/bf9a374017243ec247fbc41d04fe10e4.jpg", title: "Timeless Design", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/3a/df/eb/3adfebb7d06118e4557fef7cfb334e05.jpg", title: "Innovative Space", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/2c/68/07/2c6807b256a1e7a360026098f21defd7.jpg", title: "Curved Architecture", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/41/e3/c3/41e3c370fb56341ff074afced71fce00.jpg", title: "City Geometry", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/0c/6c/0f/0c6c0fc070bea0f43234b3776112018b.jpg", title: "Architectural Heritage", category: "Architecture" },
        { src: "https://i.pinimg.com/736x/a1/9e/02/a19e02d6fb4968d07d67f2b797af1da5.jpg", title: "Modern Masterpiece", category: "Architecture" },
        { src: "https://i.pinimg.com/1200x/c8/c7/87/c8c78701eb857aba8a4acfd3eff1ea94.jpg", title: "Modern Skyscraper", category: "Architecture" }
    ],
    portrait: [
        // People & Portraits (30 images)
        { src: "https://i.pinimg.com/736x/78/7f/ce/787fcece237d38ed04fec991cd3d062b.jpg", title: "Professional Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/01/c3/48/01c348103f2de6bf3b03ed345b8421ab.jpg", title: "Street Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/1200x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg", title: "Artistic Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/40/6b/06/406b06275d5a2df9cf58f0c0a0429a6c.jpg", title: "Business Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/d3/0a/23/d30a23277168271766c96ad551cc21c5.jpg", title: "Creative Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/34/bc/75/34bc755a3eba1a72b757706655e7f29d.jpg", title: "Outdoor Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/5b/f8/06/5bf806ee66e5c5fd22402e9813bb8825.jpg", title: "Fashion Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/1200x/a3/f2/4a/a3f24a9145cb872c8a5e538e58b064b3.jpg", title: "Studio Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/dc/41/b7/dc41b7d6c9923f484e72361f0a9e4e19.jpg", title: "Natural Light Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/98/cc/96/98cc96fa8129d7f59ebec8e7d91eb846.jpg", title: "Candid Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/27/a4/4d/27a44d00384998e7bdfe8fd0be9a44a6.jpg", title: "Executive Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/f3/e7/c0/f3e7c08717f964391b5aeeabd287dffe.jpg", title: "Urban Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/81/77/ea/8177eab08252ad0c3702dfb6fecafa5a.jpg", title: "Dramatic Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/1200x/5b/22/70/5b2270793d4338f8bc8ad13466867d64.jpg", title: "Corporate Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/0e/49/c9/0e49c9080bc88b6c575caaca217f8908.jpg", title: "Lifestyle Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/f0/c2/e8/f0c2e8e318ae8c9b0473a1590d77815e.jpg", title: "Environmental Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/1200x/50/3b/8d/503b8d8e9f092ade939cc8cdb54c179e.jpg", title: "Editorial Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/b2/dc/af/b2dcaf874524e44b1c3abb2048dda61c.jpg", title: "Classic Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/0c/89/da/0c89da65a004e4f412a86eb5cde33adb.jpg", title: "Contemporary Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/01/f3/c7/01f3c71ba83d09b0704ede78c1da2ceb.jpg", title: "Spontaneous Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/32/7c/82/327c8218be2edd353cf0398d9b886dce.jpg", title: "Headshot Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/17/f5/bd/17f5bd1832efe53a93135e21cbd128da.jpg", title: "Character Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/58/66/4b/58664b664102119eefdca868d7770958.jpg", title: "Expressive Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/77/fd/aa/77fdaac4afd5e8da46936e9490fdad06.jpg", title: "Formal Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/75/b5/2a/75b52a1d81e6a976ad994c5d9a117674.jpg", title: "Casual Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/87/eb/70/87eb700959fd8a0436ce9755840f5f3a.jpg", title: "Adventure Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/48/ee/fa/48eefa382feac184f145bbdc2ca34ed7.jpg", title: "Glamour Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/a7/cc/79/a7cc79d1f30c53c9dbcb75ad7bc31244.jpg", title: "Timeless Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/736x/2d/63/3c/2d633cb84ce71f376ba2534a67f06eff.jpg", title: "Authentic Portrait", category: "Portrait" },
        { src: "https://i.pinimg.com/1200x/18/e7/3c/18e73c33ef28a94a3260345355ba43d5.jpg", title: "Genuine Portrait", category: "Portrait" }
    ],
    abstract: [
        // Abstract & Artistic (30 images)
        { src: "https://i.pinimg.com/1200x/f9/c3/13/f9c313f33f12c4480458c64c587d1d78.jpg", title: "Color Waves", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/7f/69/e2/7f69e206e8c223e690a931c8b8cb1622.jpg", title: "Geometric Patterns", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/c5/20/a0/c520a00ff12e33fbf99d92b5ed8619e6.jpg", title: "Light Trails", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/87/df/3b/87df3be1d3370a80e5db8deb3fcc49fb.jpg", title: "Fluid Motion", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/20/ea/06/20ea06857bb2b648223c445e7b21c391.jpg", title: "Digital Art", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/b8/28/ad/b828ad6f15354ebe759249d77a447a35.jpg", title: "Color Explosion", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/ea/6e/17/ea6e1799bcb138d5eb5884c665f99b34.jpg", title: "Mathematical Beauty", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/da/a9/74/daa974c38e7583076555681378a9d46e.jpg", title: "Organic Shapes", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/97/b4/81/97b4813e1854faadff4aff451c50204f.jpg", title: "Neon Dreams", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/86/1c/23/861c23634ca91c716d2e8522120cd470.jpg", title: "Prismatic Light", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/4f/d1/d4/4fd1d42036994274fd7031958288b6bc.jpg", title: "Fractal Patterns", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/0f/43/fd/0f43fd347b74639142b35de91c1cea95.jpg", title: "Liquid Art", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/c1/f3/22/c1f322f32899ad2ca2f8f19e812cab0f.jpg", title: "Energy Flow", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/af/6d/e6/af6de686d25267c13158cc91c6b8e607.jpg", title: "Spectrum Dance", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/6a/74/7e/6a747e37de4336bd6a9e305d1a2f35d0.jpg", title: "Symmetrical Chaos", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/1d/a8/f9/1da8f9061c650d29ed45b2a95dbcb318.jpg", title: "Flowing Forms", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/f0/b5/3c/f0b53c2554c4bdb454d083ad2612574e.jpg", title: "Luminous Paths", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/2e/95/9a/2e959a6cc725a3bd6c2c0c6aca819be2.jpg", title: "Chromatic Harmony", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/88/7c/aa/887caa5f11c5256a428ed484bc30e040.jpg", title: "Angular Dynamics", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/c0/6b/18/c06b18534d28db4fcc89b4a53d018e47.jpg", title: "Ethereal Movements", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/03/56/48/035648f7ba8d26fac127a3da1d746235.jpg", title: "Radiant Beams", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/61/61/5d/61615dd1a0dfcb494271093c1bbe4d7e.jpg", title: "Vibrant Swirls", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/ce/38/50/ce3850209dba7d06a7996ca12dbf88cc.jpg", title: "Crystalline Structure", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/1c/bb/a1/1cbba1b2cebb764129130a326de353cc.jpg", title: "Fluid Dynamics", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/59/39/88/5939884a1cb5fa4d58c5caa81a84d8c4.jpg", title: "Electric Dreams", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/19/16/f2/1916f22f9fdbc7cda5c520d4899d31c0.jpg", title: "Rainbow Cascade", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/7b/18/83/7b188361536b9b9dd19afd2e2d0a0aea.jpg", title: "Geometric Symphony", category: "Abstract" },
        { src: "https://i.pinimg.com/1200x/9e/0f/8b/9e0f8bdb54aa986b244d36ac9da6d2d2.jpg", title: "Morphing Shapes", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/13/22/18/13221861b1ea5635232363746a4a5f9c.jpg", title: "Cosmic Energy", category: "Abstract" },
        { src: "https://i.pinimg.com/736x/97/c4/cb/97c4cb1e827cbd41124632ffa84eca4b.jpg", title: "Infinite Spectrum", category: "Abstract" }
    ],
    street: [
        // Street Photography (35 images)
        { src: "https://i.pinimg.com/736x/d0/e9/a2/d0e9a20ef45446cfc2683eeded734d7c.jpg", title: "City Life", category: "Street" },
        { src: "https://i.pinimg.com/736x/d0/13/9c/d0139ca3cc6d1217272c4bd3c9a616e3.jpg", title: "Urban Movement", category: "Street" },
        { src: "https://i.pinimg.com/1200x/a3/84/d9/a384d98ba6681461f07c0ed2c173eb04.jpg", title: "Street Corner", category: "Street" },
        { src: "https://i.pinimg.com/736x/95/83/a0/9583a084c48508c56fc0f6833c83d283.jpg", title: "Night Streets", category: "Street" },
        { src: "https://i.pinimg.com/1200x/4c/8b/e4/4c8be4dd6a2ca834100dc236ab8332f5.jpg", title: "Market Scene", category: "Street" },
        { src: "https://i.pinimg.com/1200x/b5/16/e4/b516e46d09cde9950a1f0c8c2c62723e.jpg", title: "Public Space", category: "Street" },
        { src: "https://i.pinimg.com/1200x/8b/ea/c8/8beac8f0b638de293c9883b05fd57f79.jpg", title: "Pedestrian Life", category: "Street" },
        { src: "https://i.pinimg.com/1200x/93/8b/95/938b9590ff7598e312af3846f3e212b6.jpg", title: "Downtown Energy", category: "Street" },
        { src: "https://i.pinimg.com/736x/4f/d5/2e/4fd52e126ef8f399d6e0882755704b11.jpg", title: "Rush Hour", category: "Street" },
        { src: "https://i.pinimg.com/1200x/eb/4b/2e/eb4b2e43337638f6e123d207b82bf3be.jpg", title: "Street Art", category: "Street" },
        { src: "https://i.pinimg.com/736x/a4/f3/76/a4f376a978ca241a56a908b41c2b6685.jpg", title: "Neon Nights", category: "Street" },
        { src: "https://i.pinimg.com/1200x/24/26/5c/24265cf093eee3078e9f84d8babee835.jpg", title: "Local Culture", category: "Street" },
        { src: "https://i.pinimg.com/1200x/50/58/10/505810de8276247da12599ccaf3b2984.jpg", title: "Urban Architecture", category: "Street" },
        { src: "https://i.pinimg.com/736x/e7/8d/5d/e78d5d91d2e9dd20805ff0389c724c9e.jpg", title: "City Rhythm", category: "Street" },
        { src: "https://i.pinimg.com/736x/09/ad/d5/09add515add3f2d6c309ee31424a472e.jpg", title: "Metropolitan Pulse", category: "Street" },
        { src: "https://i.pinimg.com/1200x/25/8e/22/258e2249e26f877f81aea85fed1d428f.jpg", title: "Traffic Flow", category: "Street" },
        { src: "https://i.pinimg.com/1200x/ef/c6/98/efc69858dbf914f8269676bd2ea0a2f6.jpg", title: "Alley Stories", category: "Street" },
        { src: "https://i.pinimg.com/736x/b2/30/1d/b2301d96401694e0eefa363554b2fd3a.jpg", title: "After Dark", category: "Street" },
        { src: "https://i.pinimg.com/1200x/36/5d/5d/365d5d582967bfa3034439963eae7b7f.jpg", title: "Street Vendors", category: "Street" },
        { src: "https://i.pinimg.com/1200x/5d/a2/55/5da255814066a957f73dfb379d3c3415.jpg", title: "Plaza Gathering", category: "Street" },
        { src: "https://i.pinimg.com/1200x/fc/a0/26/fca026c1ec9a3f892e2fe0f295b0f69f.jpg", title: "Crosswalk Moment", category: "Street" },
        { src: "https://i.pinimg.com/736x/11/c7/ab/11c7ab2112eed5ec4955966f775a367e.jpg", title: "Skyline View", category: "Street" },
        { src: "https://i.pinimg.com/1200x/ea/cf/23/eacf23c9a8f8b50c0f4f7cf52eb9ab33.jpg", title: "Motion Blur", category: "Street" },
        { src: "https://i.pinimg.com/1200x/7f/a7/62/7fa762d72f78c9e923ee9297ecfab4b3.jpg", title: "Urban Texture", category: "Street" },
        { src: "https://i.pinimg.com/736x/c3/35/6f/c3356fe371d27255751f5ef34a3ccd74.jpg", title: "City Lights", category: "Street" },
        { src: "https://i.pinimg.com/1200x/c7/b0/f9/c7b0f905e7f9e683a38a5d71dead6cc7.jpg", title: "Street Festival", category: "Street" },
        { src: "https://i.pinimg.com/736x/5b/4e/df/5b4edf991f8c4d90717a7146db3ac8b2.jpg", title: "Public Art", category: "Street" },
        { src: "https://i.pinimg.com/736x/b1/8b/f7/b18bf7b3cd106412c81d798939b2c58f.jpg", title: "Commuter Rush", category: "Street" },
        { src: "https://i.pinimg.com/1200x/f3/b6/64/f3b664b712cd8f5a17007eeab09376db.jpg", title: "Urban Stories", category: "Street" },
        { src: "https://i.pinimg.com/1200x/85/eb/a5/85eba5788de43361f8b5a0d9e5494f7e.jpg", title: "Street Photography", category: "Street" },
        { src: "https://i.pinimg.com/736x/a3/42/f8/a342f8b607743d8dfb5ac97f8dce5484.jpg", title: "City Chronicles", category: "Street" },
        { src: "https://i.pinimg.com/736x/7e/15/f1/7e15f1c350ac74e93d91fb590ebb1fb8.jpg", title: "Evening Glow", category: "Street" },
        { src: "https://i.pinimg.com/1200x/0d/20/dc/0d20dc9f60ce90ebb309bec7b1f1c731.jpg", title: "Street Culture", category: "Street" },
        { src: "https://i.pinimg.com/1200x/9d/84/ff/9d84ff03a53efc018518c942e62564bc.jpg", title: "Urban Landscape", category: "Street" },
        { src: "https://i.pinimg.com/1200x/94/7a/20/947a20350d4b45995451d9b269bda564.jpg", title: "City Moments", category: "Street" }
    ]
};

class ProfessionalGallery {
    constructor() {
        this.currentImageIndex = 0;
        this.filteredImages = [];
        this.allImages = [];
        this.isLightboxOpen = false;
        this.loadedImages = 0;
        this.totalImages = 0;
        this.init();
    }

    init() {
        this.calculateTotalImages();
        this.loadImages();
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.updateCounts();
        this.hideLoadingOverlay();
    }

    calculateTotalImages() {
        this.totalImages = Object.values(imageDatabase).reduce((total, category) => total + category.length, 0);
        console.log(`Total images in database: ${this.totalImages}`);
    }

    loadImages() {
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.innerHTML = '';

        // Combine all images from all categories
        const allImageData = [];
        Object.keys(imageDatabase).forEach(category => {
            allImageData.push(...imageDatabase[category]);
        });

        // Shuffle images for better visual distribution
        const shuffledImages = this.shuffleArray([...allImageData]);

        shuffledImages.forEach((imageData, index) => {
            const galleryItem = this.createGalleryItem(imageData, index);
            galleryGrid.appendChild(galleryItem);
        });

        this.allImages = Array.from(document.querySelectorAll('.gallery-item'));
        this.filteredImages = [...this.allImages];
        
        console.log(`Loaded ${this.allImages.length} gallery items`);
        this.updateVisibleCount();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    createGalleryItem(imageData, index) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in-up';
        galleryItem.dataset.category = imageData.category.toLowerCase();
        
        galleryItem.innerHTML = `
            <img src="${imageData.src}" alt="${imageData.title}" data-title="${imageData.title}" data-category="${imageData.category}" loading="lazy">
            <div class="gallery-overlay">
                <div class="overlay-content">
                    <i class="fas fa-search-plus overlay-icon"></i>
                    <div class="overlay-title">${imageData.title}</div>
                    <div class="overlay-category">${imageData.category}</div>
                </div>
            </div>
        `;

        // Add click event listener
        galleryItem.addEventListener('click', (e) => {
            e.preventDefault();
            this.openLightbox(index);
        });

        // Add image load event listener
        const img = galleryItem.querySelector('img');
        img.addEventListener('load', () => {
            this.loadedImages++;
            this.updateLoadingProgress();
        });

        img.addEventListener('error', () => {
            console.error('Failed to load image:', imageData.src);
            img.style.opacity = '0.5';
            img.alt = 'Image failed to load';
        });

        return galleryItem;
    }

    updateLoadingProgress() {
        const progress = (this.loadedImages / this.totalImages) * 100;
        console.log(`Loading progress: ${progress.toFixed(1)}%`);
    }

    hideLoadingOverlay() {
        setTimeout(() => {
            const loadingOverlay = document.getElementById('loading-overlay');
            if (loadingOverlay) {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 300);
            }
        }, 1000);
    }

    updateCounts() {
        const counts = {
            all: this.totalImages,
            nature: imageDatabase.nature.length,
            architecture: imageDatabase.architecture.length,
            portrait: imageDatabase.portrait.length,
            abstract: imageDatabase.abstract.length,
            street: imageDatabase.street.length
        };

        Object.keys(counts).forEach(category => {
            const countElement = document.getElementById(`${category}-count`);
            if (countElement) {
                countElement.textContent = counts[category];
            }
        });

        // Update hero stats
        const totalImagesElement = document.getElementById('total-images');
        if (totalImagesElement) {
            totalImagesElement.textContent = `${this.totalImages}+`;
        }
    }

    updateVisibleCount() {
        const visibleImages = this.filteredImages.filter(item => 
            item.style.display !== 'none'
        ).length;
        
        const visibleCountElement = document.getElementById('visible-count');
        if (visibleCountElement) {
            visibleCountElement.textContent = visibleImages;
        }
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterImages(e.target.closest('.filter-btn').dataset.filter);
            });
        });

        // Lightbox controls
        document.getElementById('lightbox-close').addEventListener('click', (e) => {
            e.preventDefault();
            this.closeLightbox();
        });

        document.getElementById('lightbox-prev').addEventListener('click', (e) => {
            e.preventDefault();
            this.previousImage();
        });

        document.getElementById('lightbox-next').addEventListener('click', (e) => {
            e.preventDefault();
            this.nextImage();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Click outside to close lightbox
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });

        // Prevent image dragging
        document.addEventListener('dragstart', (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Observe all gallery items
        setTimeout(() => {
            document.querySelectorAll('.fade-in-up').forEach(el => {
                observer.observe(el);
            });
        }, 100);
    }

    filterImages(category) {
        console.log(`Filtering by category: ${category}`);
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${category}"]`).classList.add('active');

        // Filter and animate images
        this.allImages.forEach((item, index) => {
            const itemCategory = item.dataset.category;
            const shouldShow = category === 'all' || itemCategory === category;
            
            if (shouldShow) {
                setTimeout(() => {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(30px) scale(0.8)';
                    
                    setTimeout(() => {
                        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                }, index * 50);
            } else {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '0';
                item.style.transform = 'translateY(-20px) scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });

        // Update filtered images array
        setTimeout(() => {
            this.filteredImages = category === 'all' 
                ? [...this.allImages]
                : this.allImages.filter(item => 
                    item.dataset.category === category && 
                    item.style.display !== 'none'
                );
            
            this.updateVisibleCount();
            console.log(`Filtered to ${this.filteredImages.length} images`);
        }, 500);
    }

    openLightbox(clickedIndex) {
        console.log(`Opening lightbox for image ${clickedIndex}`);
        
        // Find the clicked item in the current filtered set
        const clickedItem = this.allImages[clickedIndex];
        this.currentImageIndex = this.filteredImages.indexOf(clickedItem);
        
        if (this.currentImageIndex === -1) {
            console.log('Image not found in filtered set, using all images');
            this.currentImageIndex = clickedIndex;
            this.filteredImages = [...this.allImages];
        }

        const img = this.filteredImages[this.currentImageIndex].querySelector('img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxCategory = document.getElementById('lightbox-category');

        // Set image and info
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = img.dataset.title || img.alt;
        lightboxCategory.textContent = img.dataset.category || '';

        // Show lightbox
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isLightboxOpen = true;

        this.updateNavigationButtons();
        console.log(`Lightbox opened. Current index: ${this.currentImageIndex}`);
    }

    closeLightbox() {
        console.log('Closing lightbox');
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.isLightboxOpen = false;
    }

    previousImage() {
        if (this.filteredImages.length <= 1) return;
        
        this.currentImageIndex = this.currentImageIndex > 0 
            ? this.currentImageIndex - 1 
            : this.filteredImages.length - 1;
        
        this.updateLightboxImage();
        console.log(`Previous image. New index: ${this.currentImageIndex}`);
    }

    nextImage() {
        if (this.filteredImages.length <= 1) return;
        
        this.currentImageIndex = this.currentImageIndex < this.filteredImages.length - 1 
            ? this.currentImageIndex + 1 
            : 0;
        
        this.updateLightboxImage();
        console.log(`Next image. New index: ${this.currentImageIndex}`);
    }

    updateLightboxImage() {
        const img = this.filteredImages[this.currentImageIndex].querySelector('img');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxCategory = document.getElementById('lightbox-category');

        // Add fade effect
        lightboxImg.style.opacity = '0.5';
        lightboxImg.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxTitle.textContent = img.dataset.title || img.alt;
            lightboxCategory.textContent = img.dataset.category || '';
            
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 200);

        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');
        
        const hasMultipleImages = this.filteredImages.length > 1;
        prevBtn.style.opacity = hasMultipleImages ? '1' : '0.3';
        nextBtn.style.opacity = hasMultipleImages ? '1' : '0.3';
        prevBtn.style.pointerEvents = hasMultipleImages ? 'auto' : 'none';
        nextBtn.style.pointerEvents = hasMultipleImages ? 'auto' : 'none';
    }

    handleKeyboard(e) {
        if (!this.isLightboxOpen) return;

        switch(e.key) {
            case 'Escape':
                e.preventDefault();
                this.closeLightbox();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.previousImage();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextImage();
                break;
        }
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Professional Gallery with 150+ images...');
    new ProfessionalGallery();
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    // Observe images for lazy loading
    setTimeout(() => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }, 1000);
}
