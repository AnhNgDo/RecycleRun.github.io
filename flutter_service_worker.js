'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5dfbd9a2041f7765f5e78cf70c94e030",
"assets/AssetManifest.bin.json": "dbe3554746162a5a1f217653142f1942",
"assets/AssetManifest.json": "e15446ef0ed1e7c63ab6b7e92d844080",
"assets/assets/fonts/Press_Start_2P/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/images/backdrop.png": "d76bf257830aab94206161d92edbe2ec",
"assets/assets/images/banner_sprites.png": "9d8acf3d3a1cb9c6a74f62e383e93ac1",
"assets/assets/images/bin_falling.png": "be8540054ecd31a7f06abdc8b45cdf04",
"assets/assets/images/bin_jumping.png": "f83e16cf09fd5c7c240eebeb500410a8",
"assets/assets/images/bin_running.png": "452eb9ee389e037e1d65ba34b2b1ba0e",
"assets/assets/images/bin_running_00.png": "7103bfdf6f0d528830ed4afb80cdb51b",
"assets/assets/images/complete_level_01.png": "96c7892b504a57ad936728f9b485e85f",
"assets/assets/images/complete_level_02.png": "31d5875eb4a0747b51809c642247392b",
"assets/assets/images/complete_level_03.png": "bd8ba614a07967b7b4e0e631f35c9657",
"assets/assets/images/huds/clock.png": "d5e25001b780f45b8311df969e7ab756",
"assets/assets/images/huds/heart.png": "48597c8e6534019a4000625bf676cf3d",
"assets/assets/images/huds/heart_half.png": "8545094bbb64626b57131d336bd8b947",
"assets/assets/images/huds/recycle_symbol.png": "44dab74c4a262eec51fdb2940a53d91e",
"assets/assets/images/obstacles/ball_00.png": "53baf43e50fea5548e231accda8280c1",
"assets/assets/images/obstacles/ball_trail_00.png": "2b63a30e7f8f69fb126297ba61f44202",
"assets/assets/images/obstacles/obstacles.png": "4c2be265407411759540ae963d47f1e4",
"assets/assets/images/obstacles/trash_ball.png": "9ffd799b8816bb87a700c57c5065fcb0",
"assets/assets/images/obstacles/trash_large.png": "05f1694ec41132d1926be7c1b3d87e95",
"assets/assets/images/obstacles/trash_medium.png": "2d401f629dab5defa136c4dca2e2c8fa",
"assets/assets/images/obstacles/trash_small.png": "aa12a1e0f00ed871cd3612f5d1d10368",
"assets/assets/images/platforms/beach_platform_01.png": "68ccea9f7473ca4273f9c869997661d6",
"assets/assets/images/platforms/beach_platform_02.png": "62a27c2c197e0aa3bdfa7c9243e37725",
"assets/assets/images/platforms/beach_platform_03.png": "8d07573765f2a6193aaf583158165ff6",
"assets/assets/images/platforms/city_platform_01.png": "3450630dd1fe9115dafa4b43b6b97cc6",
"assets/assets/images/platforms/city_platform_02.png": "8f678ea61e6f4c275d73bf1578910152",
"assets/assets/images/platforms/city_platform_03.png": "eebb828401e41724c19e48e0f1f1dea7",
"assets/assets/images/platforms/town_platform_01.png": "1354f2958f6a8786dcc17e78063c971a",
"assets/assets/images/platforms/town_platform_02.png": "6f47b62b47800d544fb8b7d9564a8ae2",
"assets/assets/images/platforms/town_platform_03.png": "e2382dba191853be95470801df60dcc3",
"assets/assets/images/README.md": "542268c3df538d0ff84c881a2ca8019b",
"assets/assets/images/recyclable_items/bottle.png": "0cf1875acafd0bbdbcec867a622b4395",
"assets/assets/images/recyclable_items/can.png": "321c5f21c14f8641a6f8c48e3a407db5",
"assets/assets/images/recyclable_items/drink_bottle.png": "10117755caf2715264b37290c067dce3",
"assets/assets/images/recyclable_items/electronic_01.png": "0ae0faef06aa122a1a75d3972679e3eb",
"assets/assets/images/recyclable_items/electronic_02.png": "8e1fbb7dc6eaa4fc39cd4d469791e8eb",
"assets/assets/images/recyclable_items/electronic_03.png": "b02d46d5d88c18e0e6013fa1d5321da4",
"assets/assets/images/recyclable_items/electronic_04.png": "4f879c39dd1231fe5255fa3d43cb28be",
"assets/assets/images/recyclable_items/electronic_05.png": "2d50468b001abba0db978e94d3bbc029",
"assets/assets/images/recyclable_items/jar.png": "ae1f06916e64d9c755c92ad827cdae44",
"assets/assets/images/recyclable_items/paper_01.png": "defe4807306a44135c889de0ab032ce8",
"assets/assets/images/recyclable_items/paper_02.png": "31e54679a613ea747a55690bb29d8fc1",
"assets/assets/images/recyclable_items/paper_03.png": "3c2a85aba4aeb170b68120f4d33959cc",
"assets/assets/images/recyclable_items/paper_04.png": "13a755e0f5890f5a7def489c16a1c301",
"assets/assets/images/recyclable_items/paper_05.png": "2c385213768d47674ae47d98ed26c6c4",
"assets/assets/images/recyclable_items/recycle_items.png": "ba866dccf0c69305315edb0ef6d0da7e",
"assets/assets/images/recyclable_items/sauce_bottle.png": "8e315872292eaa8ff8e58fda955ac3e6",
"assets/assets/images/scenery/beach_ground.png": "3c6fbe23e823683a5fc72bf2c3d930c3",
"assets/assets/images/scenery/beach_horizon.png": "f1c9cf87391f1dadd8bc0b630a94a5c5",
"assets/assets/images/scenery/bluesky_background.png": "11e766fd24e010ff502006d8e3ec35dd",
"assets/assets/images/scenery/city_background.png": "9c931d42fbbecf6bc9e911705c03bb47",
"assets/assets/images/scenery/city_foreground.png": "9a38ce50c58ea5e3f95e3413ca5f9526",
"assets/assets/images/scenery/city_ground.png": "d9243f26c14ef5feb858df4148c32bb4",
"assets/assets/images/scenery/clouds.png": "e0dfcc6f83c9e30c3e3594b2595d545e",
"assets/assets/images/scenery/clouds_00.png": "16267d09300bfb284bc225f352757e1e",
"assets/assets/images/scenery/clouds_01.png": "dc5c0c464108e8a58d68393beaf07317",
"assets/assets/images/scenery/clouds_city.png": "4f9893a689dd41ee81754676f172c7e5",
"assets/assets/images/scenery/mountains_01.png": "af0477a832b570e0759c0b43ed8a9bf6",
"assets/assets/images/scenery/mountains_02.png": "50f6bcff770f67ddfd5d2d6339ca9957",
"assets/assets/images/scenery/town_ground.png": "ade41f2b1284aad4371eb9ee75c115d5",
"assets/assets/images/scenery/town_horizon.png": "b4453cddeb32e53c727b5a95f99eba5a",
"assets/assets/music/bit_forrest.mp3": "f330991a5bd6973c5d1167619319abd0",
"assets/assets/music/boss_theme.mp3": "c814865157b19e346984bc88ff215e0d",
"assets/assets/music/CREDITS.TXT": "384f4927d164a5b18ec60d2d2e8bee97",
"assets/assets/music/dungeon_theme.mp3": "90abecfcd039eee6003182f47c7af00c",
"assets/assets/music/free_run.mp3": "c700cf7861e33436a916cdf7e5da4e5b",
"assets/assets/music/intro_theme.mp3": "42bc2144057b69f7aa9cf0ea5a6a7b76",
"assets/assets/music/tropical_fantasy.mp3": "44bdafbd3982d2ba451f225294f56dff",
"assets/assets/sfx/click1.mp3": "10dfe538c54ddca1d967034637a37cbb",
"assets/assets/sfx/click2.mp3": "e7c23ca3c1bd7c9c3285c9e60f27504c",
"assets/assets/sfx/click3.mp3": "23f7ef1589277fc59d0b297db8d0297f",
"assets/assets/sfx/click4.mp3": "fc48c687051776935ee27782a6ee5648",
"assets/assets/sfx/damage1.mp3": "e73bde6e93a3754205a6960f994acf91",
"assets/assets/sfx/damage2.mp3": "3ae6d56c2fdff524875df5c956f62012",
"assets/assets/sfx/double_jump1.mp3": "58633df43115de841cf9235fccd64133",
"assets/assets/sfx/game_over.mp3": "9a6ebd59266412d4c124ef83f578c7cd",
"assets/assets/sfx/hit1.mp3": "52f15e8def2750b4220796d7dd749e18",
"assets/assets/sfx/hit2.mp3": "19e99975f122b67cb5e17bb5e04818da",
"assets/assets/sfx/jump1.mp3": "247686373bffc27c3962702465614ea8",
"assets/assets/sfx/README.md": "c2318c37838f1811dd8a00d1bd6220a8",
"assets/assets/sfx/score1.mp3": "f51ae86826ee34f92514fb8e4b027edc",
"assets/assets/sfx/score2.mp3": "f9494ae1fe1a9b78563b386acca66c2c",
"assets/assets/sfx/timeup.mp3": "1d45bcbe9075c5870db4fdc086d4b89f",
"assets/FontManifest.json": "e959a4020239da7dccbd2847bd89c10a",
"assets/fonts/MaterialIcons-Regular.otf": "d80e723688853477902bd28414a94505",
"assets/NOTICES": "9071581293d79179878340d4a7de4bdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/google_wallet/assets/ar_wallet_button_condensed.svg": "a4f4977e753024e30c90f8bf207a360f",
"assets/packages/google_wallet/assets/ar_wallet_button_primary.svg": "260159159e270d1415a1efa00c8a6a76",
"assets/packages/google_wallet/assets/az_wallet_button_condensed.svg": "3b4344df734bfe74a39de5fdce795367",
"assets/packages/google_wallet/assets/az_wallet_button_primary.svg": "90f2e2d3c4de0f883c99b4085b8fc866",
"assets/packages/google_wallet/assets/bg_wallet_button_condensed.svg": "cc28fc61d74c670c93639f27ecad2ea9",
"assets/packages/google_wallet/assets/bg_wallet_button_primary.svg": "de51e6a6a1a79f553362c81fcb115bf8",
"assets/packages/google_wallet/assets/br_wallet_button_condensed.svg": "2fd345513b4e4d9b46f11e8c9c915c4e",
"assets/packages/google_wallet/assets/br_wallet_button_primary.svg": "69034d0e4fbe96daa055f59f14b94397",
"assets/packages/google_wallet/assets/bs_wallet_button_condensed.svg": "f85ee9046ae15cc141d006d431e4753c",
"assets/packages/google_wallet/assets/bs_wallet_button_primary.svg": "7f26dc32009c3bdcdd0223922c7dab94",
"assets/packages/google_wallet/assets/by_wallet_button_condensed.svg": "a7662ba7cafbe23dcd4f84d61d50071d",
"assets/packages/google_wallet/assets/by_wallet_button_primary.svg": "deb42ee451e45251299dd61187fe7705",
"assets/packages/google_wallet/assets/ca_wallet_button_condensed.svg": "9b3e9a6746696c9989d7eb2d3ed7580d",
"assets/packages/google_wallet/assets/ca_wallet_button_primary.svg": "4b5de96fd0f9b295a9a79be8a8d0eae0",
"assets/packages/google_wallet/assets/cz_wallet_button_condensed.svg": "82fe8e3cdffa5356e0380543f4683b2c",
"assets/packages/google_wallet/assets/cz_wallet_button_primary.svg": "c7f8036327379bedddd0955644e2f252",
"assets/packages/google_wallet/assets/de_wallet_button_condensed.svg": "b168e7933f4041b4eeb6916d30410039",
"assets/packages/google_wallet/assets/de_wallet_button_primary.svg": "c4f083b8749b29cdb4fc0c897a4b5bac",
"assets/packages/google_wallet/assets/dk_wallet_button_condensed.svg": "6ee6ab67841ba870f31ec300d12f734e",
"assets/packages/google_wallet/assets/dk_wallet_button_primary.svg": "3f2440412e8583b501d527a8835d4675",
"assets/packages/google_wallet/assets/en_AU_wallet_button_condensed.svg": "f2ed7ab9b5e408cfecea7f932cd1e829",
"assets/packages/google_wallet/assets/en_AU_wallet_button_primary.svg": "2612eb82e79f677c975757d97ec2de52",
"assets/packages/google_wallet/assets/en_CA_wallet_button_condensed.svg": "ed7347971f3f38da63fa3a353fa1d1bf",
"assets/packages/google_wallet/assets/en_CA_wallet_button_primary.svg": "c7db284caf9fb7fadfe365e5e94584dd",
"assets/packages/google_wallet/assets/en_GB_wallet_button_condensed.svg": "d6395ad1b9b061acef26417a04477adf",
"assets/packages/google_wallet/assets/en_GB_wallet_button_primary.svg": "5e394579efa0e4d2462a3fa7c4a30324",
"assets/packages/google_wallet/assets/en_IN_wallet_button_condensed.svg": "f6388525ba6256bcddd814672d4389e5",
"assets/packages/google_wallet/assets/en_IN_wallet_button_primary.svg": "684e4081529340802d4d4942dc25d109",
"assets/packages/google_wallet/assets/en_SG_wallet_button_condensed.svg": "e17bc06ff808e9e4017702ac3d28c01e",
"assets/packages/google_wallet/assets/en_SG_wallet_button_primary.svg": "644d79276dddb41bab47f1f2864b62ae",
"assets/packages/google_wallet/assets/en_US_wallet_button_condensed.svg": "b7de62572ebbd02edb55b97fea662cda",
"assets/packages/google_wallet/assets/en_US_wallet_button_primary.svg": "942f89835971592cbf7d716aed8a00f5",
"assets/packages/google_wallet/assets/en_ZA_wallet_button_condensed.svg": "8b01291cd9e8bc9050d3cf4fa4a4dd60",
"assets/packages/google_wallet/assets/en_ZA_wallet_button_primary.svg": "5690da15159fda07619e638de45ea33d",
"assets/packages/google_wallet/assets/es_419_wallet_button_condensed.svg": "0cf21c6738ddff5ef4dff455f6a3350d",
"assets/packages/google_wallet/assets/es_419_wallet_button_primary.svg": "51c635c02b989718d25a946fd6221530",
"assets/packages/google_wallet/assets/es_ES_wallet_button_condensed.svg": "8f4092b9aeabeac6ba56b2b94c6b71ff",
"assets/packages/google_wallet/assets/es_ES_wallet_button_primary.svg": "79b4becce2a1cdfef82f154fe9a9af1c",
"assets/packages/google_wallet/assets/es_US_wallet_button_condensed.svg": "eca6d036063e600bbd4652fba5001917",
"assets/packages/google_wallet/assets/es_US_wallet_button_primary.svg": "408c67d702c409241b287933c716f5f9",
"assets/packages/google_wallet/assets/et_wallet_button_condensed.svg": "62b05af6deaa442b0a92772e5082f7d0",
"assets/packages/google_wallet/assets/et_wallet_button_primary.svg": "9b9851d9fa1d9c5d1ae43647647ad832",
"assets/packages/google_wallet/assets/fl_wallet_button_condensed.svg": "9d73c15223a8943abdf01f141ce5b6d4",
"assets/packages/google_wallet/assets/fl_wallet_button_primary.svg": "29121627c027f93a3065c7770b8de007",
"assets/packages/google_wallet/assets/fp_wallet_button_condensed.svg": "3e42d792fa586f7e9ac014d2a27992b5",
"assets/packages/google_wallet/assets/fp_wallet_button_primary.svg": "56f86f9710333ad0581f3a7d8ed3c657",
"assets/packages/google_wallet/assets/fr_CA_wallet_button_condensed.svg": "d9761af1d0998d0303c9079b37f99d62",
"assets/packages/google_wallet/assets/fr_CA_wallet_button_primary.svg": "0e6aad49ab8b6083566a128ee5a26bd2",
"assets/packages/google_wallet/assets/fr_FR_wallet_button_condensed.svg": "2b123f266da7715af1957203cb0d3b84",
"assets/packages/google_wallet/assets/fr_FR_wallet_button_primary.svg": "77e7479cbed3ac241182c4e603e47b79",
"assets/packages/google_wallet/assets/gr_wallet_button_condensed.svg": "6519be79b0460e47ad3bac4e5c76274e",
"assets/packages/google_wallet/assets/gr_wallet_button_primary.svg": "9e8c6cde53bc9a2dfb8173e9af6b3304",
"assets/packages/google_wallet/assets/he_wallet_button_condensed.svg": "997ad26fb4d19aa8026ce51b7bf89884",
"assets/packages/google_wallet/assets/he_wallet_button_primary.svg": "a6c9669b61eb02bcb3d24b9801986f54",
"assets/packages/google_wallet/assets/hr_wallet_button_condensed.svg": "2fcae7c3192a9669df73cb297f215542",
"assets/packages/google_wallet/assets/hr_wallet_button_primary.svg": "1ca3f09db38e1c2cc15f690d762d9180",
"assets/packages/google_wallet/assets/hu_wallet_button_condensed.svg": "f218c201a311f880b476984129fbfcd3",
"assets/packages/google_wallet/assets/hu_wallet_button_primary.svg": "52fe894a003f7327edba8170663ce21a",
"assets/packages/google_wallet/assets/hy_wallet_button_condensed.svg": "aed6e8e675a57fb66de5c87f2b1c4698",
"assets/packages/google_wallet/assets/hy_wallet_button_primary.svg": "23d9a60fcd91cbc4b8bc606255ba4f59",
"assets/packages/google_wallet/assets/id_wallet_button_condensed.svg": "590b3141d2d9adfd1c32bbc8426d96e3",
"assets/packages/google_wallet/assets/id_wallet_button_primary.svg": "ce5884c701d800ec94ef78d308db6e64",
"assets/packages/google_wallet/assets/is_wallet_button_condensed.svg": "255356758290070c55593aaf05c22f0f",
"assets/packages/google_wallet/assets/is_wallet_button_primary.svg": "cb3c716d27dc78c571bdbc9d160d671a",
"assets/packages/google_wallet/assets/it_wallet_button_condensed.svg": "e411485b5fb9adfbd0d258ef2efe39bf",
"assets/packages/google_wallet/assets/it_wallet_button_primary.svg": "7d37a300ec48815e7e728f727fe6dde7",
"assets/packages/google_wallet/assets/jp_wallet_button_condensed.svg": "03896b8a5dad9a42adb1bb6a7b428bd4",
"assets/packages/google_wallet/assets/jp_wallet_button_primary.svg": "3652b471a5eba0699a4a39321270b4a1",
"assets/packages/google_wallet/assets/ka_wallet_button_condensed.svg": "e50f3f95ec1969e6b0ea749f93561bc3",
"assets/packages/google_wallet/assets/ka_wallet_button_primary.svg": "fdf3c6f39bb30450fb408a13016e1575",
"assets/packages/google_wallet/assets/kk_wallet_button_condensed.svg": "21a39f7ee3011aa092e50336e7666aea",
"assets/packages/google_wallet/assets/kk_wallet_button_primary.svg": "a3d875aeed8ab306f7469460453273af",
"assets/packages/google_wallet/assets/ky_wallet_button_condensed.svg": "a4c963a8c278588302308c9adead05ad",
"assets/packages/google_wallet/assets/ky_wallet_button_primary.svg": "fbe55d976815113cd4954100a826504c",
"assets/packages/google_wallet/assets/lt_wallet_button_condensed.svg": "3f1ac0e6e13db1cf268dcd2f496c0039",
"assets/packages/google_wallet/assets/lt_wallet_button_primary.svg": "02728a3a766806a440286016b8b0d977",
"assets/packages/google_wallet/assets/lv_wallet_button_condensed.svg": "5e54397529c340c5a431abdefb823f24",
"assets/packages/google_wallet/assets/lv_wallet_button_primary.svg": "201e043ec36c0b812149eaa82563b47b",
"assets/packages/google_wallet/assets/mk_wallet_button_condensed.svg": "a5be0df87def78e495dd37e784f924e0",
"assets/packages/google_wallet/assets/mk_wallet_button_primary.svg": "d54b7d105274653feea7d815bde1cdef",
"assets/packages/google_wallet/assets/my_wallet_button_condensed.svg": "8630411b06e05adfc7e4ef285c55200f",
"assets/packages/google_wallet/assets/my_wallet_button_primary.svg": "b9c2a17d024811424f704b94a5221ba9",
"assets/packages/google_wallet/assets/nl_wallet_button_condensed.svg": "861f9e2bd43b92dbd6def9a07aa48631",
"assets/packages/google_wallet/assets/nl_wallet_button_primary.svg": "272a8c010e4fe8ddcbed3171d1f091b7",
"assets/packages/google_wallet/assets/no_wallet_button_condensed.svg": "0220c67b932537d17ba33e420abc0aea",
"assets/packages/google_wallet/assets/no_wallet_button_primary.svg": "ef1b1060bc300377b1a170c55435c797",
"assets/packages/google_wallet/assets/pl_wallet_button_condensed.svg": "61a3e3b97f4595f09a6ab97b7ed486bf",
"assets/packages/google_wallet/assets/pl_wallet_button_primary.svg": "0687e88f92f98b8363d0148c2b5b63d0",
"assets/packages/google_wallet/assets/pt_wallet_button_condensed.svg": "f352fa6b49d513011e86cff7cbcbabaf",
"assets/packages/google_wallet/assets/pt_wallet_button_primary.svg": "d1ee37067180bfe3d83e5cb190dfc44f",
"assets/packages/google_wallet/assets/ro_wallet_button_condensed.svg": "ad0791d56b6c874cbb82ff8c56bb15e9",
"assets/packages/google_wallet/assets/ro_wallet_button_primary.svg": "1491d7729e6c85fdc9c3a0a1b20e33f1",
"assets/packages/google_wallet/assets/ru_wallet_button_condensed.svg": "16138e745d66a58a7cb8cf845b10f29d",
"assets/packages/google_wallet/assets/ru_wallet_button_primary.svg": "c92edf4a0c610ef993e88c54a92bb9b4",
"assets/packages/google_wallet/assets/se_wallet_button_condensed.svg": "50a1f038bb8f299f697f41d55403f0a6",
"assets/packages/google_wallet/assets/se_wallet_button_primary.svg": "b7cbf672a7c76fa2b866db8c61872675",
"assets/packages/google_wallet/assets/sk_wallet_button_condensed.svg": "0d0b3bdce79456adc84f2031c584e53d",
"assets/packages/google_wallet/assets/sk_wallet_button_primary.svg": "9ebd9f4e90b7460edc2dabb62efe4a3c",
"assets/packages/google_wallet/assets/sl_wallet_button_condensed.svg": "9115210492785029107c6a2270ea6b81",
"assets/packages/google_wallet/assets/sl_wallet_button_primary.svg": "46d510bf1bf8017a12b828991f664c55",
"assets/packages/google_wallet/assets/sq_wallet_button_condensed.svg": "9564675bca05aefe7862d599824cea6f",
"assets/packages/google_wallet/assets/sq_wallet_button_primary.svg": "4f749b928b9e15c76add3ee9a32a986e",
"assets/packages/google_wallet/assets/sr_wallet_button_condensed.svg": "0621d013c3cb36393e2f5a10cb9ca695",
"assets/packages/google_wallet/assets/sr_wallet_button_primary.svg": "0998bd940c28a80ba68e9c5919cdd6b2",
"assets/packages/google_wallet/assets/th_wallet_button_condensed.svg": "54235a7d84eb3872470ab14822be8bb2",
"assets/packages/google_wallet/assets/th_wallet_button_primary.svg": "d8e936ddb250181ef216fadd70470b66",
"assets/packages/google_wallet/assets/tr_wallet_button_condensed.svg": "f53e5ac42034452ff2199c06feb2974d",
"assets/packages/google_wallet/assets/tr_wallet_button_primary.svg": "d384b3554e04e7e992d07c5e43d39dc4",
"assets/packages/google_wallet/assets/uk_wallet_button_condensed.svg": "a0e680dfdd829d8b264f3a57096a34cb",
"assets/packages/google_wallet/assets/uk_wallet_button_primary.svg": "863ea50d285999147c57cbb86350ede0",
"assets/packages/google_wallet/assets/uz_wallet_button_condensed.svg": "827febbc21a67ec1504b20d7cb68cb0f",
"assets/packages/google_wallet/assets/uz_wallet_button_primary.svg": "0fa3101925d940650aae990da99c013f",
"assets/packages/google_wallet/assets/vi_wallet_button_condensed.svg": "06b512e3f3f7aed1bf0525b54b77f53e",
"assets/packages/google_wallet/assets/vi_wallet_button_primary.svg": "9672cf033497f6730d7c3c374222718b",
"assets/packages/google_wallet/assets/zh_HK_wallet_button_condensed.svg": "5f806947f0c597698e358295dc063173",
"assets/packages/google_wallet/assets/zh_HK_wallet_button_primary.svg": "d76005c4492437c367ac349668fb6899",
"assets/packages/google_wallet/assets/zh_TW_wallet_button_condensed.svg": "69473bdf975d69a2a45a75484293899a",
"assets/packages/google_wallet/assets/zh_TW_wallet_button_primary.svg": "2978c5543b4c976988e0d0b32251a210",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "29fa6f970486ffd7a97fad431c283e45",
"favicon.png": "a6f1b4c28ee016b13ab498d3f69275fb",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a89e512df4ac63f7fcf3c5556feb8ed7",
"/": "a89e512df4ac63f7fcf3c5556feb8ed7",
"main.dart.js": "124dbc3e764d302ea6e6ae520c937bb7",
"manifest.json": "eae065ab96f638aeff1a23608f8b7ae7",
"version.json": "89f4f53e96c9565350ce06700adaf653"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
