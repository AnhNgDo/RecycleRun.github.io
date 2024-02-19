'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "de0afeaf2d9bcd9644dcb602c0f281f2",
".git/config": "da04c68f635ce14a173b37db537abddb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "668b096f7be8b3b463c5a2f67fb3410a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2bfcbe70ebf00a88282e9447445adc52",
".git/logs/refs/heads/main": "497acf96b4c63ffdb09691aa1b76dedc",
".git/logs/refs/remotes/origin/main": "9f7fa0cdbcadf94060296b141b75f1ac",
".git/objects/02/1f79ca75257f86b4e68f8574ce7e0f181e3caf": "3507597037c54da7e6ab064592c87076",
".git/objects/02/33f6c7cbb33ac522c25a3fea15997c4c3e85b1": "cd0f25ebd6c8d84e80c021c132c55570",
".git/objects/02/f5351909b83038d51cad31b8f88d8d425e3ff8": "84d25f301cbb47aeb8386208f13f1e57",
".git/objects/03/7f638b13a67cdd6c4370a182af26fb0034d2a0": "e4f4bbf851e5eae4c4e4c14cecbe1c5d",
".git/objects/04/267e929d53627c0f56dde4ed3d509b4dae440f": "cb2aff86745af5bd3d445ee2220ca035",
".git/objects/04/8a84f4e87312221b762a98a67ddcbf301c7321": "bb78e016b44bedd095addd1976d416a7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/ab10ad49c6916a40a8d119b4f6ca37bb968a97": "4fee74dfbc624257dcc4d4e888d08e3f",
".git/objects/09/daf5399ba40afeec66c9f4cae855e6f6a334fc": "b731de326873e5ecf2ef293a2b4ddc7f",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/d1efffe48b31dc0e3008054b80358a4d279d0d": "16f7dfd00f7024b220d70360c92d55bc",
".git/objects/0d/4e312882bfce16f27cee2575fb9fc93015cbe8": "79a668436519ee16b14323942eb93329",
".git/objects/0d/8ce0053b80ef54423662cd5ffc962c16fa8283": "6795803b6b7916db3f6d94c01d721cee",
".git/objects/0e/5cdb6045c3def03488e7a43b451ff056ccdeff": "e215fc51096adc0c6821420d1de4d04f",
".git/objects/0f/3ac515ae00fe7c1201c27c5d0f9867ccc7951d": "2f76e03f3bf6427693169821e28f5753",
".git/objects/0f/9e219fea025e018755f53ba7fc124ad9a195fc": "57ffdc547fb45dc50d776301cae7b48e",
".git/objects/10/9c254ce9ab2f751971258c108ff7eae067ea4c": "ed780859a5f94f56086f2916fea36140",
".git/objects/11/0236f8c89667445189ce24901b39701e145877": "2ae328afbc4f22a29521dcc3cea39d81",
".git/objects/11/2a4ac4d706ed1c3202bf3705387d1ae5fa71d0": "d07da1f8745ea10b0b143bae086cb078",
".git/objects/12/b6da0989ab56d70651b5d0741d0ba7fe7f7639": "fc2c40fb0c09464bdd7cc105bd7a6f8f",
".git/objects/14/283226757b42780fddc75ecf79474199224462": "c59a274e21c14909da7a9eaf1afe8e67",
".git/objects/14/e1c2993939aa7c120a78f786d60d1940289d20": "de9c1f7e7b37e5c5fe6fbd0157c1087d",
".git/objects/16/237c80359943d80726ffc6d0f0f7323078d62e": "8b9de09124b7b126d55dc18673b435ef",
".git/objects/16/fd82d5d6d9d2b64106260622fbb5c4731e309f": "9ed47a5642fdc883f4f1018ed2c12b38",
".git/objects/17/af76a3abee6d267fa92fa9f6094a9e4154199f": "b44173a2ef02071b42dcd040b1bdbb0c",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1b/86b90daae8d00405c983a024fbf3775934b7c2": "f355ef2985273733af78617a2ae8daa1",
".git/objects/1d/3f242670754c418cab3da951c080246423e1e0": "a87168f4492e6677a0cf6674f5c435d1",
".git/objects/1e/4694e38f3515b9df542cb366ebd03189edad66": "882cdfd4cf5ed8dfb10548e5b3e5fc74",
".git/objects/1f/7543461e511dbe6ead6c53d06b7f44d9bb47a6": "732c19c1ac86300b0263995322cacfe5",
".git/objects/1f/d0f16159d220060d30481528c3fed50852bd10": "dac68dcf2718a37ac64aeced290f8afb",
".git/objects/20/179bf4d367a19239a1e22407be6c89898fdf7d": "e2c3c5e68979fde31285574cf6e95239",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3c4dc711e6438c8c344673c84e81596968df5e": "d42309d81e41b88fb93e65336997252a",
".git/objects/22/1c966801e88de851db181d13ab955e74a0258d": "6c12880d43425b09058d6b7748c5902c",
".git/objects/22/4091342ef6610a34328d934c5313fa6693efb9": "3844fe5db92a8e0757ac43facefa9818",
".git/objects/23/1b01147a1ef524576f6ca0261acb1247aeaec4": "da0607187af6d36455378d2067cfbcd8",
".git/objects/24/42affbf6570d23c0b2b270cca8d49535df27bf": "538d932d1b9806e9100542b30c19db99",
".git/objects/24/815ee159e16d9881dee1926faf01e18beb37ea": "eca4b83d242bbf98d6069e05e9e3f86e",
".git/objects/25/f2037f51ac22e1ca8d7ffeffea9e8d14cc9fd8": "b36a1cf684b273dc1a907638efb802e6",
".git/objects/26/39cc85c067c9f1d155ba0dfb8844fe9269ffd7": "45f952acec65eb65aea7b6dc3071ba13",
".git/objects/26/55dc608edf9fe0fbe7742ab79cd7fbc03fd7e8": "4b82d4a147a7affefda586e3235afe7e",
".git/objects/27/386f7d1e718049f8ec3d6c91f324ac99e98656": "502a56e36b8f83a330f817f374dc4f28",
".git/objects/27/3a2466b992d1eee2723a3332862df9c4ba10f2": "e05a5e580b1b5d2512ce4cdabed5d2a6",
".git/objects/29/68c3126931cd91dc51a2cc6222e1b9a2fc24ed": "0e7b3f3b77d953b77f5e3018692e7e48",
".git/objects/2c/6bf1e2bee049e03a11b959e1e4ccf1d2825e9b": "e98d15082b67a6fa423a5336c2710977",
".git/objects/2f/c215ef27d28661723837ff06e237b10cea662c": "5672ccf5679bd016929780fe03067fd3",
".git/objects/32/52c723ad7a99c3fcb7c1855e07c259bf01543b": "416f1aa1ea38f94a3c7a16ac513d2f19",
".git/objects/37/0f7e45ba0f557c9e13922c5349fe1346033c54": "6c01ccc81902b95cf2b338b68f952b50",
".git/objects/38/669c6729b0f62ea128f18d4ecba941a652751b": "2c9ed3a3505c4db95a26eec892a8c36c",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/a9d9e382ca594a70e7ec2de5b4512bfc4bb210": "c8e3dc085e2d625fb53a6fca5cb77e09",
".git/objects/3a/3f32a6a359ad0271e86954a07f63370030b4de": "8271bbb74982e6b0b44aff0917736076",
".git/objects/3b/62b9cebf5165d83f1722c1e5f40957bdd6f2f1": "7c346046d32ea0589d3854c8d22517a1",
".git/objects/3b/93d26308a8438b01d94ccb031ab86de4d30a4f": "efd37f87b685c2798c1b0dfe07a4eb14",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/7fb11f04ce7f25b414b8bd1c28729c9a3fb9bf": "8145c48b9fa3f276a814377d63b22f2c",
".git/objects/3d/979a59d1616c60d9b30e0829aa7bdcc11221ee": "ef5e514b65daf5991495397c750be628",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/3f/b6c10bacde95094726d4906d264731231e2deb": "6182eaf9f963ec02e7660ad2340f73e2",
".git/objects/40/be5c79d6cca5c54bd9e77760de694532e56b5c": "18df6796c0f3a8417ac8caf35aca1ecb",
".git/objects/40/eb150d0a482e00e59f2a2416c859f299f87a5b": "715ad1b3345581ba56835ebaa4a23076",
".git/objects/41/2be050190c1f5209aa7e91d1d2a592a3781baf": "c667d7adf3b86f64bed76a978aab785f",
".git/objects/41/e41a3f852fef3ef2ffc8937aeac4d2a49b8a92": "cd9a8a9301fb78f2f7a3230e4fd1412a",
".git/objects/43/3654fffd4193747e3ec763997ec2d6597951db": "c7dabad86b931010ba2403111f03ad13",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/048beed9a5b81ea678bee1fb9e96508124e82e": "c7378625c49f42b0b53a5b6e2a560eb4",
".git/objects/45/201c156799f17677a0e2d8487808b9082dbcab": "5fa240b72f0b794124cdfce5d8f2a22e",
".git/objects/47/3508959b6aa3e20559b648c7ddf4f62517a73c": "e9b880f18bb16ffb678b26029e5a1641",
".git/objects/47/4cf0e5d5cbc98689a433a2281e2cb414565026": "4d9b295546949bb7695591ea963007d5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/c69f0e1717c2c3f47f84420933df86742fc931": "73ee6bef2d6959710c637c30580a2527",
".git/objects/49/4f62194d88dc8cfa28304b74d11179b86fe0b5": "ed92163057ee097211ce631d5016b097",
".git/objects/4b/412024dbc56930c6983b93f1d9eb8262a8bfad": "c6135d8ebb02e1eeb05708432519eec8",
".git/objects/4d/4d33d3022b83291e978642bf475e09a3fb5c8f": "79cbfd839894dc15cae414eca51e8761",
".git/objects/4d/eab6be3adeb48685cc75ac007e5863e82b032e": "24b568da7f7500ba4fde2d66fa1952d7",
".git/objects/4e/8325040f8bfaa57527c29848af8a6dfdacbb14": "4717c392e7f9b1ab9df4a31b823667c3",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/509a610f18170253473ad32d4b2ef721f2340f": "a0edf7f2731840ef1158e143fb16ebe7",
".git/objects/52/41c5e88716abe130bcae4777f497e51e3bd54b": "be3e99dae01fa31598279227fd7e1ed0",
".git/objects/52/ce6673c5518ef764d7e5d1916fa2cbabdea402": "149f69452c81bc2984e00a833427a9ee",
".git/objects/53/48f8ff3368865df400e44496b736c3bcd293b2": "6ccb121a63ad56c5db688d7f5301a620",
".git/objects/53/60fecf9eb80c447a10391160dbaa62ec0baf3a": "dd3aa35dce4ce91e16e1644858d2af23",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/eef27cde7b195b7ead0396428c2fb2d4ab0162": "983d21f703edb8b6daab86d672ab812a",
".git/objects/55/cf2668d2201b9830d9fe3529ac9838f4bc922f": "615cdfc1591be8a003e5d9371965657b",
".git/objects/56/785720a41fa1cd98609706c6297ccd51bae86d": "b439a1c7963b68806ab8e4fb305ed495",
".git/objects/58/800d8f7098321f28e8f8c302d5344999156f5c": "d03800dd6fa4c296dbe5a320b9a14e31",
".git/objects/58/e40a391383d5bf6e691446bbd88d8435acce59": "bd481c4ff94f53c509cff8206452c84b",
".git/objects/59/900a8a925cb5d84d310fa3be44eac1a32e00dd": "a34c33f53410339dcee25c1b2d5339c2",
".git/objects/5a/441e2e4888f1375e9a05a39ef29e2b5c273e5b": "42f20026a2c6d7eeaa9dba9df3f3895f",
".git/objects/5a/5542b214c68081d0681e227d042ef47a446e24": "6e16b2d15fb6f49a52ce440c63b83c5e",
".git/objects/5a/6ce4296dd9bbe08efb0fa35acbfab7505af727": "ecfe759a6117b3353e8a0f61ca0ad905",
".git/objects/5b/4b71e6454908d0d4834f2ed42029c9094cb455": "6a06a0c8ff795f7345944b3f07f24948",
".git/objects/5b/4f87a0df82324d7f08b0f07f5c52c188357f90": "9e2fc5d3700097b41189a42743a09e0e",
".git/objects/5d/6d7c0699fb5d3e2c86c3d7d17cba59faefdb92": "14d8558ba5ff5ea6849b5a8d43bdafc9",
".git/objects/61/f9866dfaff05aa64fd7becb6f9adaced21cc4d": "6d5a1e4ba54e72049f13e36af619b821",
".git/objects/62/c983f61b188b2ce25fbe86c6849e860e44740c": "bf76acb08d2f74effd342fd86dd899c5",
".git/objects/64/99bc8e4270f3ba2379c4336040b01a713ab1bd": "e871af828f8fd349ad8efb4473a06614",
".git/objects/65/c7bd1f1b186f6667515729b69b7ae114e51c86": "22b39d4a869dae71fd1d68cb731e4548",
".git/objects/66/37423f0127d9d7ec8e1d07d092d2a07605c07c": "3d4b04a9a08b8f152f7c2728d4e621bf",
".git/objects/67/40b180bc63407515b5c73ea0d7bd985e44c278": "04e389deb9ba2a010d660ecabff300a0",
".git/objects/68/569fce127238a447c4655a6aa4e840d77090a8": "905f18629c6249b9dd2c024c8c30062e",
".git/objects/68/733ba5de3344a565b89d17d197320b88688c4d": "f9d85fddfa6932be878c1bbf1e445a50",
".git/objects/69/7e9f8d506c5c5a0600d325521a7ab9516b19f6": "8c918e6de24d39a85ad82ee8991f61b4",
".git/objects/6b/b3998a139407ada082d3e6b5061690aa88a58d": "de27f1d2f994a68f28033e8b55400413",
".git/objects/6d/571c4f77345d10c34cf3ce219dce8985fc0131": "0b25f075007ffc38b93849e11faba47c",
".git/objects/6e/4ecb0bd06d2db72fd29bcf406b4ff7569b217e": "5d51635cfadd348d41359048bc8a2c50",
".git/objects/6f/5b0375f219e0fb7de24322c485c1ff4a26de24": "1babfec870d52eee35fd12a86dc5fa3d",
".git/objects/6f/78121652ef0383394e22082456520f5b711d50": "7717f7ddb68741162459a668ae4fbda8",
".git/objects/70/6e947b46779fc3b3d42b59bd3abe9190b6826b": "8277e3986dfd3def7c99e4b0a585a305",
".git/objects/70/e95a3cb96223437c0d2572dbc46cbf76affeb5": "1f07d81b3baba64de215364ab7da06b0",
".git/objects/70/f40df7b50d58c7db826aa5a8025dd60de84f7a": "82b26207a046f4b7cf2363053aaba70c",
".git/objects/73/631d7307144b12d2451c57ac4e4d5c9e7b9f2d": "816db31a10288f7a33c4d3056fa0c6ff",
".git/objects/75/5f15af65a4e58269affd252ed8a7c846d8aea7": "4f5bd222ab149f31e1924280eead2bd7",
".git/objects/76/4867168252e7502ad431974ed0626c776fcf17": "965a3989f5f021bfb2e8cce05df5b0a7",
".git/objects/78/7613bbe3ea4dfc6b3448fa67b791fe046f5210": "65970d03f37fc1bc428ad8a3237b67cb",
".git/objects/78/a6b46aa1410f436a2e60f32d1a0f2e56b0d796": "2915607bbd9726ea1f84f666bfe4f30e",
".git/objects/78/d9377962008778b595b3180a70403442c9ab06": "9e74ff779ffbfc8e57f0755aa04036a1",
".git/objects/79/83ac5d3b3de3a4cf2578be3519b73d41d05b36": "2c4b6412a7e727a61a03a07a64ddbf3f",
".git/objects/7c/92f56aab74266a4d185e52bd6a07abb0d0a4f8": "841e5252dfea463ac1f87d0c8c2fa2ff",
".git/objects/80/3d76936802f0d4a238ee940c2b80776f1aeec4": "d4edae307aa9e1ad18ed89fa4bf6324f",
".git/objects/80/6d02f71e5f12cc45d38c4ee9ecbca8f49630e5": "f441bca23e5774277669a26d1efa875b",
".git/objects/80/c58d93f91136e4b884ee5ca95d0a0cc40ae9e3": "3cf5975b618723aa751ff6a4a258fd2b",
".git/objects/81/d963f35d3fbe3795f89b9307941a27ce22f231": "175893ad463213d230e2c4092e993864",
".git/objects/82/72439979b1b09dc6c38b888f7d8f3653b9d1bd": "53f2b919374be774de64447ae41e15a3",
".git/objects/85/5a15676ef30647f05bc8dc9afc92137a2116b7": "afdd57a3c463b42848634ac02cfb6ecd",
".git/objects/85/89e8bfea569686631a93b6b70b2630a569053d": "6f40c2355ae12949cacbfafd57f8a364",
".git/objects/86/796de02bc92ede7faa94725d109f5aee01fc6d": "86c7c27baee35ec4b0a4e1c23a4b1b26",
".git/objects/87/5eaccbd5548c773527f34b7fa6cfc8ba9e3e4a": "1d08e408056a045f7eeb7cd1f85a0c69",
".git/objects/87/75fac54e010d89199eedc03af0e8e9e68cefb1": "1a0b286df04c4b13a99d21752ef9c800",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/31e57daf4a2878ada1e334a0b0dbbcb5584c19": "791791477453185dc84f5db318a9a375",
".git/objects/8b/59c9dcd793f42468454c13bcaa88a9bec9cec3": "7546fa7789061afc847f7c1ce67d4a13",
".git/objects/8c/8ed8f35ba578ac3d18dca959292a446be483b3": "d98e398651bba64e9e41d378157183d0",
".git/objects/8c/b2df02935ee53767f22203d1aeebe98d4c7649": "448546da7cf2c42a702987b2eff0d5bc",
".git/objects/8c/eb761ee2569a02dd5922d7d9f43a71d47e8396": "c8a607cf783665232a4f0866fd5de5f5",
".git/objects/8d/3d2e22465b488dd65b253a2859edcb2bae4732": "3414c2a93578d9407da02f5739259fa7",
".git/objects/90/ea0ad289df32408d55a4b767716c8e86f9701f": "641d024827d7f93f2a46e5f0ed45baa3",
".git/objects/91/54fb58bd7ea2dcf38b7c578b1e95cb64f4528d": "3745467bfde9d05d1f0bdde396239f90",
".git/objects/95/d188429c10fbd31f3c9db698a848e4569d62a1": "6f1918040602b4bccaf37c4fafb86855",
".git/objects/96/343da2c314ed4c5c6aa7fb765006d3e12f4770": "62cb145eb093731a9b45131f407f8c1c",
".git/objects/96/f5c028cc730539796714d199b3e5d30a9e0ffb": "4da486f87defe4ee0164194feac5d02f",
".git/objects/97/e464bb8ddd846fde652ef369e3420aad814c4e": "777a4799161936f64a7213c6818d2af5",
".git/objects/98/34ceb71c77cb91a7792ba244373428bc0c3aa7": "94b2e126da68f358b55124b344934958",
".git/objects/9a/58a1d2555115be406da519a9e10c9222f006e2": "81dd81ddaf45f87af2b0f08bc7040dd6",
".git/objects/9a/b4f51104e3d297928a2dd81b5088fdaa496ccd": "add7801ee8fdebfb6420d1818e5ccbfc",
".git/objects/9b/c9a30d69a354eb9e7fe7cc3370ba2bcd909a67": "7eb5e78f2f7b6ac58ae921cd851a7d2e",
".git/objects/9f/c8683719cca4d93bb2c1bb88f3cee374bfbba9": "3dc7d4c538e5cc2d6b0257fa221f5a03",
".git/objects/a0/26c28ebde620f97a3efd7675eb4515fb442508": "198647cdf56d47ab06646a9de542dfe6",
".git/objects/a0/df0ac7d94e47687e07974def4294e2f5506d74": "6469121ad0c270d629a93e12f285794e",
".git/objects/a2/cd6f23375cda2d3f20242ffc54ff849b86c01a": "38087e85444bb795f55ccd4f400703ad",
".git/objects/a5/1662ddb1040855c3467621ed8e0737b68acf40": "eb0e4abb8c5354b75fc6a5baf3539abd",
".git/objects/a5/56b18bfd4ab35b2fb2c04baa34309b2dd26290": "57285ba53801279f8434fadd466a3fb8",
".git/objects/a5/805bdef1dafb598fde098b1bccaf2ce284f2d7": "08f8137633f5de8a743c8cc3eea460fe",
".git/objects/a5/d3387a7fdd2462e2696feb5f9ee6ca420a16db": "997679c312f5617ab8e64bfd87b5404e",
".git/objects/a5/d7d75973b3dc07dc9f0f8409c59c21eb380282": "aa167291aac3b368c22efb626ba22068",
".git/objects/a7/28ad115a3037588e2e42c80f7f43d6df986826": "39b6a00cabeb2989959f2d6ab3ec7f5c",
".git/objects/a7/dabba6a39f50344135b46cdfc7d9998e06db69": "e989a8ef01ea02334a3a6c909a76f026",
".git/objects/a9/a4a4eb34346e59c1d95fffdfd49fb3d226f04f": "fe1d9f71ca8a0923bb6f0fe369973a5b",
".git/objects/aa/8d549f7f390d9913d0a550bea413cf650c5024": "fcd03707f32b3ddd9b389f1cbab2fce3",
".git/objects/aa/936531b4cc780ae1c371c22d17e9c94e5dfb39": "10a5d9f12430806db77780713329c529",
".git/objects/ab/d4f32b1f13aaec0327ad30b5e5543d525a38fd": "710b283dd75239df5b9da6692b63e2d1",
".git/objects/ae/09d6ae8c75bac480a3fbd1dc7ba5d77329d42c": "834ccb0b00f168b0bf4767644b699213",
".git/objects/af/47b428dc23e11ba9e95cafb69fd7c51e8bb68d": "16a96ae7d12c72f77ca1194163116afd",
".git/objects/b0/e85208b0f825e7cfaeba0916f15a782a912683": "78731b419988ae68d7a46de241be632c",
".git/objects/b1/a2c2d096b172c19de593e63ba57bf074a603e5": "641f6d9b0662318e6d911a0eed485071",
".git/objects/b5/926d521245ff33a98b5c9998d4da96a0fe95df": "83ffff6c338dea2b6ad560a3b1413c33",
".git/objects/b6/1b7e0c7aa85f5b47299b074ed3fb264af1958f": "15fc89c392877500b875d750b51a2ff0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/babf1262f0317b3d9e7bb1b6788a6ec0857453": "8627855ad8e8e4839980c10afa287840",
".git/objects/b8/77462c8646cdf96b0affa140f6e1f4c4ef2954": "77dbd29aa1137fafec0695936ef1d1bd",
".git/objects/b8/c320fd4fc23a13a71d63aa4b70dc6f496609c1": "686af5830dd7502588c120f5f374c58c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5d3f030b83184fa8acff2b9d330605ed8b1671": "6eed5aa9e922f76366a66d2990f516d4",
".git/objects/b9/ed3cadd810f16347b417c88ae899b95f09ac9d": "d12eacb8c7e9c8acc203c13e25cc7b8e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/91bc9fa64a7586882461cd7116746a7ff4f55d": "14852b4ab501c4f0ae71a3c44e442d04",
".git/objects/bc/da0863e144f9f20d95751305c6dda978d02c7b": "9111abc462c35562e7194ae351d60a4b",
".git/objects/bd/e0d149eb5271aa970e70ced43534146ec0a3c6": "9e5118b23a3aaa0e451a8eaa892e5877",
".git/objects/be/653b2bd57273c73a5b6a5a25e26606328b25ad": "eeb4ac5a47b5825f851c9e4c2cbbdbf6",
".git/objects/be/9e79561c89f9121c5e2912794b9b3a93317e5c": "6c306f259a0bf24aa198a891e5a2c1cb",
".git/objects/bf/589fb966b89a7d16ba24511ad0f8ad6d78d727": "0fe2e6210274b9627873d847e2007c69",
".git/objects/bf/9d711e6a971b0ef177fd1d94592858af133c82": "80d2ea90c86bb1c1d7c4c4eef6b0674b",
".git/objects/c0/30bea506230526563e228c5bf46de54276c8c8": "4b2606d8abc96e843ed3eb95c4604699",
".git/objects/c0/f43831c6cbc1dd785e8e23f32502edeb58212b": "79b65afdde3837b37fe721320bef275f",
".git/objects/c2/7cd6af394e9a50c2a822e1821dc72a2c05a2ca": "15d7efe3aea6bcadc148997125d85e58",
".git/objects/c4/1594c49dd9db48d91194c46ab64cb149d986c2": "f955d1d85a9d5652d05bb45dda371b34",
".git/objects/c5/d107a5e58cb2c6f110f6a74784fe0b22081128": "caef575368723623dfe08edc27d55e28",
".git/objects/c7/05baed41d29fd0d650df9c98e2c0777fbc4107": "ff6bece3480519693b32233febd88435",
".git/objects/c8/9cf251e46da41820b56bf04a2f1072889da213": "470dc9eb86c2c9c5d6c3921a032fdb28",
".git/objects/c9/870f532b6ee5259a8cf0e8db3e40e0d8c67e4f": "a344318387dadfb54b2ddfff42ce5832",
".git/objects/ca/4f0beca3e5cf457f95f184ec59088bf92ee33d": "45683aabdac74d4009598ac82219218e",
".git/objects/cb/658d838755fbcd0b220a3847c5f148d9e03765": "f297ef34177d83657f8da7fca1090657",
".git/objects/cc/11f77974f1e833bc4a68b1e5d6856d93c0facc": "91f25f3bb63aa7b7394dd0c232da3c8b",
".git/objects/ce/4fbc7114918ec1aaadd08feb60f1a3a080d5d3": "dedaceca5a636a851ef5d796cfd044b6",
".git/objects/d0/e336019a19615ef1179db4644d9d1613948ff3": "72d8029ee04dcff02a17bf089514c110",
".git/objects/d1/22b7a5afcc81c51a5b093b9b4e0e0e09cf0e55": "00e3546e8081859d3c8f9cde351ea793",
".git/objects/d2/1226fb0a5329a169b39e55d3210f58feef68dc": "904b1fd4fc8d3b83224176448fcfa215",
".git/objects/d5/9682deb65fa717321bf4ea8906b61c3481261c": "a110a100dea8e9b10e5c592800f3e4fb",
".git/objects/d6/3d9d892618361dfc51e40dc6b420f8194306b6": "472ed34313e28b65bd245c652fb156ed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ca119e1369f524f16924ef14ad52828e85248f": "434d3c09909148208d5c3e505397ad9c",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/461bfad12fd1f7158b527f313ba68b0272e79c": "2604724b0f7527aa2a92667c613e4457",
".git/objects/d7/99c6b0540d734dab4349ac3e60da00a661b86f": "0d17167d71ee15da8717f787e0a37ab1",
".git/objects/d8/df14976684a7201ea78c8dc4793bb96a59a1e4": "7fa0417b19a03a87b5ba562faebb7e18",
".git/objects/db/d1194603c28d0a2f44d2f9b916c27cc812225d": "34485bc81979dd94a6db8f22bbf60a97",
".git/objects/dc/1d187581a330fe30d489e579ab08d13162fbb0": "5a6337a8cde95731c7e955c48319ffb4",
".git/objects/dc/f90ddc9e79931986456476ab28e117298a708b": "5b93073e0e303097b810a156e0d8bff8",
".git/objects/dd/9bced82f4100aa08de4c4067d9b9a3cbbbe3d0": "0f166d2ab4375069c2e05b82c4188af3",
".git/objects/df/9b267184c254ceae28c5953dc62d11861a82b7": "d6c0549bc73c4b0eea172c9ae3718fc6",
".git/objects/e0/e43c5c47614d0c26db8d29b9b1c173e3b495e2": "2ce041f67df02091219c94b018bb22a2",
".git/objects/e2/1b854e3581cb8819fa998a62eba117ffb3bf03": "c86de416368ac0108d4d8bba03f0ad1c",
".git/objects/e3/149c5003a81b88a13311fd9ce8bc512e6759ab": "cb4302e1d4af0a55be3de7ddb270640f",
".git/objects/e5/181ca7dfa66f69899197d82dda0e31667fa9ad": "77b83d38843d1f57b4e4208cb46ee0db",
".git/objects/e5/be47fb2fe3e91455d92fa8c6abef401f80f0d1": "32928ad281c7f6c56a369368c266a29f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1c60a9469960b67fa16b758a80dac2712129e5": "bb298160616281381cffa9a2b998781e",
".git/objects/e7/75688cd553fd963ce8828b0528d5110c1140f3": "bda87be92b6d18033589569e47f85564",
".git/objects/e8/95a25c919dd41c13f2ce0894f1666dd0ba9396": "511907054b3ffc2b2c44f4ead87964ca",
".git/objects/e9/0f77f286bd3b883ecaa82856edf1a019a6b084": "d248df02b122b9565cfa9d3ed8dda32b",
".git/objects/ea/65a8faf6cabd67db2c335a6c0a2b50b8388c94": "4bd94e42301e47796a46a5cb351f3dfc",
".git/objects/eb/26a70eb067b0b0b2c59c47732d99a50b08d0c6": "bd10d06eb7b63dce97c2a3ff3c077cb0",
".git/objects/eb/5c7d29cf58b58d21ff5ea32f644168cbc2f441": "17def94e95e4a8ee8982fd446db2e67f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/253a473eaab3acdc360b1086147d04dd4b9103": "add2fc4e635836ef1ad7b3387655cedc",
".git/objects/ec/851ac39b12849f80a96878de6683f75e6c546e": "48e8910e85c7ba8de69a9d07d13d5934",
".git/objects/ec/ec3429500a2c96de27514843226c46a21997f6": "06399ddf57af21f2f8245bd48de9f0ca",
".git/objects/ed/cd66f88a689af3f34e1f24ae655207b0868268": "f146797288206470a6d743fafa48d49d",
".git/objects/ee/3c7f9d4002862d7322b28c0a7afe827c8b7306": "21a0e6b9c0004b4fe81a15282a78a20d",
".git/objects/ee/a5e18aa3e4ff31cb442d99d83583b4e0706ce2": "86f7830500888605347b24f66b3cc73f",
".git/objects/ef/941fb473550e51f04344260ff942c191ecf25e": "f2d08d7e01b0f6575ae9e07c85e97d65",
".git/objects/f0/2b29b469e71ffb21e65896077fe84365e5f174": "a1d4bf28ac5c436e58a93f81e0d52e84",
".git/objects/f1/b7180ce25395697adc50cd55e95afe8e67ea30": "f8c1e39cae08373283268b53828880a3",
".git/objects/f3/4cdbb4f1d5eb6cdae8a463b5534ee8a4d72e46": "f940ca12bcefa9c373d278ac027f49d5",
".git/objects/f3/98a6e4d5d6f5307d786f61bda90766a41ef14d": "7a012d17a62fc778f474e9586969b852",
".git/objects/f3/b8891e1570364bf0fc17172ee92818156b7129": "265c1da53d463891eb84955b76f19971",
".git/objects/f3/fccce0819187b0ca7c3ef8495c6e87a3fa64de": "b5e3d32b194667a91b5834410d13d541",
".git/objects/f4/2e3f4f86decea174041556f9eb9e8300d1bf20": "95c786903fecbd2555bd4ca72d02d851",
".git/objects/f5/420a40d064944fcec1bcf0485508f0076d3201": "90081a515e928a713fbcff788cb406a6",
".git/objects/f8/dd6869ec49345038f6f002d6efd9c0ef1a9dc0": "3870aaf11a009460c217383231d4654d",
".git/objects/f9/ef11fe2863d32ca3fd60e53c1688c7968fd9b1": "183702505be3ef117c033994e7040cce",
".git/objects/fb/16061c5c50324edef5fac71bca405ecaba5864": "af51858eab68d5e9d24107d1007c950f",
".git/objects/fb/42a8f675bc5c9191c3cf04abe168ef980ccfbb": "4cf59080dcb359f9bbd4ac307737b66a",
".git/objects/fc/4ae740551dc0db68af1c1192659361b79bc554": "0c2390cd7e1447b61a5693252f34e833",
".git/objects/fc/9aeecffb510cd0dfb0613e912292ee3887694a": "69571c96fd8d449919f83764b24fcf47",
".git/objects/fc/e59713ef28c463a8683d2273965b06eba41bc6": "fbb2afcebd05ee15892bbac4e690d5e1",
".git/objects/fc/f20e7202b55447d5f7254e5903a60d8de7fd6b": "e212768a5e7e1298e5b7ea530635e7a6",
".git/objects/fd/8e1eefdd64e788a5842b128b3da6c77cf6a184": "a6f9967dd0114548b0f8a1c434d129cb",
".git/objects/fd/ca8fc66676e6894c7222d85cbc7adfc57fb9fc": "589c9657e4391ec457ac20f2f654ccc2",
".git/objects/ff/0a6c1734d111bd467728c5c31e9f40f7f6392e": "8ab55f611404a9673faa509b6e55096e",
".git/objects/ff/7139d82cacf3a5a5e47eb4e3bd268b531f548c": "1400825778fac41431fba3a9b9189810",
".git/refs/heads/main": "0645b13841f193ff7200bf7ba1883cbd",
".git/refs/remotes/origin/main": "0645b13841f193ff7200bf7ba1883cbd",
"assets/AssetManifest.bin": "b2dbd1cc8cc4eff1b77905308acf4996",
"assets/AssetManifest.bin.json": "627185b5fe36951c8281bcd44f023ca1",
"assets/AssetManifest.json": "1c481f05af27ebfead10c5cf94c4f20a",
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
"assets/assets/sfx/hit1.mp3": "52f15e8def2750b4220796d7dd749e18",
"assets/assets/sfx/hit2.mp3": "19e99975f122b67cb5e17bb5e04818da",
"assets/assets/sfx/jump1.mp3": "247686373bffc27c3962702465614ea8",
"assets/assets/sfx/README.md": "c2318c37838f1811dd8a00d1bd6220a8",
"assets/assets/sfx/score1.mp3": "f51ae86826ee34f92514fb8e4b027edc",
"assets/assets/sfx/score2.mp3": "f9494ae1fe1a9b78563b386acca66c2c",
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
"index.html": "fcab396104c9103ab6664d0d57c288cd",
"/": "fcab396104c9103ab6664d0d57c288cd",
"main.dart.js": "6004c4a66681c86c9a50f77b7e286535",
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
